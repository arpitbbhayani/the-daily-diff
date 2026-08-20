---
title: Zalando's successful strategies for LLM API access and agentic engineering
source: hn
url: https://engineering.zalando.com/posts/2026/08/agentic-engineering-at-zalando-a-snapshot.html
date: '2026-08-18'
tags:
- agentic-engineering
- api-access
- catchup
- cost-tracking
- hn
- litellm
- llm-proxy
- model-management
- prompt-caching
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49350045'
comments: https://news.ycombinator.com/item?id=49350045
why_read: This article provides insights into Zalando's practical approaches for implementing
  Agentic Engineering using an LLM proxy. Readers will learn about effective strategies
  for API access, cost tracking, model management, and prompt caching.
authors:
- hrpnk
---

Zalando's dive into Agentic Engineering offers a rare look at how a large enterprise tackles LLM infrastructure challenges in production. They implemented a LiteLLM-based API proxy from day one, giving engineers easy access to various models while centralizing control.

This proxy design enabled crucial features like anonymized cost tracking via post-call hooks and enforcing client version upgrades through pre-call hooks. They even auto-inject prompt caching to reduce costs as agents evolve.

One smart operational detail is mitigating LiteLLM stability and memory leak issues by enforcing restarts after 20,000 requests. This kind of practical insight into managing production LLM systems is incredibly valuable.

This shows that successful agent deployment is as much about robust infrastructure as it is about model quality.
