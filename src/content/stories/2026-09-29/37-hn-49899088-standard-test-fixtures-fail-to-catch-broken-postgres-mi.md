---
title: Standard test fixtures fail to catch broken postgres migrations
source: hn
url: https://weavori.com/blog/postgres-migration-fails-with-realistic-data
date: '2026-09-29'
tags:
- catchup
- database-migrations
- hn
- postgresql
- synthetic-data
- test-fixtures
- unique-constraints
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49899088'
comments: https://news.ycombinator.com/item?id=49899088
why_read: Learn why standard test fixtures and uniform random data fail to detect
  unique constraint errors during database migrations. It provides insight into the
  testing blind spots caused by confirmation bias in hand-crafted datasets.
authors:
- The Weavori Team
---

Running ALTER TABLE customers ADD CONSTRAINT UNIQUE (email) appears trivial and non-blocking in staging. Yet in production environments, it frequently aborts within milliseconds due to duplicate records that hand-crafted test fixtures completely masked.

Hand-written test fixtures embed the author's unconscious assumptions: every test fixture author writes distinct names and unique emails. Similarly, standard random generators produce uniform distributions that do not reflect real-world user behavior, duplicate signups, or casing discrepancies.

When verifying migrations and constraints, generating synthetic data without modeled collisions gives false confidence. Test harnesses must explicitly simulate domain-specific skew, truncation, and collision rates before executing DDL alterations against live tables.
