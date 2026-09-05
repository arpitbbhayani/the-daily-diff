---
authors:
- Josh Rosen
comments: https://news.ycombinator.com/item?id=49553916
date: '2026-09-03'
depth_score: 8
hn_id: '49553916'
image: /infographics/42-hn-49553916.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-integration
- architectural-patterns
- catchup
- data-warehouses
- hn
- inference-execution
- large-language-models
title: Data warehouses provide architectural lessons for integrating AI products
url: https://twitter.com/JoshARosen/status/2095488762532745712
utility_score: 9
why_read: This post offers key architectural lessons from how data warehouses are
  adapting to AI, providing insights applicable to anyone building AI-powered products
  and integrating models into existing systems.
---

AI is not just an API call; it is becoming a fundamental database primitive. Leading data warehouses are showing the way, integrating models and agents directly into the query layer, treating inference like any other SQL operator.

This means capabilities like filtering, classification, and generation are happening inside your database queries. It forces a re-evaluation of what remains deterministic and how model output integrates as data, pushing boundaries on query execution and governance.

Crucially, these platforms are building AI-aware query optimizers. Imagine a database intelligently routing queries to the most efficient inference endpoint or optimizing data fetches based on model context. These are not trivial changes, but deep architectural shifts.

The lessons from Snowflake, Databricks, and others adapting their mature stacks to LLMs are blueprints for any senior engineer building AI products. You will gain a clear vision of how the entire software stack can and should evolve with AI.

This is not just about data, it is about the future of system design.