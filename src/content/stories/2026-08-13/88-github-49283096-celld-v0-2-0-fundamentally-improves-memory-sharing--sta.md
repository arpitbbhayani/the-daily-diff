---
title: Celld v0.2.0 fundamentally improves memory sharing, state replication, and
  fleet availability
source: github
url: https://github.com/denoland/celld/releases/tag/v0.2.0
date: '2026-08-13'
tags:
- catchup
- celld
- data-control-plane-separation
- fleet-availability
- github
- isolates
- memory-sharing
- state-replication
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49283096'
comments: https://news.ycombinator.com/item?id=49283096
why_read: This document details significant architectural changes in celld v0.2.0.
  Readers will learn how memory management, state replication, and fault tolerance
  have been fundamentally improved.
authors:
- Ryan Dahl
---

Celld v0.2.0 is out, and Ryan Dahl's latest release notes are a masterclass in system-level optimization for distributed runtimes. The team has radically redesigned memory sharing, allowing "cells" to co-exist on shared isolates.

This change alone slashes the memory footprint per cell from 3.4 MB to a lean 471 KB. This is not just an incremental improvement; it is a fundamental shift that enables far higher density and efficiency for concurrent workloads. They also introduced a crucial separation of data and control planes, bolstering fault tolerance against object store failures.

For anyone building scalable backend services or designing custom runtimes, the meticulous attention to detail on memory reclamation, isolate reuse, and the shift to jemalloc as the global allocator offers extremely practical lessons. It shows how deep engineering can yield dramatic resource savings and resilience.

This is how you build a robust, high-performance system from the ground up.
