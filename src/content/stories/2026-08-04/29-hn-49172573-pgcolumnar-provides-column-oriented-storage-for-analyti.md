---
title: pgColumnar provides column-oriented storage for analytic PostgreSQL workloads
source: hn
url: https://commandprompt.github.io/pgcolumnar/
date: '2026-08-04'
tags:
- analytic-workloads
- catchup
- chunk-group-skipping
- columnar-storage
- data-compression
- hn
- pgcolumnar
- postgresql
- table-access-method
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49172573'
comments: https://news.ycombinator.com/item?id=49172573
why_read: Read this to understand what pgColumnar is, how it functions as a column-oriented
  storage extension for PostgreSQL, and when to effectively use it for optimizing
  large scans and aggregates in append-mostly analytic workloads.
authors:
- linuxhiker
---

PostgreSQL now has a powerful columnar extension called PgColumnar, fundamentally changing how you can use Postgres for analytical workloads. This is not just a minor add-on; it is a full table access method.

PgColumnar enables per-column compression, chunk-group skipping, and vectorized aggregate processing. This means your large scans and aggregations, especially on wide tables where you only select a few columns, can see dramatic performance improvements.

While traditional row-based storage excels at transactional operations with frequent updates and deletes, PgColumnar is purpose-built for append-mostly data used in data warehousing or OLAP scenarios. It seamlessly integrates into PostgreSQL 15 and above.

This extension empowers engineers to leverage PostgreSQL's robustness for both OLTP and OLAP without needing a separate database system for simpler analytical needs. It is a game-changer for data architects.

You can now use Postgres for more of your data needs than ever before.
