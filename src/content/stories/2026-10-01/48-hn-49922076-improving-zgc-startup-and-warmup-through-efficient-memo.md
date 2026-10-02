---
title: Improving ZGC startup and warmup through efficient memory preparation
source: hn
url: https://openjdk.org/jeps/545
date: '2026-10-01'
tags:
- catchup
- garbage-collection
- heap-management
- hn
- jvm-startup
- memory-allocation
- zgc
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49922076'
comments: https://news.ycombinator.com/item?id=49922076
why_read: Learn how ZGC optimizes physical memory acquisition to resolve the trade-off
  between rapid startup and fast application warmup.
authors:
- "Erik \xD6sterlund"
---

Low-latency garbage collection in Java has historically forced an uncomfortable operational trade-off. If you configure a small initial heap (-Xms), your JVM processes start up quickly but suffer slow warmup as the Z Garbage Collector (ZGC) incrementally allocates physical memory from the OS. Conversely, configuring a large initial heap speeds up warmup but stalls startup time because ZGC must map and commit memory upfront.

JEP 545 addresses this exact runtime bottleneck by overhauling how ZGC acquires and prepares physical memory from the host OS. By streamlining virtual-to-physical memory mapping and preparing pages asynchronously and swiftly, ZGC allows services to achieve both fast startup and rapid convergence to peak throughput.

For engineers running latency-sensitive distributed backend services and high-throughput microservices, this eliminates the need to over-tune initial heap configurations. You get rapid container boot cycles alongside sub-millisecond GC pauses right out of the gate.

Understanding these runtime mechanics helps teams size containers and tune memory profiles with significantly higher confidence.
