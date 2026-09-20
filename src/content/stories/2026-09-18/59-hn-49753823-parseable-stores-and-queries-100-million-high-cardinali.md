---
title: Parseable stores and queries 100 million high-cardinality time series per minute
source: hn
url: https://www.parseable.com/blog/how-parseable-handles-100-million-time-series
date: '2026-09-18'
tags:
- apache-parquet
- catchup
- high-cardinality-metrics
- hn
- object-storage
- opentelemetry
- parseable
- time-series
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49753823'
comments: https://news.ycombinator.com/item?id=49753823
why_read: This article explains how Parseable efficiently stores and queries 100 million
  high-cardinality time series per minute. Readers will learn about the architectural
  choices and technologies used to solve this challenging data problem.
authors:
- Yash Verma
---

Scaling time series data to 100 million distinct series per minute is not trivial, especially with high cardinality labels. Many traditional time series databases struggle here, often forcing engineers to drop critical labels just to cope.

Parseable's approach offers a compelling alternative, leveraging OpenTelemetry for ingest, Apache Parquet for efficient storage, and object storage for scalability. This combination allows for keeping all those crucial labels, enabling rich analytics without sacrificing performance or cost efficiency.

You will gain insights into how to structure your data, optimize queries, and design a system that can handle truly massive time-series workloads. This is a practical blueprint for solving a common infrastructure headache for any backend engineer dealing with observability or IoT data. Get ready to rethink your time-series strategy.
