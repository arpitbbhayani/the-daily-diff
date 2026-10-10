---
title: Separating keys and values reduces LSM write amplification
source: hn
url: https://tidesdb.com/articles/keys-and-values-dont-always-belong-together/
date: '2026-10-09'
tags:
- catchup
- hn
- key-value-separation
- log-structured-merge-tree
- value-log
- wisckey
- write-amplification
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50016541'
comments: https://news.ycombinator.com/item?id=50016541
why_read: Read this to understand how inline value storage causes severe write amplification
  in LSM trees and how separating values into dedicated logs minimizes rewrite overhead.
authors:
- Alex Gaetano Padula
---

Storing keys and values together inside standard LSM tree SSTables destroys write performance when values exceed a few kilobytes. Every compaction cycle must read and rewrite the entire value payload repeatedly, even if that value never changes.

This compounding write amplification is the primary bottleneck in conventional log-structured merge designs. When you write a sixteen-byte key alongside a four-kilobyte value, background merge operations rewrite that same four kilobytes across multiple levels, thrashing disk bandwidth and degrading read latency.

The architectural solution is key-value separation, originally introduced by WiscKey. By routing values above a configurable size threshold into an append-only value log, the primary LSM tree indexes only keys paired with logical disk offsets. Compactions now process small key pointers rather than heavy payloads.

The memtable, write-ahead log, and SSTable nodes remain lean and cache-friendly. The trade-off is a random read penalty when resolving values during range queries, but for write-heavy workloads with larger values, the reduction in write amplification is massive.

Separating your keys from your values turns compaction from an I/O disaster into a lightweight pointer shuffle.
