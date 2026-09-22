---
title: China Telecom's Xing4.0-29B-A4B is an Agent-Focused MoE Model
source: hn
url: https://www.mindstudio.ai/blog/xing4-0-29b-a4b-model-release
date: '2026-09-20'
tags:
- agentic-ai
- catchup
- hn
- huawei-ascend-npu
- long-context
- mixture-of-experts
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49777517'
comments: https://news.ycombinator.com/item?id=49777517
why_read: Readers will learn about China Telecom's new Xing4.0-29B-A4B MoE model,
  its agentic capabilities, and its unique training on Huawei Ascend NPUs. It highlights
  a significant development in large language models for specialized tasks.
authors:
- Bluestein
---

China Telecom's Xing4.0-29B-A4B model is shaking up the LLM space, especially for those building agents. This Mixture-of-Experts (MoE) model is not just another big language model; it is designed from the ground up for agentic tasks like tool calling, multi-step planning, and coding.

What is truly fascinating is its "full-stack domestic" approach. It was trained entirely on Huawei's Ascend NPUs using the MindSpore/MindFormers stack, moving away from Nvidia's ecosystem. Engineers achieved an impressive 96 percent training throughput improvement through clever MoE communication tuning, selective recomputation, and custom fused operators.

The model supports a massive 256K context window, extensible to 512K, and can run with 4-bit quantization on consumer-grade GPUs like the RTX 4090 with only 15GB VRAM. This makes powerful long-context agentic AI accessible for local development and more diverse production environments, and it is deployable with tools like vLLM and SGLang. This is not just a new model, it is a new way of thinking about LLM infrastructure.
