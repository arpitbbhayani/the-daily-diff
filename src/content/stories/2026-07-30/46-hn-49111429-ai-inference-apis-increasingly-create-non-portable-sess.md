---
authors:
- Earendil Engineering
comments: https://news.ycombinator.com/item?id=49111429
date: '2026-07-30'
depth_score: 8
hn_id: '49111429'
image: /infographics/46-hn-49111429.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-transcripts
- catchup
- hn
- inference-apis
- provider-bound-state
- session-portability
- user-ownership
title: AI inference APIs increasingly create non-portable sessions
url: https://earendil.com/posts/session-portability/
utility_score: 8
why_read: This article explains how AI inference APIs are evolving to make user sessions
  non-portable and controlled by the provider. Readers will learn about the implications
  of this shift on data ownership and control over AI interactions.
---

The original promise of AI inference APIs was simple: input, output, and a clear transcript of the conversation. That ideal is rapidly eroding as providers move towards opaque, provider-bound session states.

We are seeing a trend where "reasoning tokens" are billed but returned as encrypted blobs, web search results seen by the model are hidden from the client, and even subagent instructions are sometimes obscured. This means the session on your machine is no longer truly yours.

This shift has profound implications for engineers. It impacts system design, data ownership, debugging complex agentic workflows, and ultimately, vendor lock-in. Building interoperable and auditable AI systems becomes significantly harder when the core context is hidden.

It is time to re-evaluate how we build with LLM APIs, demanding transparency and portability to retain control over our AI applications.