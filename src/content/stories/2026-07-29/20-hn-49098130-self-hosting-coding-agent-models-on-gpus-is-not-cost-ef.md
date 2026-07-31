---
authors:
- aistack
comments: https://news.ycombinator.com/item?id=49098130
date: '2026-07-29'
depth_score: 8
hn_id: '49098130'
image: /infographics/20-hn-49098130.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- coding-agents
- cost-analysis
- gpu
- hn
- large-language-models
- model-performance
- self-hosting
title: Self-hosting coding agent models on GPUs is not cost-effective
url: https://aistack.imec-int.com/blog/gpu-self-hosting
utility_score: 8
why_read: This article provides a reality check on the cost and quality of self-hosting
  large language models for coding agents on GPUs. Readers will learn whether buying
  GPUs for this purpose is economically viable compared to renting hardware or using
  commercial APIs.
---

Self-hosting large language models for coding agents is a complex decision, and new data sheds light on the trade-offs. Recent analysis reveals that while self-hosting Kimi K3 on an 8xB300 node offers a 20 percent better task resolution than smaller models, it comes with about 20 percent higher hardware cost and significantly lower token throughput compared to GLM-5.2 or commercial APIs.

For example, Kimi K3 on an 8xB300 node achieved 122 tokens/second at 16 concurrent users, while GLM-5.2 managed 170 tokens/second at 24 users on less expensive hardware. Median task time for Kimi K3 was 38 minutes, double that of GLM-5.2 and eight times slower than Claude Code baseline.

Engineers considering self-hosting for reasons like data privacy or avoiding rate limits should carefully weigh these performance and cost implications. It is not always about saving money, but understanding the operational realities and infrastructure demands.