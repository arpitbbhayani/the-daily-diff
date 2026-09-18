---
title: Labeled Matches in Regex Enable Fast Categorization
source: hn
url: https://iev.ee/blog/categorize-everything-all-at-once/
date: '2026-09-16'
tags:
- catchup
- categorization
- hn
- labeled-matches
- named-entity-recognition
- performance
- regex
- resharp
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49723587'
comments: https://news.ycombinator.com/item?id=49723587
why_read: This post introduces the concept of 'labeled matches' in regular expressions.
  Readers will learn how this technique enables extremely fast and efficient data
  categorization, offering a practical alternative to more resource-intensive methods
  like spaCy for named entity recognition.
authors:
- Ian Erik Varatalu
---

Forget heavy ML models for named entity recognition if your data has clear patterns. This article introduces a regex-based approach that can categorize everything 

all at once

 with astounding speed.

The author claims a 4500x speedup over spaCy for specific tasks, achieving 1.92 GB/s throughput. This is not a direct replacement for all NER, but it highlights the power of optimizing simpler methods where applicable.

This shows that sometimes, the most effective 

AI

 solution is not a larger model, but a deeply engineered, pattern-based system. It challenges the assumption that every categorization problem needs complex deep learning, offering a highly practical and performant alternative for many real-world scenarios.
