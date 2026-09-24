---
title: MotherDuck's prompt_jev() brings 50x faster SQL text classification
source: hn
url: https://motherduck.com/blog/motherduck-supports-jev/
date: '2026-09-22'
tags:
- ai-functions
- catchup
- hn
- jev
- motherduck
- sql
- text-classification
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49800830'
comments: https://news.ycombinator.com/item?id=49800830
why_read: This article introduces prompt_jev(), a MotherDuck integration that drastically
  improves text classification speed and cost within SQL. Readers will learn how to
  leverage this for efficient, large-scale text analysis directly in their database
  workflows.
authors:
- Hamilton Ulmer
- "Till D\xF6hmen"
- Jacob Matson
---

Text classification in SQL just got a major performance and cost upgrade. MotherDuck now integrates Jev, a new AI model that performs text classification 50x faster at 1% of the cost of frontier LLMs.

This means you can classify 100,000 rows in just 40 seconds for fifty cents, a stark contrast to over half an hour and $37 with a comparable LLM. The underlying idea treats AI inference as a scalar function within SQL, allowing for direct filtering, joining, and aggregation.

Such a leap in efficiency and affordability unlocks entirely new data workloads. Tables previously too expensive for LLM-based analysis are now easily within reach, transforming how engineers can integrate AI directly into their analytical workflows. This is not just an incremental improvement; it is a paradigm shift for applied AI in databases.
