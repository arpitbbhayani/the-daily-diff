---
title: Context windows are derived views of an append-only log
source: hn
url: https://future-seems-so-good.com/blog/the-log-is-the-truth
date: '2026-09-29'
tags:
- append-only-log
- catchup
- claude-code
- compaction
- context-engineering
- context-window
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49894071'
comments: https://news.ycombinator.com/item?id=49894071
why_read: This piece explains why LLM context windows should be treated as derived
  projections rather than the agent's primary state. You will learn a principled architectural
  approach to context management inspired by database logs.
authors:
- henriquegodoy
---

Most AI agent harnesses conflate memory persistence with context window management. When frameworks summarize or compact history to fit context limits, they often discard crucial conversational state entirely because they treat the active prompt window as the primary source of truth.

Database architectures solved this issue decades ago using append-only commit logs. In traditional storage engines, the redo log is the immutable history of events, while tables and materialized indices are derived views projected from that log. Nobody truncates the write-ahead log simply because an index buffer grows too large.

Applying this database principle to agent harnesses decouples persistence from prompting. The entire session belongs in an immutable transcript log, while the context window acts purely as an ephemeral, read-only projection. Compaction policies should only reshape the projection without modifying the underlying log, allowing agents to retain deterministic access to past history whenever required.
