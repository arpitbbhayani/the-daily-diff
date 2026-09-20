---
title: Labeled matches in regex engines enable fast named entity recognition
source: hn
url: https://iev.ee/blog/categorize-everything-all-at-once/
date: '2026-09-18'
tags:
- catchup
- hn
- labeled-matches
- named-entity-recognition
- performance
- regex
- resharp
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49759781'
comments: https://news.ycombinator.com/item?id=49759781
why_read: This post explains how "labeled matches" in regex can achieve extremely
  fast named entity recognition. Readers will learn about a highly efficient, performant
  method for text categorization that can be thousands of times faster than traditional
  approaches.
authors:
- Ian Erik Varatalu
---

A new regex technique called "labeled matches" offers a surprising performance boost for named entity recognition, claiming speeds thousands of times faster than spaCy for certain tasks.

This method allows regex engines to perform categorization by pre-computing labels, making subsequent lookups as fast as a word search. Imagine getting highly accurate entity extraction for a fraction of the computational cost, directly in your text processing pipelines.

It challenges the assumption that advanced NLP models are always necessary for robust text categorization. For specific use cases, this could be a game-changer, significantly cutting down on resource usage while maintaining high throughput.
