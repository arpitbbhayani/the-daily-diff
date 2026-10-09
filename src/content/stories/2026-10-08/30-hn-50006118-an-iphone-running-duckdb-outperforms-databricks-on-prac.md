---
title: An iPhone running DuckDB outperforms Databricks on practical workloads
source: hn
url: https://www.fivetran.com/blog/i-benchmarked-databricks-against-my-iphone
date: '2026-10-08'
tags:
- benchmarking
- catchup
- databricks-serverless-sql
- duckdb
- hardware-performance
- hn
- tpc-h
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50006118'
comments: https://news.ycombinator.com/item?id=50006118
why_read: Read this to see how dramatic improvements in single-device hardware allow
  a smartphone to outperform costly distributed clusters on realistic analytical queries.
authors:
- George Fraser
---

Distributed query engines introduce massive network and synchronization overhead that often dwarfs the compute cost of small and medium analytical workloads. Benchmarking standard TPC-H queries up to 200 gigabytes reveals that DuckDB running locally on a smartphone can outperform multi-node Databricks clusters.

At scales between 25 and 100 gigabytes, a single mobile device completed TPC-H queries faster than Databricks Serverless SQL configurations running across dozens of virtual central processing unit cores. The smartphone remained competitive even at the 200-gigabyte threshold.

The explanation lies in architectural friction. Cloud lakehouses spend substantial execution time coordinating distributed worker nodes, serializing shuffle partitions, and reading remote object storage. In contrast, modern single-node columnar engines maximize memory bandwidth, leverage vectorized execution, and avoid network input and output entirely.

Most real-world analytics queries operate on datasets far smaller than cloud data warehouse vendors suggest. Paying for distributed clusters when the entire working set fits within local memory introduces unnecessary latency and severe infrastructure costs.

Before scaling out your database infrastructure, consider scaling up your single-node execution.
