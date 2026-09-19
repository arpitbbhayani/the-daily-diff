---
title: Labeled regex matching enables extremely fast named entity recognition
source: hn
url: https://iev.ee/blog/categorize-everything-all-at-once/
date: '2026-09-17'
tags:
- benchmarking
- catchup
- hn
- labeled-matching
- named-entity-recognition
- performance-optimization
- regex
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49743888'
comments: https://news.ycombinator.com/item?id=49743888
why_read: Readers will learn about a novel regex technique for creating labeled matches,
  which is shown to enable named entity recognition at significantly higher speeds
  and with lower resource consumption than traditional NLP approaches like spaCy.
authors:
- Ian Erik Varatalu
---

You are missing out if you think regex is just for simple string matching. There is a "party trick" that transforms regex into a highly efficient tool for named entity recognition (NER), outperforming even spaCy by orders of magnitude for certain tasks.

This approach, termed "labeled matches," allows you to categorize text based on predefined patterns, assigning names like DATE, MONEY, or EMAIL. Imagine processing logs or structured text with the speed of a simple string search, but getting rich, labeled data back.

The secret lies in computing something upfront, essentially getting the categorization "for free" during the matching process. This is not just a theoretical concept; a tool called 'resharp' demonstrates this with a claimed 4500x speedup over spaCy's NER component.

This is a powerful technique for any engineer dealing with large volumes of text data that needs structured extraction, offering both performance and precision. It challenges the assumption that complex text parsing always requires heavy machine learning models.
