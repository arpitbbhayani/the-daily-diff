---
authors:
- Ning
comments: https://news.ycombinator.com/item?id=49081489
date: '2026-07-28'
depth_score: 8
hn_id: '49081489'
image: /infographics/01-hn-49081489.jpg
interest_score: 9
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- commodity-hardware
- hbm-alternatives
- hn
- kimi-k3
- llm-inference
- model-architecture
- moe
- mxfp4
- open-weights
title: Kimi K3 brings frontier AI to commodity hardware without HBM
url: https://twitter.com/totheagi/status/2081855316443205717
utility_score: 9
why_read: This post announces a new frontier AI model, Kimi K3, that can run on abundant
  gaming GPUs without expensive HBM. Readers will learn about a significant step towards
  democratizing access to powerful AI models for research and deployment.
---

Running frontier AI models often means an HBM GPU farm, right? Think again. The 2.8T parameter Kimi K3 model is now running on 80 consumer-grade RTX 5090s, delivering 20 tokens per second on plain Ethernet.

The key insight here is "zero HBM." This setup uses standard GDDR7 gaming cards, completely sidestepping the scarcest and most expensive silicon in AI infrastructure. This significantly democratizes access to frontier intelligence.

It means that any lab, startup, or university can now own, probe, fine-tune, and run agents on a massive model without the exorbitant costs traditionally associated with high-end inference hardware. This shifts the paradigm for LLM deployment and experimentation.

This is not just an incremental improvement; it is a fundamental re-evaluation of how large-scale AI infrastructure can be built.