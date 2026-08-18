---
title: 'Morsel-Driven Parallelism: A NUMA-Aware Query Evaluation Framework [pdf]'
source: hn
url: https://15721.courses.cs.cmu.edu/spring2016/papers/p743-leis.pdf
date: '2026-08-16'
tags:
- catchup
- hn
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49318524'
comments: https://news.ycombinator.com/item?id=49318524
why_read: You will gain deep insights into how high-performance database systems handle
  query parallelism and memory access on NUMA architectures, which is critical for
  optimizing data-intensive applications.
authors:
- ksec
---

Optimizing database query performance on modern hardware is extremely challenging, especially with Non-Uniform Memory Access (NUMA) architectures. This paper introduces "Morsel-Driven Parallelism," a framework that tackles this head-on.

It delves into how query evaluation can be made NUMA-aware, efficiently distributing data and workload to minimize costly cross-node memory access. This involves rethinking parallelism strategies to ensure data locality, a fundamental principle for high-performance computing.

Understanding these internals is crucial for anyone building or optimizing large-scale data systems. You will learn about architectural trade-offs that directly impact the scalability and efficiency of query processing, providing practical insights for system design.
