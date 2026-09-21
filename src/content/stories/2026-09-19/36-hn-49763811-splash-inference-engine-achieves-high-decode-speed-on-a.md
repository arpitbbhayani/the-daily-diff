---
title: Splash inference engine achieves high decode speed on Apple silicon
source: hn
url: https://inco.ai/blog/splash/
date: '2026-09-19'
tags:
- apple-silicon
- catchup
- decode-speed
- hn
- inference-engine
- local-inference
- qwen3.8-27b
- speculative-decoding
- splash
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49763811'
comments: https://news.ycombinator.com/item?id=49763811
why_read: Read this to learn about Splash, an open-source inference engine optimized
  for Apple silicon that delivers significantly faster decode speeds for large language
  models. You will understand its unique model-centric design and how to quickly get
  started with local inference.
authors:
- namjh
---

Achieving maximum LLM inference efficiency means rethinking engine design. Splash, an open-source inference engine, demonstrates this by specializing its kernels, draft model, and memory plan for the specific LLM it serves. This unique 'built around the model' approach fundamentally differs from general-purpose engines. Its creators report a remarkable 2x decode speed improvement over the next fastest engine when running Qwen3.8-27B on Apple Silicon, with speedups increasing to nearly 4x for four parallel subagents.This specialization is not just a theoretical gain; it offers substantial practical benefits for applied AI and agent development. Engineers can leverage this engine to run frontier open models locally on their Macs with significantly better performance, accelerating development and reducing reliance on cloud APIs for prototyping. The engine also offers OpenAI Chat Completions API compatibility, making integration straightforward.The real takeaway is that optimal performance in LLM infrastructure often comes from deep, model-aware optimization, not just hardware upgrades. This project provides a tangible example of how targeted engineering delivers surprising gains. Developers working on AI agents will find this directly applicable to their local development workflows.
