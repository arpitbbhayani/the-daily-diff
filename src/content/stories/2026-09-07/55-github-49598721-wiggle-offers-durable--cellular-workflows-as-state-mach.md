---
title: Wiggle offers durable, cellular workflows as state machines
source: github
url: https://github.com/hadielmougy/wiggle
date: '2026-09-07'
tags:
- catchup
- cellular-design
- distributed-systems
- durable-workflows
- fault-tolerance
- github
- state-machine
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49598721'
comments: https://news.ycombinator.com/item?id=49598721
why_read: This project introduces Wiggle, a system for building durable, fault-tolerant
  workflows that can survive crashes and scale by sharding across multiple databases.
  Readers will learn how Wiggle's cellular design and state machine approach enable
  resilient and scalable process orchestration.
authors:
- hadielmougy
---

Designing reliable distributed systems often means grappling with durable workflows that can survive crashes and scale effectively. Wiggle, an open-source durable workflow engine, tackles this with a "cellular by design" approach.

It treats processes as durable state machines, inherently resilient to failures and retries. Crucially, it scales by sharding across isolated cells, each with its own database, preventing a single point of failure or bottleneck.

This architecture offers a robust blueprint for orchestrating complex, long-running business logic where fault tolerance and scalability are paramount. It is a smart design for production-grade distributed applications.
