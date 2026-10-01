---
title: What TLA+ can and cannot express for formal verification
source: hn
url: https://buttondown.com/hillelwayne/archive/what-tla-can-and-cant-check/
date: '2026-09-30'
tags:
- catchup
- concurrent-systems
- formal-verification
- hn
- temporal-logic
- tla+
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49909056'
comments: https://news.ycombinator.com/item?id=49909056
why_read: Read this to understand the fundamental expressive limitations of TLA+ and
  why formal methods cannot automatically guarantee correctness in agentic software
  development.
authors:
- b-man
image: /infographics/06-hn-49909056.jpg
---

Recent enthusiasm suggests that pairing large language models with TLA+ will automatically eliminate bugs in complex concurrent systems. While formal methods excel at modeling distributed state and catching subtle race conditions, relying on them requires understanding what TLA+ can actually express in the first place.

TLA+ operates on behaviors defined as discrete sequences of states, evaluated through temporal logic operators like always and eventually. It excels at safety properties, such as ensuring that two nodes never hold the same lock simultaneously, and liveness properties, such as ensuring a request eventually receives a response.

However, TLA+ cannot easily express hyperproperties, which compare multiple distinct executions of a system. Properties like non-interference in security, observational equivalence, or probabilistic guarantees fall completely outside standard state predicates. Furthermore, a verified formal specification does not guarantee that the written code faithfully implements the model.

Engineers designing distributed protocols must remember that formal verification only checks the exact properties you define. If you cannot express a failure mode within the state model, no automated tool will detect it for you.
