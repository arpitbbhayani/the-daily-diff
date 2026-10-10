---
title: Enabling concurrent writes in unmodified SQLite via custom VFS
source: github
url: https://github.com/sqliteai/sqlite-multiwriter
date: '2026-10-09'
tags:
- catchup
- concurrent-writes
- database-locks
- github
- sqlite
- virtual-file-system
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50022049'
comments: https://news.ycombinator.com/item?id=50022049
why_read: Read this to understand how sqlite-multiwriter overcomes SQLite's single-writer
  bottleneck by leveraging an extension-based virtual file system. You will discover
  how concurrent transactions can run simultaneously across multiple threads and processes
  without modifying core SQLite files.
authors:
- marcobambini
---

SQLite has powered countless edge and desktop architectures, but it has always carried a strict operational bottleneck: only one writer can hold the lock at any given time. When multiple worker threads or background processes attempt to write concurrently, applications inevitably hit SQLITE_BUSY locks and suffer cascading latency spikes.

A new virtual file system extension named sqlite-multiwriter eliminates this limitation without requiring custom engine forks or schema alterations. By intercepting write transactions at the VFS layer, the system enables concurrent multi-threaded and multi-process commits as long as transactions touch distinct database rows and pages.

Benchmark results show sixteen concurrent threads reaching over 49,000 transactions per second compared to roughly 8,600 transactions per second on stock SQLite. The tail latency improvements are even more dramatic, dropping the 99.9th percentile commit duration from 157 milliseconds down to barely two milliseconds.

Unlocking concurrent writes without sacrificing SQLite file compatibility fundamentally changes how we can architect embedded local storage.
