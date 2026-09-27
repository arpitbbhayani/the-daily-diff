---
authors:
- Diogo Complete Skeptic
comments: https://news.ycombinator.com/item?id=49838474
date: '2026-09-25'
depth_score: 8
hn_id: '49838474'
image: /infographics/39-hn-49838474.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- cost-optimization
- hn
- input-tokens
- kv-cache
- tool-calls
title: Cache reads are the largest cost for AI agents
url: https://www.completeskeptic.com/p/kv-cache-rules-everything-around
utility_score: 9
why_read: Understand why AI agent costs escalate for developers. Learn how re-reading
  context and KV cache reads drive the majority of an agent session's bill.
---

The biggest cost to developers running AI agents is not what you might think. It is not output tokens or even your initial input tokens. It is the KV cache re-reads.

Every time an agent makes a tool call and then resumes, its entire past context (the KV cache) needs to be read again. While LLM providers may not charge for internal cache hits, they often charge for these re-reads in agentic loops, making this the largest part of your bill. This cost grows quadratically with session length and the number of tool calls.

This insight is crucial for designing cost-effective LLM infrastructure and efficient AI agents. Optimizing the number and frequency of tool calls, or designing smarter context management, could unlock significant savings and performance improvements for your agentic applications.