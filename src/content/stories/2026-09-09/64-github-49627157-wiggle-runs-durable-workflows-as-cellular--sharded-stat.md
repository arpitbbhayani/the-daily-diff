---
authors:
- hadielmougy
comments: https://news.ycombinator.com/item?id=49627157
date: '2026-09-09'
depth_score: 8
hn_id: '49627157'
image: /infographics/64-github-49627157.jpg
interest_score: 8
novelty_score: 7
section: systems
source: github
tags:
- catchup
- distributed-systems
- durable-workflows
- fault-tolerance
- github
- sharding
- state-machine
- workflow-engine
title: Wiggle runs durable workflows as cellular, sharded state machines
url: https://github.com/hadielmougy/wiggle
utility_score: 8
why_read: Read this to understand a novel approach to building highly resilient and
  scalable distributed workflows. It demonstrates how a graph-based definition can
  power a durable, sharded state machine capable of surviving crashes and retrying
  failures.
---

A new workflow engine called Wiggle is turning heads with its "cellular by design" approach to durable distributed systems. It allows you to define processes as graphs, then runs them as resilient state machines capable of surviving crashes and sharding across isolated cells.

This is not just another workflow tool; it addresses core challenges in distributed system design. The cellular architecture ensures that when one database cannot handle the load, the system intelligently shards itself, providing inherent scalability and fault tolerance.

Engineers building complex, long-running processes will find value in its graph-based definitions and built-in mechanisms for retries and human waits. It provides a blueprint for resilient, scalable operations.