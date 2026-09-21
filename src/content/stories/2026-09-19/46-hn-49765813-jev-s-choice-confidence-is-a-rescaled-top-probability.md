---
title: Jev's Choice confidence is a rescaled top probability
source: hn
url: https://bernoulli.app/articles/is-jev-confident
date: '2026-09-19'
tags:
- catchup
- choice-confidence
- hn
- jev
- model-confidence
- model-uncertainty
- probability-rescaling
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49765813'
comments: https://news.ycombinator.com/item?id=49765813
why_read: This article explains how Jev's 'Choice' confidence is derived. Readers
  will learn that it is a rescaled top probability, not an indicator of true model
  uncertainty.
authors:
- Stanislav Yurin
---

You trust an AI model's "confidence" score, right? This empirical analysis of TypeSafe's Jev model reveals a crucial insight: its reported confidence is not a measure of actual model uncertainty, but rather a rescaled version of its output probabilities.

Through over a million tests, the author meticulously demonstrates that Jev's confidence for 'choice' answers aligns almost perfectly with a normalized top probability, and for 'score' answers, it is a normalized distance from the modal level. This means the model is telling you how sure it is about its *answer*, not how likely its answer is to be *correct*.

This distinction is vital for any engineer building systems with AI. Relying on such confidence scores as a proxy for true uncertainty can lead to dangerously brittle applications. It is a powerful reminder to rigorously evaluate what your models are actually telling you, not just what their labels imply.
