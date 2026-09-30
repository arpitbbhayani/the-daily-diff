---
title: Jdk 27 delivers broad runtime and library performance improvements
source: hn
url: https://inside.java/2026/09/28/performance-update-jdk27/
date: '2026-09-29'
tags:
- catchup
- compact-object-headers
- g1-gc
- hashmap-optimization
- hn
- jdk-27
- lazy-constants
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49896970'
comments: https://news.ycombinator.com/item?id=49896970
why_read: Read this to understand the key performance optimizations in JDK 27, including
  compact object headers by default and library refinements like faster HashMap copying.
authors:
- Per-Ake Minborg
- Claes Redestad
---

The OpenJDK team has enabled Compact Object Headers by default in JDK 27, marking a major milestone for JVM memory efficiency. By reducing standard 64-bit object header overhead down to 64 bits total, memory footprints shrink significantly across common enterprise workloads.

Beyond memory layout enhancements, JDK 27 sets the G1 garbage collector as the default across all supported configurations and refines fundamental collection internals. A notable example includes HashMap bulk copy operations, which now bypass iterator abstraction overhead to directly duplicate underlying table structures during initialization.

The release also introduces a third preview of lazy constants through JEP 531, enabling runtime constant folding without manual synchronization primitives. For backend systems running high-throughput microservices, these low-level runtime optimizations yield measurable throughput and heap density improvements out of the box.
