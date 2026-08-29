---
title: Durable state, query-first retrieval, and bounded context reduce agent usage
source: github
url: https://github.com/professorpalmer/automaton-durable-state
date: '2026-08-27'
tags:
- agent-efficiency
- artifact-reuse
- bounded-context
- catchup
- durable-state
- github
- query-first-retrieval
- reduced-model-calls
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49465534'
comments: https://news.ycombinator.com/item?id=49465534
why_read: Learn how durable state and query-first retrieval significantly cut down
  on AI agent costs by reducing expensive model calls and leveraging past work. It
  outlines a practical approach to achieve 95% recall of stored findings, making agents
  cheaper to operate.
authors:
- carypalmer
---

Running AI agents in production can quickly become expensive due to repeated LLM calls. This project demonstrates how durable state can dramatically cut these costs, achieving a 95 percent reduction in model calls for recurring tasks.

The core idea is to treat agent context as a cache. By implementing query-first retrieval against a local SQLite store, agents avoid re-inferring already known facts. If a task has been completed before, the stored result is recalled instantly without any LLM inference.

This is a paradigm shift for efficient agent design: instead of constantly replaying context, persist completed work as 'claims' or 'artifacts'. This allows you to build agents that are not only smarter but also far more cost-effective for everyday operations.
