---
title: Portia automates data profiling and compiles reproducible dbt SQL
source: github
url: https://github.com/Jad1908/portia
date: '2026-10-07'
tags:
- agent-harness
- catchup
- data-profiling
- dbt
- github
- sql-generation
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49993790'
comments: https://news.ycombinator.com/item?id=49993790
why_read: Learn how Portia inspects data tables deterministically and compiles reproducible
  dbt-compatible SQL without exposing raw data to language models.
authors:
- Jad1908
---

Letting an LLM query raw production databases directly is an operational nightmare. It introduces prompt injection risks, unbounded query costs, and non-deterministic results that break downstream reporting.

Portia takes a much cleaner architectural approach. Instead of giving the model shell access or letting it read entire tables, the framework profiles data sources deterministically and records agent actions in an auditable YAML specification. That specification compiles directly into dbt-compatible SQL that runs completely independently of the agent harness.

This architecture guarantees that every numeric claim is computed by deterministic SQL executed inside Snowflake, BigQuery, or PostgreSQL. The model never reads the underlying raw rows, effectively decoupling reasoning from data storage and execution.

Treating agent output as structured compiler input rather than arbitrary code execution is the right pattern for enterprise data engineering.
