---
title: Why counting silent breaking changes matters in software releases
source: hn
url: https://trysil.lastrucci.net/posts/trysil-2-0-0-what-breaks-and-why-we-counted/
date: '2026-10-06'
tags:
- api-design
- breaking-changes
- catchup
- compiler-errors
- hn
- software-maintenance
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49976250'
comments: https://news.ycombinator.com/item?id=49976250
why_read: This post highlights the distinction between obvious compiler errors and
  subtle runtime behavioral breaks during major upgrades. It provides a practical
  framework for identifying and documenting non-obvious API changes.
authors:
- davidlastrucci
---

Most developers fear compilation errors during a major version upgrade, but compiler breaks are the easiest problems to solve. The real hazards are silent behavioral breaks where the code compiles cleanly but operates with altered semantics at runtime.

A library upgrade post-mortem detailed 84 runtime breaks that static checks missed completely. Examples included changing 32-bit signed integers to 64-bit integers on row counts, removing virtual dispatch on configuration methods, and changing null handling semantics. When a compiler cannot flag an issue, only explicit behavioral inventories and contract tests can protect downstream systems.

Designing robust APIs requires recognizing that type compatibility does not equal semantic compatibility. Auditing the silent breaks before shipping major releases saves downstream consumers from catastrophic production regressions.
