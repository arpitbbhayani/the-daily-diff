---
title: Hy4 Preview is a 770B-parameter Mixture-of-Experts model with Gated DSA
source: hn
url: https://huggingface.co/tencent/Hy4-preview
date: '2026-08-28'
tags:
- catchup
- gated-dsa
- hn
- identity-hyper-connections
- indexcache
- large-language-model
- mixture-of-experts
- model-scaling
- speculative-decoding
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49475014'
comments: https://news.ycombinator.com/item?id=49475014
why_read: Read this to understand the architectural innovations and scaling strategies
  behind Tencent Hy Team's new 770B-parameter Mixture-of-Experts model, Hy4 preview,
  including its Gated DeepSeek Sparse Attention and identity Hyper-Connections.
authors:
- yogenpro
---

Tencent has unveiled Hy4 Preview, a new Mixture-of-Experts (MoE) LLM that pushes the boundaries of large language model architecture. This model boasts a staggering 770 billion total parameters, with 49 billion activated per token, signaling a significant leap in efficient scaling.

The architecture incorporates advanced features like Gated DeepSeek Sparse Attention (Gated DSA) with IndexCache for cross-layer sparse index reuse, alongside identity Hyper-Connections (iHC) to enhance inter-layer information flow. These are not just buzzwords; they represent concrete engineering decisions to improve model performance and training efficiency.

Engineers working with LLM infrastructure or building agentic systems should pay close attention to these architectural innovations. Understanding models like Hy4 offers a glimpse into the future of LLM design, informing decisions on how to optimize context, attention mechanisms, and overall model efficiency.
