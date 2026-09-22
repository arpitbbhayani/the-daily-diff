---
title: DuckDB extension provides typed answers from SQL table rows
source: github
url: https://github.com/colliber/duckdb-jev
date: '2026-09-20'
tags:
- catchup
- data-querying
- database-extension
- duckdb
- github
- jev
- sql
- typed-answers
section: databases
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49774406'
comments: https://news.ycombinator.com/item?id=49774406
why_read: This document introduces a DuckDB extension that enables asking questions
  about table rows directly in SQL and receiving type-safe answers. Readers will learn
  how to integrate structured questioning into their SQL workflows without external
  APIs or data transformations.
authors:
- colliber
---

This new DuckDB extension, `duckdb-jev`, is a game changer for applied AI within database workflows. It allows you to ask questions about individual rows in your tables and receive strongly-typed, AI-generated answers directly through SQL.

The key innovation here is avoiding the typical ETL dance. Instead of extracting data, calling an external API for classification, and then writing results back, you can execute these classification tasks where your data already lives. This significantly reduces latency and complexity for data analysis and feature engineering.

By returning real SQL types instead of just text, `duckdb-jev` ensures data integrity and simplifies downstream processing. It is a powerful example of bringing AI closer to the data, which is a critical pattern for scalable, efficient LLM infrastructure.
