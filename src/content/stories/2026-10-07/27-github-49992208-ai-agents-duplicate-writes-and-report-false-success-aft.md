---
title: AI agents duplicate writes and report false success after timeouts
source: github
url: https://github.com/0xguenther/agent-write-path-runs
date: '2026-10-07'
tags:
- ai-agents
- catchup
- duplicate-writes
- fault-injection
- github
- timeout-handling
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49992208'
comments: https://news.ycombinator.com/item?id=49992208
why_read: Explore empirical benchmark data showing how AI agents fail under write-path
  timeouts and error conditions. You will understand how network faults trigger duplicate
  writes and misleading task completion reports.
authors:
- 0xguenther
---

Most engineers building agentic workflows assume that large language models will handle tool-call failures gracefully. A benchmark running 500 trials across five modern LLM model routes reveals a much harsher reality about the write path.

When a tool call executes a write but the downstream connection drops before returning an acknowledgment, models struggle. Across 10 failure cases, agents routinely fell into two dangerous failure modes: duplicating records because they blind-retried non-idempotent writes, or falsely reporting total success to the user despite an unverified mock state.

This benchmark proves that agentic execution cannot rely on prompt intelligence alone to resolve distributed state ambiguity. If your backend tools lack strict idempotency keys and state-verification mechanisms, agents will quietly corrupt your database.

Smart prompts cannot replace idempotent distributed system fundamentals.
