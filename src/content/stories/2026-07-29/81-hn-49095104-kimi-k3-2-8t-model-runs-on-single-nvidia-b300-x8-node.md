---
authors:
- Junko
comments: https://news.ycombinator.com/item?id=49095104
date: '2026-07-29'
depth_score: 8
hn_id: '49095104'
image: /infographics/81-hn-49095104.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- inference-benchmark
- kda-attention
- kimi-k3
- mixture-of-experts
- model-deployment
- nvidia-b300-x8
- quantization
title: Kimi-K3 2.8T Model Runs on Single NVIDIA B300 x8 Node
url: https://blog.us.fixstars.com/deploying-kimi-k3-on-day-0-can-a-2-8t-model-run-on-a-single-node-of-nvidia-b300-x8/
utility_score: 9
why_read: This article demonstrates the feasibility of deploying a 2.8 trillion parameter
  AI model on a single NVIDIA B300 x8 node and provides insights into its inference
  performance. Readers will gain a practical understanding of deploying frontier models
  and their specific architectural features.
---

Running a 2.8 trillion parameter model on a single GPU node sounds impossible, but Fixstars did it with Kimi-K3 on an NVIDIA B300 x8. This is a game-changer for LLM inference at scale, demonstrating how hardware and model innovations intersect.

They dive into the specifics: Kimi-K3 uses a Mixture of Experts (MoE) architecture with novel Kimi Delta Attention and Attention Residuals. Critically, it leverages MXFP4 weights and MXFP8 activations for efficient quantization.

This detailed first-look report is not just a benchmark; it is a blueprint for pushing the boundaries of what is possible with LLM deployment. If you are architecting LLM infrastructure, this shows how to achieve incredible density and performance.