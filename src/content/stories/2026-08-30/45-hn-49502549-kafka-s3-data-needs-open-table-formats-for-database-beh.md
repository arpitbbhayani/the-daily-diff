---
authors:
- Michał Matłoka
comments: https://news.ycombinator.com/item?id=49502549
date: '2026-08-30'
depth_score: 8
hn_id: '49502549'
image: /infographics/45-hn-49502549.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- apache-iceberg
- apache-kafka
- apache-paimon
- catchup
- consistent-snapshots
- data-lake
- historical-data
- hn
- open-table-formats
- s3
- stream-processing
title: Kafka-S3 data needs open table formats for database behavior
url: https://softwaremill.com/log-first-or-table-first-apache-kafka-fluss-and-streaming-tables/
utility_score: 8
why_read: This article highlights the challenges of treating historical Kafka data
  stored in S3 as a queryable database and demonstrates how open table formats like
  Apache Iceberg and Paimon solve these problems by providing essential table metadata
  and functionality.
---

Building robust data pipelines often involves a fundamental choice: do you prioritize a 'log-first' or 'table-first' approach? This article delves into how Apache Kafka, object storage, and streaming table formats like Iceberg tackle this dilemma.

It highlights a common challenge: simply dumping Kafka events to S3 via a sink connector creates a log, not a usable table. You lose snapshot isolation, efficient updates, and schema evolution capabilities. The solution lies in leveraging metadata layers around your files to bring table semantics to object storage.

This piece offers crucial architectural insights for anyone designing scalable data lakes and real-time analytics systems. You will understand the subtle but significant differences in managing data consistency, schema changes, and avoiding the 'small file problem' when moving from raw event logs to queryable datasets.