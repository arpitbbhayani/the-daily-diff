---
title: Unicode's Transliteration Rules Are Turing-Complete
source: hn
url: https://seriot.ch/computation/uts35/
date: '2026-07-08'
tags:
- 2-tag-systems
- catchup
- hn
- icu
- transliteration-rules
- turing-complete
- undecidability
- unicode
- universality
score: 130
hn_id: '48829797'
comments: https://news.ycombinator.com/item?id=48829797
why_read: This article demonstrates that Unicode's transliteration rules are Turing-complete,
  a surprising result for a widely used text processing mechanism. Readers will gain
  a deep, mechanistic understanding of how these rules achieve universal computation
  and the implications for system design and security.
authors:
- Nicolas Seriot
author: Nicolas Seriot
---

Did you know Unicode's UTS #35 transliteration rules are Turing-complete? This means a seemingly simple system for character conversion can perform any computation imaginable.

The article details how to compile a 2-tag system, a known universal model of computation, using these rules. This capability exists within ICU, the Unicode library used in operating systems, browsers, and even databases.

The implications are profound. Whether a given transliteration rule file terminates on an input is undecidable. This highlights hidden complexity in widely deployed standards.

It is a reminder that even basic building blocks of our software landscape can hold unexpected computational power and surprising depth.
