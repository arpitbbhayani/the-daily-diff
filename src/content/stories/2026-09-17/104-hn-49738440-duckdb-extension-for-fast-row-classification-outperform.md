---
title: DuckDB Extension for Fast Row Classification Outperforms LLMs
source: hn
url: https://twitter.com/hamiltonulmer/status/2100370557405667768
date: '2026-09-17'
tags:
- catchup
- data-analysis
- duckdb
- extension
- hn
- jev
- llm
- row-classification
- sql
section: databases
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49738440'
comments: https://news.ycombinator.com/item?id=49738440
why_read: This post introduces a DuckDB extension using Jev for rapid and ergonomic
  row classification, offering a compelling alternative to LLMs for data analysis.
  Readers will learn about a new tool that can significantly speed up data classification
  workflows and its advantages.
authors:
- Hamilton Ulmer
---

Imagine classifying thousands of rows in your CSVs or Parquet files in just seconds, directly within DuckDB, without complex LLM pipelines. This new DuckDB extension, using Jev, offers a game-changing approach to quick data classification.

For many common classification tasks, using a lightweight, performant model like Jev is dramatically faster and more ergonomic than querying an LLM, which often comes with higher latency and cost. This tool is purpose-built for speed and efficiency in data analysis.

The real power is its native integration within SQL. You can classify data, join the labels back to your source tables, and perform iterative analysis with familiar commands, all within a local analytical database.

Accelerate your data analysis with efficient, SQL-native classification.
