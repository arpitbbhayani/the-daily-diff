---
title: Slotstream streams MoE experts from SSD to overcome LLM memory wall
source: hn
url: https://singularitymoments.com/content/inside-slotstream-swift-ssd-expert-streaming-and-breaking-the-llm-memory-wall/
date: '2026-09-01'
tags:
- apple-silicon
- catchup
- hn
- local-inference
- memory-management
- mixture-of-experts
- slotstream
- ssd-streaming
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49528916'
comments: https://news.ycombinator.com/item?id=49528916
why_read: Read this to understand how Slotstream allows running massive Mixture-of-Experts
  LLMs on consumer hardware. It explains how streaming expert tensors from SSD overcomes
  the typical VRAM and memory-mapping challenges.
authors:
- Carlos Galarza
---

The "LLM memory wall" is a real problem for local inference, especially with massive Mixture-of-Experts (MoE) models like Qwen3.8-Flash-Next, which can weigh over 100GB. Most systems struggle with this because they try to pin the entire model in RAM.

Slotstream offers an ingenious solution: it streams only the active MoE expert tensors from fast NVMe SSD storage into tightly budgeted Apple Silicon Metal memory buffers, on demand. Given that 90 percent of an MoE model can sit idle during any given token evaluation, this design dramatically reduces VRAM requirements.

This is not just an optimization; it is a fundamental rethinking of how large LLMs can be served locally. It turns a prohibitive memory problem into an efficient I/O challenge, making powerful AI models accessible on consumer hardware. A truly smart architectural trade-off.
