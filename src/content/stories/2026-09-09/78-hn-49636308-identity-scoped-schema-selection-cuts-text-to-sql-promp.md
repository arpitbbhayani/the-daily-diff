---
title: Identity-scoped schema selection cuts text-to-SQL prompt tokens
source: hn
url: https://ashishsinha1602.github.io/schemagate/
date: '2026-09-09'
tags:
- access-control
- catchup
- hn
- prompt-token-reduction
- schema-selection
- schemagate
- text-to-sql
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49636308'
comments: https://news.ycombinator.com/item?id=49636308
why_read: This text introduces Schemagate, a tool that performs identity-scoped schema
  selection for text-to-SQL. Readers will learn how to drastically cut prompt token
  usage and enforce data access policies before SQL generation in AI database interactions.
authors:
- asinha0216
---

Building robust and secure text-to-SQL systems with LLMs faces a fundamental challenge: how do you prevent the model from seeing or generating queries for data it should not access, and how do you manage ballooning token costs? A new tool, `schemagate`, offers a clever and highly effective solution.

It works by enforcing identity-scoped schema selection *before* any SQL is generated. Instead of passing the entire database schema to the LLM, `schemagate` filters it based on the user's roles and permissions. This is not just about security; it dramatically reduces the prompt's token count, with reported savings of 65-97 percent on schema tokens alone.

This approach moves security and efficiency to the context engineering layer, ensuring the LLM operates within predefined boundaries. It is a critical piece of infrastructure for any production-ready LLM application that interacts with sensitive database information, offering both cost savings and a stronger security posture. This is smart system design.
