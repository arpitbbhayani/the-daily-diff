---
title: Routing LLM calls to the cheapest model drastically cuts costs
source: hn
url: https://iq-routing.com
date: '2026-08-27'
tags:
- api-gateway
- catchup
- cost-management
- hn
- llm-cost-optimization
- llm-orchestration
- model-routing
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49471637'
comments: https://news.ycombinator.com/item?id=49471637
why_read: Read this to understand how intelligent routing of LLM calls to the cheapest
  model that maintains quality can significantly reduce AI spend by 40-80% without
  changing existing agent code.
authors:
- Georgeavvila
---

Are your LLM inference costs soaring? IQ Routing presents a compelling solution for optimizing spend on your RAG pipelines and agent loops by dynamically routing calls to the cheapest models that meet your quality bar.

This service claims 40-80 percent cost reductions, with examples showing a 58 percent cut on a LangChain loop by intelligently picking models per step. It transparently tracks per-step pricing and quality, providing an audit trail finance teams will appreciate.

For any engineer managing LLM infrastructure, this approach offers immediate practical utility. It is not about swapping out your entire stack, but rather a smart layer that fits directly in front of your existing OpenAI or Anthropic SDKs, making it incredibly easy to adopt and see quick returns.
