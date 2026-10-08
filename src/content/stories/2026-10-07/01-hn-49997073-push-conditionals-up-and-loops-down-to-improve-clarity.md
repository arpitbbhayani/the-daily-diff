---
title: Push conditionals up and loops down to improve clarity
source: hn
url: https://debasishg.github.io/blog/push-ifs-up-fors-down/
date: '2026-10-07'
tags:
- batch-processing
- branch-free-code
- catchup
- control-flow
- hn
- refactoring
- tiger-style
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49997073'
comments: https://news.ycombinator.com/item?id=49997073
why_read: Learn how centralizing branches in callers and deferring iteration simplifies
  system control flow. It provides a durable mental model for optimizing performance
  and narrowing state spaces through clean design.
authors:
- Ruminations of a Programmer
image: /infographics/01-hn-49997073.jpg
---

Centralizing control flow by pushing conditional statements upward and pushing loops downward transforms both code readability and execution speed. Borrowed from TigerBeetle engineering guidelines, this heuristic advises developers to place decision-making logic in parent caller functions while delegating repetitive loops to leaf procedures.

When you push branches up, callees receive narrower, validated state spaces. A function no longer unpacks an optional value internally; the caller resolves the branch beforehand. This design guarantees that inner routines execute without branching hazards or defensive checks.

Conversely, pushing loops down turns single-item invocations into batch operations. Rather than running a function repeatedly inside an external loop, you pass collections down to leaf routines. This enables vectorization, amortizes setup costs, and keeps critical execution paths branch-free.

Clean architecture and mechanical sympathy rarely align this well.
