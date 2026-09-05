---
title: Simplicity is not the same as smallness, requiring rethinking computing
source: hn
url: https://jyn.dev/simple-is-not-the-same-as-small/
date: '2026-09-03'
tags:
- catchup
- clojure
- debugging
- hn
- simplicity
- tooling-complexity
- unix-pipelines
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49558685'
comments: https://news.ycombinator.com/item?id=49558685
why_read: This article challenges the common notion that "small" equals "simple,"
  particularly in Unix pipelines. Readers will learn why rethinking fundamental computing
  approaches is necessary to achieve true simplicity and avoid complex debugging.
authors:
- zdw
---

"Simple is not small" is a mantra every senior engineer should internalize. This article brilliantly dissects why focusing purely on small components can lead to complex, tangled systems, while true simplicity emerges from decoupling.

The author uses compelling examples, from Unix pipelines to Clojure code, to illustrate how a system can be large but simple if its parts are independent and compose well. Conversely, tiny, tightly coupled modules can create an overall system that is incredibly complex and hard to reason about.

This distinction offers a powerful lens for evaluating system designs. It challenges the conventional wisdom that smaller equals better, instead advocating for well-defined boundaries and clear responsibilities as the path to maintainable, understandable software. It redefines what makes code truly elegant.
