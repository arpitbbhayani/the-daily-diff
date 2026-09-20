---
title: Notch reduces AI agent harness costs tenfold without product impact
source: hn
url: https://www.usenotch.ai/blog/cutting-our-agent-s-harness-cost-10x-without-breaking-the-product
date: '2026-09-18'
tags:
- agent-sdk
- ai-agents
- catchup
- hn
- litellm-proxy
- llm-costs
- model-switching
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49755484'
comments: https://news.ycombinator.com/item?id=49755484
why_read: This post details how Notch reduced their AI agent's LLM costs by 90% through
  strategic model switching, offering lessons on SDK flexibility and benchmark accuracy.
authors:
- amanjaincorp
---

Many teams building AI agents are seeing their inference bills skyrocket. One startup managed to slash their LLM harness costs by a remarkable 90 percent without compromising product quality, offering invaluable lessons for anyone in the agent space.

Their journey involved strategically switching LLM providers, discovering that existing agent SDKs can often be made model-agnostic using tools like LiteLLM Proxy. This flexibility is crucial for cost management and avoiding vendor lock-in.

A particularly surprising finding was that less context can actually be more effective for agents. Trimming tool output to the last 200 lines, for instance, not only reduced token usage by 40 percent but also improved the agent's task success rate. This challenges the common intuition that more information is always better.

This blog post provides concrete, actionable strategies for optimizing LLM agent deployments. You will learn how practical engineering choices, not just model upgrades, drive significant cost savings and performance improvements in real-world AI applications.

Cost efficiency in AI agents is a solvable engineering problem.
