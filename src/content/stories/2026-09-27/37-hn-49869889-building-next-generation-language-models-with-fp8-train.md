---
title: Building next-generation language models with FP8 training and inference
source: hn
url: https://www.deepl.com/en/blog/tech/next-generation-llm-fp8-training
date: '2026-09-27'
tags:
- catchup
- fp8
- hn
- inference-latency
- llm-training
- matrix-multiplication
- nvidia-h100
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49869889'
comments: https://news.ycombinator.com/item?id=49869889
why_read: Learn how DeepL utilized native FP8 precision on modern GPUs to scale model
  size and translation quality while maintaining strict inference latency limits.
authors:
- "Markus Schn\xF6s"
- Fabian Joswig
---

Scaling production model serving requires rethinking numerical precision across the entire pipeline. DeepL transitioned their next-generation translation LLMs from standard 16-bit floating point down to native 8-bit floating point (FP8) across both training and inference stages on a 544-GPU NVIDIA H100 cluster.

Shifting matrix multiplications to FP8 Tensor Cores provided significant computational speedups, yielding a 1.4x quality improvement in European language pairs and a 1.7x boost in complex pairs like English to Japanese while staying strictly within the original production latency budget. The primary engineering challenge lies in maintaining training stability and numerical range when halving bit precision.

For machine learning infrastructure teams, adopting FP8 is no longer just an inference optimization trick. Integrating reduced precision directly into the training loop maximizes compute density and allows significantly larger models to meet tight real-time serving SLAs.
