---
title: Extending Apache DataFusion to execute queries across many machines
source: hn
url: https://www.datadoghq.com/blog/engineering/distributed-datafusion/
date: '2026-10-05'
tags:
- apache-datafusion
- catchup
- distributed-systems
- hn
- query-engine
- query-execution
section: databases
is_news: false
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49962937'
comments: https://news.ycombinator.com/item?id=49962937
why_read: Learn how Datadog scaled Apache DataFusion to run single queries across
  multiple machines. It offers practical architectural insights into adapting modular
  query engines for distributed systems.
authors:
- gabimtme
---

Scaling an in-memory execution engine across a cluster requires fundamentally re-architecting how logical and physical query plans get partitioned and executed. Datadog built Distributed DataFusion in Rust to extend Apache DataFusion from a single-node query engine into a multi-node distributed system.

The core challenge in distributed execution is coordinating exchange operators and stage scheduling without bottlenecking intermediate shuffle stages. By wrapping DataFusion physical plans and injecting custom gRPC-based data stream exchanges, worker nodes can execute sub-plans locally while streaming Arrow RecordBatches across the network with minimal serialization overhead.

Designing distributed query engines around modular, embeddable building blocks like Arrow and DataFusion is becoming the modern blueprint for analytical infrastructure.
