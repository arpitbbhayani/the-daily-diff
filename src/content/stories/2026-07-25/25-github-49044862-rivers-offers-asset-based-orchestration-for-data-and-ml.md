---
authors:
- ion-elgreco
comments: https://news.ycombinator.com/item?id=49044862
date: '2026-07-25'
depth_score: 8
hn_id: '49044862'
image: /infographics/25-hn-49044862.jpg
interest_score: 8
novelty_score: 7
section: systems
source: github
tags:
- asset-based-orchestration
- catchup
- data-pipelines
- dependency-graph
- execution-planning
- github
- ml-pipelines
- orchestration
- python
- rust
title: Rivers offers asset-based orchestration for data and ML pipelines
url: https://github.com/ion-elgreco/rivers
utility_score: 8
why_read: This project introduces Rivers, a Rust-powered orchestration platform offering
  a Python-first development experience for data and ML pipelines. Readers will learn
  how asset-based orchestration, compiled in Rust, enables efficient dependency resolution
  and execution planning without a Python interpreter on the control plane.
---

Building robust, performant data and ML pipelines is a constant challenge. Rivers, a new orchestration platform, takes a unique approach by leveraging Rust for its core.

You define pipelines in Python, but the control plane - responsible for graph resolution, execution planning, and scheduling - runs entirely in compiled Rust. This design choice eliminates the overhead and complexity of a Python interpreter in the critical path, promising native performance for your orchestration layer.

It offers asset-based orchestration, automatically resolving dependency graphs, which is a powerful abstraction for managing complex data flows. If you are wrestling with scaling your ML infrastructure or optimizing data processing, Rivers presents a compelling architectural pattern.

This platform could significantly improve the reliability and speed of your data and ML workflows, offering a fresh perspective on pipeline management.