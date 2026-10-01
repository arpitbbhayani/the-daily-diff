---
title: Specialized GPU kernels maximize Qwen inference on Strix Halo
source: github
url: https://github.com/peonist-ai/halogen-flash-server
date: '2026-09-30'
tags:
- amd-strix-halo
- catchup
- github
- gpu-kernels
- llm-inference
- prompt-cache
- rocm
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49911451'
comments: https://news.ycombinator.com/item?id=49911451
why_read: Read this to understand how bypassing general-purpose runtimes in favor
  of hardware- and model-specific GPU kernels enables extreme LLM inference throughput.
authors:
- peonist-ai
---

Most modern LLM inference runtimes trade peak efficiency for broad hardware portability. Halogen takes the opposite path by abandoning portability layers entirely, targeting custom-written kernels exclusively to AMD Strix Halo silicon for Qwen3.8-Flash-Next.

By designing every kernel directly for the gfx1151 architecture without fallback paths, the server reaches 1,584 tokens per second during prompt prefill across 8,192-token contexts. It also handles 100,000-token multi-turn context follow-ups in roughly two seconds via default prompt caching, and sustains 56 tokens per second during decode using speculative draft heads.

This demonstrates the performance ceiling available when you discard general abstractions in favor of direct hardware-model co-design.
