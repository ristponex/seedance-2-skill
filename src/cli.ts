#!/usr/bin/env npx ts-node

/**
 * Seedance 2.0 视频生成 CLI
 * 通过Atlas Cloud API生成电影级AI视频
 * 当前使用Seedance v1.5 Pro，2.0上线后自动升级
 */

const BASE_URL = "https://api.atlascloud.ai/v1";

// 解析命令行参数
function parseArgs(args: string[]): Record<string, string> {
  const parsed: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const key = arg.slice(2);
      const value = args[i + 1];
      if (value && !value.startsWith("--")) {
        parsed[key] = value;
        i++;
      } else {
        parsed[key] = "true";
      }
    }
  }
  return parsed;
}

// 提交视频生成请求
async function submitPrediction(params: {
  prompt: string;
  imageUrl?: string;
  duration: number;
  aspectRatio: string;
  apiKey: string;
}): Promise<string> {
  // 根据是否有参考图片选择T2V或I2V模型
  const model = params.imageUrl
    ? "bytedance/seedance-v1.5-pro-image-to-video"
    : "bytedance/seedance-v1.5-pro-text-to-video";

  const input: Record<string, unknown> = {
    prompt: params.prompt,
    duration: params.duration,
    aspect_ratio: params.aspectRatio,
  };

  // 如果提供了参考图片，添加到请求中
  if (params.imageUrl) {
    input.image_url = params.imageUrl;
  }

  const response = await fetch(`${BASE_URL}/predictions`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${params.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model, input }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`提交请求失败 (${response.status}): ${error}`);
  }

  const data = await response.json();
  return data.id;
}

// 轮询等待视频生成完成
async function pollForResult(
  predictionId: string,
  apiKey: string
): Promise<string> {
  const maxAttempts = 60; // 最大轮询次数（5分钟）
  const pollInterval = 5000; // 轮询间隔5秒

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    const response = await fetch(`${BASE_URL}/predictions/${predictionId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!response.ok) {
      throw new Error(`查询状态失败 (${response.status})`);
    }

    const result = await response.json();
    const status = result.status;

    // 生成成功，返回视频URL
    if (status === "succeeded") {
      return result.output;
    }

    // 生成失败，抛出错误
    if (status === "failed" || status === "canceled") {
      throw new Error(`视频生成失败: ${result.error || "未知错误"}`);
    }

    // 打印当前状态
    console.log(`⏳ 状态: ${status}... (${attempt + 1}/${maxAttempts})`);

    // 等待后继续轮询
    await new Promise((resolve) => setTimeout(resolve, pollInterval));
  }

  throw new Error("视频生成超时，请稍后重试");
}

// 显示使用帮助
function showHelp(): void {
  console.log(`
🎬 Seedance 2.0 视频生成 CLI

用法:
  npx seedance-2 --prompt "视频描述" [选项]

选项:
  --prompt         视频描述（必填）
  --image          参考图片URL（可选，启用I2V模式）
  --duration       视频时长，秒（默认: 5）
  --aspect-ratio   宽高比: 16:9, 9:16, 1:1（默认: 16:9）
  --resolution     输出分辨率（默认: 720p）
  --help           显示帮助信息

示例:
  npx seedance-2 --prompt "金色日落下的海滩，海浪轻轻拍打沙滩"
  npx seedance-2 --prompt "人物转身微笑" --image "https://example.com/photo.jpg"
  npx seedance-2 --prompt "城市夜景延时摄影" --duration 10 --aspect-ratio 16:9

定价:
  Seedance v1.5 Pro: from $0.222/s
  注册Atlas Cloud: https://www.atlascloud.ai?ref=JPM683（首充25%奖励）
`);
}

// 主函数
async function main(): Promise<void> {
  const args = parseArgs(process.argv.slice(2));

  // 显示帮助
  if (args.help || Object.keys(args).length === 0) {
    showHelp();
    process.exit(0);
  }

  // 验证必填参数
  const prompt = args.prompt;
  if (!prompt) {
    console.error("❌ 错误: 请提供 --prompt 参数");
    showHelp();
    process.exit(1);
  }

  // 检查API密钥
  const apiKey = process.env.ATLAS_API_KEY;
  if (!apiKey) {
    console.error("❌ 错误: 未设置 ATLAS_API_KEY 环境变量");
    console.error("请访问 https://www.atlascloud.ai?ref=JPM683 获取API密钥");
    process.exit(1);
  }

  // 解析可选参数
  const imageUrl = args.image;
  const duration = parseInt(args.duration || "5", 10);
  const aspectRatio = args["aspect-ratio"] || "16:9";

  // 打印生成配置
  console.log("🎬 Seedance 视频生成");
  console.log("━".repeat(40));
  console.log(`📝 提示词: ${prompt}`);
  if (imageUrl) console.log(`🖼️  参考图: ${imageUrl}`);
  console.log(`⏱️  时长: ${duration}秒`);
  console.log(`📐 宽高比: ${aspectRatio}`);
  console.log(`🎯 模型: Seedance v1.5 Pro`);
  console.log("━".repeat(40));

  try {
    // 提交生成请求
    console.log("\n📤 提交视频生成请求...");
    const predictionId = await submitPrediction({
      prompt,
      imageUrl,
      duration,
      aspectRatio,
      apiKey,
    });
    console.log(`✅ 请求已提交，预测ID: ${predictionId}`);

    // 轮询等待结果
    console.log("\n⏳ 等待视频生成...");
    const videoUrl = await pollForResult(predictionId, apiKey);

    // 输出结果
    console.log("\n" + "━".repeat(40));
    console.log("✅ 视频生成完成！");
    console.log(`🎥 视频URL: ${videoUrl}`);
    console.log("━".repeat(40));
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`\n❌ 错误: ${message}`);
    process.exit(1);
  }
}

// 执行主函数
main();
