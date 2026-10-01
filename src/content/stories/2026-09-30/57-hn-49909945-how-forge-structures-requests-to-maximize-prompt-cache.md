---
title: How Forge structures requests to maximize prompt cache reuse
source: hn
url: https://www.mohitranka.com/blog/how-forge-structures-requests-for-prompt-cache-reuse/
date: '2026-09-30'
tags:
- catchup
- hn
- kv-cache
- prompt-caching
- terminal-ide
- token-optimization
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49909945'
comments: https://news.ycombinator.com/item?id=49909945
why_read: Read this to understand how ordering stable context prefixes in AI coding
  harnesses maximizes prompt cache reuse to dramatically cut inference costs.
authors:
- Mohit Ranka
---

Prompt caching can cut LLM inference costs by an order of magnitude, but naive request structuring often invalidates the key-value cache with every minor turn.

The engineering team behind the open-source terminal coding harness Forge documented how they achieved a consistent 99 percent plus prompt cache hit ratio. Instead of appending dynamic context haphazardly, they strictly partition prompt payloads into static system instructions, long-lived repository context, and dynamic user instructions placed at the absolute tail.

Because cache reuse depends on prefix matching across token boundaries, isolating volatile tokens to the suffix preserves the cached KV state across hundreds of iterative agent steps. This simple architectural discipline prevented rapid budget exhaustion during heavy agentic workflows.

Designing LLM harnesses around prefix stability is one of the most actionable ways to cut production operational costs today.
