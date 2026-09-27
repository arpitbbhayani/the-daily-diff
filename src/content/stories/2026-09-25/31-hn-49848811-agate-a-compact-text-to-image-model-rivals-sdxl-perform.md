---
title: Agate a compact text-to-image model rivals SDXL performance
source: hn
url: https://huggingface.co/Logolabs/agate-preview-001
date: '2026-09-25'
tags:
- agate
- catchup
- geneval-score
- hn
- icon-generation
- small-model
- text-to-image-model
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49848811'
comments: https://news.ycombinator.com/item?id=49848811
why_read: Read this to learn about Agate, a small and efficient text-to-image model
  that rivals larger models like SDXL in performance. It offers a resource-friendly
  option for tasks like icon generation and can run quickly on consumer GPUs.
authors:
- stefatorus
---

Agate, a new 260M-parameter text-to-image model, introduces a genuinely novel "thinker and renderer" architecture. Imagine a small recurrent transformer (the thinker) planning a region map, which then steers a convolutional U-Net (the renderer) to generate the final image.

This separation of concerns allows Agate to achieve GenEval scores competitive with models like SDXL, despite being significantly smaller. Crucially, it runs in under two seconds on a consumer GPU, making high-quality image generation far more accessible and efficient.

For engineers building applied AI systems, this architectural pattern offers valuable lessons in designing resource-efficient models. It shows that smart design can yield superior performance without needing an astronomically large parameter count. This is a practical step forward for efficient LLM infrastructure.
