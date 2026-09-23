---
title: Everything is a Stream underpins runtime composability in computing
source: hn
url: https://antigma.ai/blog/2026/09/21/everything-is-a-stream
date: '2026-09-21'
tags:
- catchup
- composability
- data-flow
- hn
- stream-processing
- system-design
- unix-philosophy
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49788405'
comments: https://news.ycombinator.com/item?id=49788405
why_read: This article reveals how the "everything is a stream" paradigm is a fundamental
  concept underlying the design and power of many computing systems, from Unix to
  LLMs. Readers will gain a deeper understanding of how this abstraction enables runtime
  composability.
authors:
- ubermon
---

The Unix philosophy of "everything is a file" was always misdirected. The true power was "everything is a stream," allowing for runtime composability that transformed simple programs into powerful pipelines.

This article masterfully extends that paradigm to modern systems, from database write-ahead logs to how LLMs process tokens. It argues that by embracing streams for everything from fundamental computation to version control, you unlock unparalleled flexibility and composability.

Forget compile-time plugins; the future of robust, adaptive software, especially for AI agents, lies in designing for dynamic, stream-based interactions. This is a crucial shift in architectural thinking.
