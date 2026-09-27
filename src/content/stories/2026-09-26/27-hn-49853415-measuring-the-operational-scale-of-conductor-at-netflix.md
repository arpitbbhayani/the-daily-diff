---
title: Measuring the operational scale of Conductor at Netflix
source: hn
url: https://netflixtechblog.medium.com/netflix-conductor-the-next-chapter-41ad21067649
date: '2026-09-26'
tags:
- catchup
- conductor
- distributed-systems
- hn
- netflix
- workflow-orchestration
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49853415'
comments: https://news.ycombinator.com/item?id=49853415
why_read: Understand how Netflix utilizes the Conductor orchestration engine to coordinate
  distributed workflows at immense scale.
authors:
- nfkuler
---

Orchestrating millions of microservice tasks each day requires decoupling business logic from execution state. Netflix built Conductor to solve this exact bottleneck across thousands of disparate microservices.

At immense scale, managing state transitions inside transient application code leads to brittle architectures. Conductor relies on an explicit state machine model, persisting workflow states reliably while handling asynchronous execution, task retries, and distributed concurrency limits.

Decoupling workflow definitions from task workers keeps microservices stateless and resilient against downstream timeouts. For backend engineers designing resilient distributed systems, centralized workflow orchestration provides clear visibility and dependable failure isolation.
