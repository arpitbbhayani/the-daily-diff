---
title: Dryas offers reprogrammable engine for high-speed interconnect tracing
source: hn
url: https://arxiv.org/abs/2608.12934
date: '2026-08-15'
tags:
- catchup
- dryas
- fpga-debugging
- high-speed-interconnect
- hn
- interconnect-tracing
- nfa
- reprogrammable-engine
- ste
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49314375'
comments: https://news.ycombinator.com/item?id=49314375
why_read: This paper introduces Dryas, an open-source tool for high-speed interconnect
  tracing and analysis. Readers will learn how its reprogrammable NFA-based engine
  efficiently debugs and analyzes complex interconnects without disrupting running
  applications.
authors:
- "Manuel Br\xF6chin"
- Tom Kuchler
- Michael Giardino
- David Cock
- Timothy Roscoe
---

Debugging high-speed interconnects in modern heterogeneous systems is notoriously difficult, especially for transient events at full operational throughput. Dryas introduces a groundbreaking solution: an open-source, reprogrammable FPGA-based engine designed for precisely this challenge.

Dryas uses Non-deterministic Finite Automata (NFAs) implemented with state transition elements, allowing for cache-line granularity tracing at 30 GiB/s. Crucially, its filters can be reprogrammed in under a second without disrupting the running application, a feat that drastically accelerates the debugging and optimization cycle.

This is not just a tool; it is a blueprint for next-generation system observability at the hardware level. For anyone architecting high-performance or distributed systems, understanding this approach to real-time, non-invasive interconnect analysis offers invaluable insights into system behavior and bottleneck identification.

A deep dive into FPGA-driven, low-latency system analysis.
