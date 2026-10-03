---
title: How inverted indexes enable fast full-text search in databases
source: hn
url: https://planetscale.com/blog/anatomy-of-a-postgres-search-engine
date: '2026-09-23'
tags:
- b-tree
- catchup
- database-indexing
- full-text-search
- hn
- inverted-index
- postgres
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49811337'
comments: https://news.ycombinator.com/item?id=49811337
why_read: Understand why standard b-tree indexes fail at substring matching and how
  inverted indexes enable efficient full-text search across large text columns.
authors:
- Patrick Reynolds
- Eric Ridge
---

Standard B-Tree indexes fall apart when you need to match arbitrary substrings or token sets across large text columns.

An inverted index solves this by mapping individual terms back to row locations rather than sorting complete column payloads. When a query searches across multiple keywords, the database engine intersects multiple posting lists instead of executing sequential full-table scans. This structural change turns expensive wildcard operations into deterministic index seeks.

Understanding how posting lists, tokenizers, and term dictionaries fit together inside PostgreSQL helps engineers design scalable schemas. It allows teams to implement robust text search capabilities directly inside their primary database engine before adding the operational complexity of external search clusters.

Mastering relational storage internals prevents unnecessary additions to your distributed infrastructure.
