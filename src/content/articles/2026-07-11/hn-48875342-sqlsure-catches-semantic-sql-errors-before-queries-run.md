---
title: SQLsure Catches Semantic SQL Errors Before Queries Run
source: hn
url: https://github.com/sqlsure/sqlsure
date: '2026-07-11'
tags:
- additivity-violations
- catchup
- data-integrity
- double-counting
- hn
- policy-breaches
- sql-semantic-errors
- sql-validation
- text-to-sql-benchmarks
- wrong-join-keys
score: 38
hn_id: '48875342'
comments: https://news.ycombinator.com/item?id=48875342
why_read: This text introduces `sqlsure`, a tool designed to deterministically catch
  subtle semantic errors in SQL queries that lead to silently wrong results, bypassing
  traditional linters and even LLM self-reviews. Readers will understand the specific
  types of data integrity issues `sqlsure` addresses and its proven effectiveness
  in preventing them.
authors:
- tejusarora
author: tejusarora
---

AI-generated SQL is a double-edged sword: powerful, yet prone to subtle, dangerous errors. Imagine an LLM writes a query that double-counts revenue or exposes sensitive data, and your database happily executes it.

This is a real problem. Traditional linters and database engines often miss these semantic errors, allowing perfectly valid but logically flawed queries to slip through.

Sqlsure offers a deterministic solution. It catches critical issues like fan-out double-counting, additivity violations, and wrong join keys in just 0.1 milliseconds, before the query even runs.

The project creators even found provably wrong 'gold answers' in popular text-to-SQL benchmarks like BIRD/Spider. This tool fundamentally changes how you can trust AI in critical database operations.

Ensure your AI-driven data is always correct and secure.
