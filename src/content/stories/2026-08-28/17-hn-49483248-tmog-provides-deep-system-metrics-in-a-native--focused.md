---
title: TMOG provides deep system metrics in a native, focused task manager
source: hn
url: https://tmog.org
date: '2026-08-28'
tags:
- catchup
- cpu-metrics
- hn
- linux
- macos
- memory-metrics
- system-monitor
- task-manager
- tmog
- windows
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49483248'
comments: https://news.ycombinator.com/item?id=49483248
why_read: This text introduces TMOG, a cross-platform native task manager that combines
  the clarity of Activity Monitor with the depth of a serious systems console. Readers
  will learn about its ability to provide detailed, real-time insights into CPU, memory,
  and other system resources, presented with an emphasis on understanding the underlying
  mechanisms.
authors:
- CarbonNanotubes
---

The original creator of Windows Task Manager just dropped TMOG, a new cross-platform system monitor for macOS, Windows, and Linux. This is not just another utility; it is designed for deep, native system metrics. It provides the clarity of Activity Monitor with the depth of Task Manager. You can finally inspect every logical core, seeing performance and efficiency cores color-coded, and even monitor kernel time.

Memory is not just shown as 'used' but accounted for with pressure, compression, cache, and swap data. This level of detail is crucial for debugging complex performance issues in modern distributed systems. Understanding how a tool like this is architected from a C++ shared system metrics core is invaluable for any engineer working on performance-sensitive applications.

This is a serious console for the whole machine, offering granular visibility into your hardware's workload. You will want to explore this.
