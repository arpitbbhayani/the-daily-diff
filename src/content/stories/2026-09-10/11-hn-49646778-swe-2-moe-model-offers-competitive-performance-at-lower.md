---
title: SWE-2 MoE model offers competitive performance at lower cost
source: hn
url: https://tokenstead.ai/models/swe-2
date: '2026-09-10'
tags:
- agentic coding
- ai model benchmarks
- catchup
- cost efficiency
- hn
- inference optimization
- mixture-of-experts
- swe-2
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49646778'
comments: https://news.ycombinator.com/item?id=49646778
why_read: This text details Cognition's SWE-2 MoE model, showcasing its competitive
  performance on benchmarks like FrontierCode and significant cost efficiency compared
  to leading AI models. Readers will understand its strengths and current limitations
  in long-horizon agentic work.
authors:
- cdnsteve
---

Cognition's new SWE-2 coding agent is setting impressive benchmarks, not just with sheer parameter count but with smart architectural choices. This Mixture-of-Experts model scales to 2.8 trillion parameters while keeping only 104 billion active per token, showing a clear path for efficient large-scale agentic AI.

The engineering behind SWE-2 is fascinating, especially the use of NVFP4 and FP8 kernels with quantization-aware training for inference. A prefill delayer also boosts tokens per minute per GPU by 10 to 20 percent, illustrating how optimizing the serving stack is as critical as the model itself.

Achieving 50.0 on FrontierCode, just one point behind Claude Fable 5.1, at a claimed 64 percent lower cost, highlights a significant leap in developer productivity. The model lands its first real edit at a median of step 18, a sharp improvement from previous versions, which directly translates to faster agentic problem-solving.

This demonstrates that cutting-edge AI for complex tasks like coding demands sophisticated model architecture combined with meticulous inference optimization. It is not just about the model, but the entire system supporting it.
