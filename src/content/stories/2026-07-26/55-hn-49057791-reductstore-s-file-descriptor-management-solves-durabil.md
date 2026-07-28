---
authors:
- flipback
comments: https://news.ycombinator.com/item?id=49057791
date: '2026-07-26'
depth_score: 9
hn_id: '49057791'
image: /infographics/55-hn-49057791.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- durability
- file-descriptors
- fsync
- hn
- page-cache
- reductstore
- storage-engine
- write-performance
title: ReductStore's file descriptor management solves durability and performance
  issues
url: https://blog.atimin.dev/handling-file-descriptors/
utility_score: 8
why_read: This article explains the critical challenges of balancing data durability
  and write performance in storage engines. Readers will learn how ReductStore specifically
  manages file descriptors to overcome the costs associated with achieving persistence.
---

The seemingly simple act of writing to disk in a database is anything but. This article from ReductStore unveils the intricate dance of file descriptors and `fsync` calls required to balance durability, write performance, and even remote storage costs in a modern storage engine.

Understanding the true cost of `fsync` 

from microseconds on NVMe to tens of milliseconds on spinning disks 

is crucial. Skipping it risks data loss; performing it too often cripples throughput. This deep dive shows how a block-based, append-only layout, coupled with a Write-Ahead Log, manages these tensions effectively.

You will learn how choices at the operating system interaction layer directly dictate a database's reliability and speed. This is not just theoretical; these are the core trade-offs that define robust data systems.

Essential insights for anyone building or optimizing data infrastructure.