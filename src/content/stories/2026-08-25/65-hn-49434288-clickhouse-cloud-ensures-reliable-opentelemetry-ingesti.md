---
title: ClickHouse Cloud ensures reliable OpenTelemetry ingestion at scale
source: hn
url: https://clickhouse.com/blog/reliable-opentelemetry-ingestion-at-scale
date: '2026-08-25'
tags:
- catchup
- clickhouse
- data-ingestion
- hn
- kubernetes
- observability-platform
- opentelemetry
- scalability
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49434288'
comments: https://news.ycombinator.com/item?id=49434288
why_read: This post details the architecture and history of ClickHouse's OpenTelemetry
  ingestion pipeline, demonstrating how they achieve reliable and scalable data collection
  for their observability platform. Readers will gain insights into practical solutions
  for high-volume data ingestion in distributed systems.
authors:
- Tommy Li
---

Thinking about scaling observability without Kafka? ClickHouse's engineering team details how they built LogHouse, their internal platform ingesting 50 million OpenTelemetry events per second with a custom S3-backed pipeline.

They swapped the typical Kafka buffer for an S3-backed, custom-designed durability layer, achieving robust ingestion at an astounding scale without the operational overhead often associated with complex streaming platforms. This is a masterclass in distributed systems design, demonstrating how to make trade-offs for extreme data volumes.

You will see the evolution from a standard agent-to-gateway model to their current "Kafka-free" architecture, and understand the critical design decisions that allow them to handle 177 PiB of uncompressed data. This is a must-read if you are building or operating high-throughput data pipelines.
