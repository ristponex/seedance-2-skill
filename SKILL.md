---
name: seedance-2
description: Generate cinema-grade AI videos with Seedance 2.0 (currently 1.5 Pro) via Atlas Cloud API. Supports native audio, multi-shot storytelling, lip-sync. Use when asked to create videos, generate video content, or produce video ads.
---

# Seedance 2.0 Video Generation Skill

## 使用方式
当用户要求生成视频、创建视频广告、制作短片时触发此技能。

## API调用
POST https://api.atlascloud.ai/v1/prediction/{prediction_id}

### 请求参数
- prompt: 视频描述
- image_url: 参考图片URL（可选，I2V模式）
- duration: 视频时长（秒）
- aspect_ratio: 宽高比（16:9, 9:16, 1:1）

### 环境变量
ATLAS_API_KEY - Atlas Cloud API密钥

## 定价
- Seedance v1.5 Pro: $0.222/视频
- Seedance 2.0: 即将上线（预估$0.10-$0.80/分钟）

## 注册
https://www.atlascloud.ai?ref=JPM683 — 首充25%奖励
