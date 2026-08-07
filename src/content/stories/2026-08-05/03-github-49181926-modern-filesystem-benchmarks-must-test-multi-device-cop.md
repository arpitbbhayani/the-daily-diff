---
title: Modern filesystem benchmarks must test multi-device copy-on-write features
source: github
url: https://github.com/fenio/modern-fs-benchmark
date: '2026-08-05'
tags:
- benchmarking
- catchup
- copy-on-write
- filesystems
- fsync-tail-latency
- github
- multi-device
- redundancy-layouts
- snapshot-aging
- transparent-compression
section: databases
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49181926'
comments: https://news.ycombinator.com/item?id=49181926
why_read: This text describes a benchmarking project that addresses the limitations
  of traditional filesystem benchmarks. Readers will learn which specific metrics
  are crucial for evaluating modern multi-device, copy-on-write filesystems like btrfs,
  ZFS, and bcachefs.
authors:
- Grayskull
---

Traditional filesystem benchmarks often miss the mark for modern, multi-device setups. Many only test `fio` on a single disk with default settings, leaving a huge gap in understanding real-world performance for critical features.

This project provides continuous benchmarks for CoW filesystems like btrfs, ZFS, and bcachefs, focusing on factors like redundancy layouts, snapshot aging, transparent compression, and crucial fsync tail latency. It highlights the actual machinery underlying scalable storage.

Engineers building database systems or distributed storage need to know how these filesystems behave under load, during degraded operations, or when nearly full. This is practical, principal-level insight for designing truly resilient and high-performance systems.
