# 🎬 Seedance 2.0 AI Agent Skill

[![AI Agent Skill](https://img.shields.io/badge/AI%20Agent-Skill-blue?style=for-the-badge)](https://github.com/thoughtincode/seedance-2-skill)
[![Multi-Platform](https://img.shields.io/badge/Works%20With-15%2B%20Platforms-green?style=for-the-badge)](#supported-platforms)
[![Seedance v1.5 Pro](https://img.shields.io/badge/Current-Seedance%20v1.5%20Pro-orange?style=for-the-badge)](#)
[![Seedance 2.0 Ready](https://img.shields.io/badge/Upgrades%20To-Seedance%202.0-red?style=for-the-badge)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

**An open AI agent skill for Seedance 2.0 video generation. Works with Claude Code, Cursor, Codex, Copilot, Gemini CLI, Windsurf, Kiro, and 15+ AI coding agents.**

> Currently uses **Seedance v1.5 Pro** (from $0.044/s) — automatically upgrades to **Seedance 2.0** when the API becomes available. No config changes needed.

---

## Table of Contents

- [Quick Start](#quick-start)
- [Supported Platforms](#supported-platforms)
- [Features](#features)
- [CLI Usage](#cli-usage)
- [Agent Skill Integration](#agent-skill-integration)
- [API Examples](#api-examples)
- [Pricing](#pricing)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Quick Start

### Install the Skill

```bash
npx skills add thoughtincode/seedance-2-skill
```

### Set Your API Key

```bash
export ATLAS_API_KEY=your_api_key_here
```

Get your API key at [Atlas Cloud](https://www.atlascloud.ai?ref=JPM683) — **25% bonus on first deposit**.

### Generate Your First Video

```bash
npx seedance-2 --prompt "A golden retriever running through a sunflower field at sunset, cinematic slow motion, 4K"
```

That's it. Three steps to cinema-grade AI video.

---

## Supported Platforms

This is an **open AI agent skill** — not locked to any single platform. It works with all major AI coding agents:

| Platform | Status | Integration |
|----------|--------|-------------|
| **Claude Code** | ✅ Full Support | Native skill via SKILL.md |
| **Cursor** | ✅ Full Support | Agent skill integration |
| **GitHub Copilot** | ✅ Full Support | Agent mode |
| **OpenAI Codex** | ✅ Full Support | Tool/function calling |
| **Gemini CLI** | ✅ Full Support | Agent skill |
| **Windsurf** | ✅ Full Support | Cascade agent |
| **Kiro** | ✅ Full Support | Spec-driven skill |
| **OpenCode** | ✅ Full Support | CLI agent skill |
| **Aider** | ✅ Full Support | Tool integration |
| **Continue** | ✅ Full Support | Custom skill |
| **Cline** | ✅ Full Support | MCP-compatible |
| **Roo Code** | ✅ Full Support | Agent skill |
| **PearAI** | ✅ Full Support | Agent integration |
| **Void** | ✅ Full Support | Agent skill |
| **Amazon Q Developer** | ✅ Full Support | Agent mode |
| **Any MCP-compatible agent** | ✅ Full Support | Standard protocol |

### Why Multi-Platform?

Most "agent skills" only work with one platform. This skill is built on **open standards** — a simple CLI + SKILL.md + CLAUDE.md pattern that any AI agent can understand and invoke.

---

## Features

### Current: Seedance v1.5 Pro

- **Text-to-Video (T2V)** — Generate videos from text descriptions
- **Image-to-Video (I2V)** — Animate reference images into video
- **Multiple Aspect Ratios** — 16:9 (landscape), 9:16 (portrait/vertical), 1:1 (square)
- **Configurable Duration** — 5s and 10s video lengths
- **Cinema-Grade Quality** — ByteDance's production-ready video model
- **Fast Generation** — Videos ready in 1-3 minutes
- **Async Polling** — Submit and poll for results, no blocking

### Coming with Seedance 2.0

When Seedance 2.0 API launches, this skill auto-upgrades to support:

- **Native Audio Generation** — Videos with synchronized sound, music, and ambient audio
- **Multi-Shot Storytelling** — Generate coherent multi-scene videos with narrative flow
- **Lip-Sync** — Character lip movements synced to dialogue audio
- **Extended Duration** — Longer video generation (30s+ expected)
- **Enhanced Physics** — Improved real-world physics simulation
- **Higher Resolution** — Up to 1080p output expected

> You don't need to change anything. When 2.0 launches, the skill updates the model endpoint automatically.

---

## CLI Usage

### Basic Text-to-Video

```bash
npx seedance-2 --prompt "A futuristic cityscape at night with flying cars and neon lights"
```

### Image-to-Video

```bash
npx seedance-2 \
  --prompt "The character turns and walks toward the camera" \
  --image "https://example.com/character.jpg"
```

### Custom Duration and Aspect Ratio

```bash
npx seedance-2 \
  --prompt "Ocean waves crashing on a rocky shore, slow motion" \
  --duration 10 \
  --aspect-ratio 16:9
```

### Vertical Video (TikTok/Reels/Shorts)

```bash
npx seedance-2 \
  --prompt "A dancer performing a hip-hop routine in a studio" \
  --aspect-ratio 9:16 \
  --duration 5
```

### Square Video (Instagram Feed)

```bash
npx seedance-2 \
  --prompt "A cup of coffee being poured with steam rising, cozy cafe atmosphere" \
  --aspect-ratio 1:1
```

### Full Options

```bash
npx seedance-2 \
  --prompt "Your video description" \
  --image "https://example.com/ref.jpg" \
  --duration 10 \
  --aspect-ratio 16:9 \
  --resolution 720p
```

### Options Reference

| Option | Description | Default |
|--------|-------------|---------|
| `--prompt` | Video description (required) | — |
| `--image` | Reference image URL (for I2V) | — |
| `--duration` | Video length in seconds | `5` |
| `--aspect-ratio` | `16:9`, `9:16`, `1:1` | `16:9` |
| `--resolution` | Output resolution | `720p` |

---

## Agent Skill Integration

### Claude Code

The skill is automatically available when installed. Claude Code reads `SKILL.md` and `CLAUDE.md` to understand capabilities.

```
> Generate a 10-second cinematic video of a mountain sunrise with clouds rolling through valleys
```

Claude Code will:
1. Read the skill configuration
2. Call the Seedance API via Atlas Cloud
3. Poll for completion
4. Return the video URL

### Cursor

In Cursor's Composer or Chat, the agent can invoke the skill:

```
@seedance-2 Create a product demo video showing a sleek smartphone rotating on a dark background
```

### GitHub Copilot (Agent Mode)

```
Generate a video ad for a fitness app showing someone running at dawn
```

Copilot agent mode will discover and use the installed skill automatically.

### Gemini CLI

```bash
gemini "Use the seedance-2 skill to generate a 5-second video of cherry blossoms falling in slow motion"
```

### Any Agent

The skill exposes a standard interface:
1. **SKILL.md** — Describes capabilities, triggers, and parameters
2. **CLAUDE.md** — Technical API details for the agent
3. **CLI** — `npx seedance-2 --prompt "..."` for direct invocation

Any AI agent that can read markdown files and execute CLI commands can use this skill.

---

## API Examples

### Python — Text-to-Video

```python
import requests
import time

API_KEY = "your_atlas_api_key"
BASE_URL = "https://api.atlascloud.ai/v1"

# Step 1: Submit video generation request
response = requests.post(
    f"{BASE_URL}/predictions",
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "model": "bytedance/seedance-v1.5-pro-text-to-video",
        "input": {
            "prompt": "A golden eagle soaring over snowy mountain peaks, cinematic aerial shot",
            "duration": 5,
            "aspect_ratio": "16:9"
        }
    }
)

prediction = response.json()
prediction_id = prediction["id"]
print(f"Prediction ID: {prediction_id}")

# Step 2: Poll for completion
while True:
    status_response = requests.get(
        f"{BASE_URL}/predictions/{prediction_id}",
        headers={"Authorization": f"Bearer {API_KEY}"}
    )
    result = status_response.json()
    status = result["status"]

    if status == "succeeded":
        video_url = result["output"]
        print(f"Video ready: {video_url}")
        break
    elif status == "failed":
        print(f"Generation failed: {result.get('error', 'Unknown error')}")
        break
    else:
        print(f"Status: {status}... waiting")
        time.sleep(5)
```

### Python — Image-to-Video

```python
import requests
import time

API_KEY = "your_atlas_api_key"
BASE_URL = "https://api.atlascloud.ai/v1"

response = requests.post(
    f"{BASE_URL}/predictions",
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    },
    json={
        "model": "bytedance/seedance-v1.5-pro-image-to-video",
        "input": {
            "prompt": "The woman smiles and turns her head slowly to the right",
            "image_url": "https://example.com/portrait.jpg",
            "duration": 5,
            "aspect_ratio": "16:9"
        }
    }
)

prediction = response.json()
prediction_id = prediction["id"]

# Poll for result
while True:
    result = requests.get(
        f"{BASE_URL}/predictions/{prediction_id}",
        headers={"Authorization": f"Bearer {API_KEY}"}
    ).json()

    if result["status"] == "succeeded":
        print(f"Video: {result['output']}")
        break
    elif result["status"] == "failed":
        print(f"Failed: {result.get('error')}")
        break
    time.sleep(5)
```

### cURL — Quick Test

```bash
# Submit generation
curl -X POST https://api.atlascloud.ai/v1/predictions \
  -H "Authorization: Bearer $ATLAS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "bytedance/seedance-v1.5-pro-text-to-video",
    "input": {
      "prompt": "A time-lapse of a flower blooming in a garden",
      "duration": 5,
      "aspect_ratio": "16:9"
    }
  }'

# Check status (replace PREDICTION_ID)
curl https://api.atlascloud.ai/v1/predictions/PREDICTION_ID \
  -H "Authorization: Bearer $ATLAS_API_KEY"
```

### JavaScript/TypeScript

```typescript
const API_KEY = process.env.ATLAS_API_KEY;
const BASE_URL = "https://api.atlascloud.ai/v1";

async function generateVideo(prompt: string, options: {
  imageUrl?: string;
  duration?: number;
  aspectRatio?: string;
} = {}) {
  // Submit request
  const model = options.imageUrl
    ? "bytedance/seedance-v1.5-pro-image-to-video"
    : "bytedance/seedance-v1.5-pro-text-to-video";

  const response = await fetch(`${BASE_URL}/predictions`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      input: {
        prompt,
        image_url: options.imageUrl,
        duration: options.duration || 5,
        aspect_ratio: options.aspectRatio || "16:9"
      }
    })
  });

  const prediction = await response.json();
  const predictionId = prediction.id;

  // Poll for completion
  while (true) {
    const statusRes = await fetch(
      `${BASE_URL}/predictions/${predictionId}`,
      { headers: { "Authorization": `Bearer ${API_KEY}` } }
    );
    const result = await statusRes.json();

    if (result.status === "succeeded") {
      return result.output;
    } else if (result.status === "failed") {
      throw new Error(result.error || "Video generation failed");
    }

    await new Promise(resolve => setTimeout(resolve, 5000));
  }
}

// Usage
const videoUrl = await generateVideo(
  "A drone shot flying through a misty forest at sunrise",
  { duration: 10, aspectRatio: "16:9" }
);
console.log("Video URL:", videoUrl);
```

---

## Pricing

### Current: Seedance v1.5 Pro

| Feature | Price |
|---------|-------|
| Text-to-Video | **from $0.044/s** |
| Image-to-Video | **from $0.044/s** |
| Any duration (5s/10s) | Same price |
| Any aspect ratio | Same price |

*Prices shown are starting prices. Higher resolution or longer duration may cost more.*

### Coming: Seedance 2.0

| Feature | Estimated Price |
|---------|----------------|
| Video generation | **~$0.10-$0.80/minute** |
| Native audio | Included |
| Multi-shot | Per-segment pricing TBD |
| Lip-sync | Included |

> Pricing is per-video with no subscriptions or minimums. Pay only for what you generate.

### Get Started

Sign up at **[Atlas Cloud](https://www.atlascloud.ai?ref=JPM683)** and get a **25% bonus on your first deposit**.

| Deposit | Bonus | Total Credits |
|---------|-------|---------------|
| $10 | +$2.50 | $12.50 |
| $50 | +$12.50 | $62.50 |
| $100 | +$25.00 | $125.00 |

---

## Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `ATLAS_API_KEY` | Your Atlas Cloud API key | Yes |

### Setup

1. Create an account at [Atlas Cloud](https://www.atlascloud.ai?ref=JPM683)
2. Navigate to API Keys in your dashboard
3. Create a new API key
4. Set the environment variable:

```bash
# Add to your shell profile (~/.bashrc, ~/.zshrc, etc.)
export ATLAS_API_KEY=your_api_key_here
```

Or create a `.env` file in your project:

```bash
cp .env.example .env
# Edit .env with your API key
```

---

## How It Works

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐     ┌──────────────┐
│  AI Agent    │────>│  Skill CLI   │────>│ Atlas Cloud  │────>│  Seedance    │
│  (Claude,    │     │  seedance-2  │     │  API         │     │  v1.5 Pro    │
│   Cursor,    │<────│              │<────│              │<────│  (→ v2.0)    │
│   Copilot)   │     │  Returns URL │     │  Async Poll  │     │  ByteDance   │
└─────────────┘     └──────────────┘     └─────────────┘     └──────────────┘
```

1. **You or your AI agent** describes a video in natural language
2. **The skill** sends the request to Atlas Cloud API
3. **Atlas Cloud** routes to Seedance v1.5 Pro (or 2.0 when available)
4. **Seedance** generates the video
5. **The skill** polls for completion and returns the video URL

---

## Use Cases

### Marketing & Ads
```bash
npx seedance-2 --prompt "Product showcase: a sleek wireless earbuds case opens, earbuds float out with particle effects, premium dark background" --aspect-ratio 1:1
```

### Social Media Content
```bash
npx seedance-2 --prompt "Satisfying top-down cooking video: hands chopping colorful vegetables on a wooden cutting board" --aspect-ratio 9:16
```

### E-Commerce
```bash
npx seedance-2 --prompt "A pair of running shoes on a reflective surface, camera slowly orbiting 360 degrees, studio lighting" --aspect-ratio 16:9 --duration 10
```

### Storytelling & Film
```bash
npx seedance-2 --prompt "A lonely astronaut stands on Mars, looking at Earth in the sky, dust blowing, cinematic wide shot" --duration 10
```

### Real Estate
```bash
npx seedance-2 --prompt "Aerial drone shot of a luxury modern home with pool, golden hour lighting, slow camera push forward" --aspect-ratio 16:9
```

---

## Troubleshooting

### Common Issues

**"ATLAS_API_KEY not set"**
```bash
export ATLAS_API_KEY=your_key_here
```

**"Insufficient credits"**
- Check your balance at [Atlas Cloud Dashboard](https://www.atlascloud.ai?ref=JPM683)
- Top up your credits (25% bonus on first deposit)

**"Generation failed"**
- Check your prompt — avoid NSFW or prohibited content
- Try a shorter, more descriptive prompt
- Ensure image URLs are publicly accessible (for I2V)

**"Timeout"**
- Video generation typically takes 1-3 minutes
- The CLI polls automatically — be patient
- If it takes over 5 minutes, try again

### Getting Help

- [GitHub Issues](https://github.com/thoughtincode/seedance-2-skill/issues)
- [Atlas Cloud Documentation](https://www.atlascloud.ai?ref=JPM683)

---

## Compared to Other Video APIs

| Feature | Seedance (via Atlas Cloud) | Runway API | Pika API |
|---------|---------------------------|------------|----------|
| Price per video | **from $0.044/s** | ~$0.50+ | ~$0.40+ |
| Agent skill support | **Yes (15+ platforms)** | No | No |
| Image-to-Video | **Yes** | Yes | Yes |
| Text-to-Video | **Yes** | Yes | Yes |
| Coming: Native Audio | **Yes (v2.0)** | No | No |
| Coming: Multi-Shot | **Yes (v2.0)** | No | No |
| Coming: Lip-Sync | **Yes (v2.0)** | No | No |
| API availability | **Now** | Waitlist | Limited |
| Pay-as-you-go | **Yes** | Credits | Credits |

---

## Trust & Reliability

- **Atlas Cloud** — Trusted API platform for AI model access
- **ByteDance Seedance** — Production-grade video model from the makers of TikTok
- **25% First Deposit Bonus** — [Sign up now](https://www.atlascloud.ai?ref=JPM683)
- **No Subscriptions** — Pay only for what you use
- **MIT Licensed** — Open source, use it anywhere

---

## Roadmap

- [x] Seedance v1.5 Pro Text-to-Video
- [x] Seedance v1.5 Pro Image-to-Video
- [x] Multi-platform agent skill support
- [x] CLI interface
- [ ] Seedance 2.0 support (auto-upgrade on API launch)
- [ ] Native audio generation
- [ ] Multi-shot storytelling
- [ ] Lip-sync support
- [ ] Extended duration (30s+)
- [ ] Batch generation
- [ ] Webhook callbacks

---

## Contributing

Contributions are welcome! Please read our contributing guidelines:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## License

MIT License — see [LICENSE](LICENSE) for details.

---

## Links

- **Atlas Cloud API**: [https://www.atlascloud.ai?ref=JPM683](https://www.atlascloud.ai?ref=JPM683)
- **GitHub**: [https://github.com/thoughtincode/seedance-2-skill](https://github.com/thoughtincode/seedance-2-skill)
- **Seedance by ByteDance**: World-class AI video generation model

---

<p align="center">
  <b>🎬 Start generating cinema-grade AI videos today</b><br>
  <a href="https://www.atlascloud.ai?ref=JPM683">Get your Atlas Cloud API key</a> — 25% bonus on first deposit
</p>

<p align="center">
  <sub>Built with Seedance by ByteDance | Powered by Atlas Cloud API</sub>
</p>
