---
authors:
- Akshay Srivatsan
- Yuhan Deng
- Katherine Mohr
- Emma Sudo
- Sebastian Ingino
- Francis Chua
- Keith Winstein
comments: https://news.ycombinator.com/item?id=49045656
date: '2026-07-25'
depth_score: 9
hn_id: '49045656'
image: /infographics/05-hn-49045656.jpg
interest_score: 9
novelty_score: 9
section: systems
source: hn
tags:
- arca
- catchup
- continuation-capture
- continuation-centric-computing
- hn
- operating-system-design
- serverless-workloads
title: Continuation-centric operating systems improve serverless workload management
  with Arca
url: https://www.usenix.org/conference/osdi26/presentation/srivatsan
utility_score: 8
why_read: This paper introduces continuation-centric computing as an operating system
  design for serverless workloads. Readers will learn how the Arca OS enables efficient
  management of short-lived tasks by capturing and manipulating continuations.
---

Imagine an operating system designed from the ground up for serverless. This paper introduces "continuation-centric computing," a paradigm where functions can capture their entire state as lightweight, portable continuations.

This is not merely suspending a thread; it is a full snapshot that can be migrated or copied efficiently. The Arca OS, implementing this, promises significant improvements for short-lived, I/O-bound serverless tasks by optimizing resource management and reducing latency.

This research fundamentally changes how one thinks about scheduling and resource allocation in highly distributed, event-driven architectures. It offers deep insights into the future of scalable systems.