---
title: Analytics agents struggle with dbt project metadata interpretation
source: hn
url: https://blog.getcassis.com/dbt-context-for-analytics-agents/
date: '2026-08-25'
tags:
- analytics-agent
- catchup
- data-documentation
- data-modeling
- dbt-project
- hn
- metadata-accuracy
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49436311'
comments: https://news.ycombinator.com/item?id=49436311
why_read: This article demonstrates the practical challenges analytics agents face
  when interpreting metadata from dbt projects. Readers will learn about common ambiguities
  and errors in dbt project documentation that lead to agent misinterpretations.
authors:
- Matthieu Blandineau
---

Building analytics agents? The biggest bottleneck is not the LLM, it is the data context it receives. An audit of 5,284 dbt models from public projects like GitLab and Mattermost reveals glaring issues in metadata that trip up agents.

The audit found agents struggle with undefined model grains, ambiguous column names, and missing semantic context. For instance, 'count_registered_users' in Mattermost refers to two different populations depending on the model, a critical ambiguity for an agent.

This is a sharp reminder that comprehensive documentation and explicit semantic definitions in your data models are not just good engineering practice; they are essential prerequisites for effective applied AI. Garbage in, garbage out, even with the smartest agents.
