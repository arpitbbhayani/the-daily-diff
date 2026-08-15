---
title: Transparent Data Tiering for PostgreSQL Using Apache Iceberg
source: github
url: https://github.com/pgEdge/coldfront
date: '2026-08-13'
tags:
- apache-iceberg
- catchup
- data-tiering
- github
- object-storage
- partition-lifecycle
- postgresql
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49282203'
comments: https://news.ycombinator.com/item?id=49282203
why_read: This project demonstrates transparent data tiering for PostgreSQL, allowing
  users to manage large datasets by moving older rows to object storage like Apache
  Iceberg while maintaining a unified SQL interface.
authors:
- pgEdge
---

Managing ever-growing PostgreSQL databases can quickly become a cost and performance nightmare. What if you could transparently tier older data to cheaper object storage without changing your application code?

ColdFront offers exactly this: seamless data tiering between PostgreSQL partitions and Apache Iceberg on S3, Azure, or GCS. Crucially, your applications continue to query a single table with the same SQL, entirely unaware that cold data resides in a different storage engine.

This is a powerful solution for reducing operational costs and improving PostgreSQL performance by offloading less frequently accessed data. It represents a significant advancement in practical data lifecycle management.

No more complex ETL or query rewrites; just smart, transparent tiering.
