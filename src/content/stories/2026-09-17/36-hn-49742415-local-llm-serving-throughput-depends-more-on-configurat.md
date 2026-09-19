---
title: Local LLM serving throughput depends more on configuration than engine choice
source: hn
url: https://blog.mozilla.ai/benchmarking-local-llm-servers-llama-cpp-llamafile-lm-studio-and-ollama/
date: '2026-09-17'
tags:
- benchmarking
- catchup
- cuda-graphs
- hn
- llm-serving
- speculative-decoding
- throughput
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49742415'
comments: https://news.ycombinator.com/item?id=49742415
why_read: This analysis provides a practical snapshot of how different local LLM serving
  tools behave across environments. Readers will learn that optimizing configuration
  settings like CUDA graphs or speculative decoding has a greater impact on throughput
  than the choice of serving engine itself.
authors:
- angpt
---

Running local LLMs? A new benchmark of llama.cpp, llamafile, LM Studio, and Ollama delivers some surprising insights: the real speedups often come from configuration, not just picking a different server.

For instance, enabling CUDA graphs can lift L40S decode by almost 17 percent, and an updated Vulkan shader toolchain improved Steam Deck prompt processing by up to 63 percent. The optimal speculative decoding draft length even changes per platform.

This means getting serious about local LLM performance requires digging into the underlying settings, not just swapping out the frontend tool. Understanding these bottlenecks and optimization levers is crucial for any engineer deploying LLMs.
