---
title: How Linux readahead optimizes page cache disk reads
source: hn
url: https://victoriametrics.com/blog/linux-readahead-and-fadvise/index.html
date: '2026-09-29'
tags:
- catchup
- disk-io
- hn
- linux-kernel
- page-cache
- readahead
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49893363'
comments: https://news.ycombinator.com/item?id=49893363
why_read: Learn the underlying mechanics of how the Linux kernel uses readahead to
  minimize costly disk round-trips. This guide explains the interaction between file
  reads, the page cache, and hardware latency.
authors:
- valyala
---

Two identical read calls in Linux can have vastly different latency profiles depending on whether the data sits in the page cache or on disk. When data is cached, a read is merely a memory copy that completes in nanoseconds. When a cache miss occurs, the kernel blocks the thread and incurs a disk round trip that costs microseconds on NVMe and milliseconds on spinning disks.

The Linux kernel mitigates this penalty through readahead. Whenever the kernel detects sequential access patterns, it speculatively loads contiguous pages into memory before user space explicitly requests them. This turns what would be multiple synchronous disk misses into asynchronous background I/O.

However, default readahead heuristics become a liability for random access workloads, such as database index lookups. Unnecessary readahead wastes memory bandwidth and evicts useful pages from the cache. Engineers can override default readahead per file descriptor using posix_fadvise with POSIX_FADV_RANDOM or POSIX_FADV_SEQUENTIAL, or system-wide using blockdev.

Understanding kernel-level page cache behaviors allows backend engineers to tailor disk access patterns directly to their storage engine requirements.
