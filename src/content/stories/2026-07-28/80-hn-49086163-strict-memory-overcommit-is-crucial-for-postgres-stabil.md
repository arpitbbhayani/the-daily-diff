---
authors:
- Kaushik Iska
comments: https://news.ycombinator.com/item?id=49086163
date: '2026-07-28'
depth_score: 8
hn_id: '49086163'
image: /infographics/80-hn-49086163.jpg
interest_score: 8
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- crash-recovery
- enomem
- hn
- linux-kernel
- memory-overcommit
- oom-killer
- postgres
title: Strict memory overcommit is crucial for Postgres stability
url: https://clickhouse.com/blog/strict-memory-overcommit-for-postgres
utility_score: 9
why_read: This article explains how Linux's default memory overcommit policy can lead
  to Postgres instability and why strict overcommit prevents database restarts by
  handling memory errors gracefully.
---

The Linux kernel's memory overcommit policy (vm.overcommit_memory) can be a silent killer for your Postgres instances, leading to full database restarts and dropped connections when the OOM killer strikes a single backend process. Many engineers overlook this critical interaction.

Postgres is uniquely exposed to the OOM killer because backend processes share a memory segment for critical components like shared buffers. If one process is SIGKILLed, the entire instance assumes corruption and restarts, replaying the WAL through crash recovery.

Setting vm.overcommit_memory = 2 (strict overcommit) changes this behavior. The kernel will refuse malloc allocations before physical memory is exhausted, allowing Postgres to handle the ENOMEM error gracefully, failing only the offending query while the rest of the database continues to operate. This simple, well-documented configuration change is a cornerstone of robust Postgres deployment.

Understanding this deep interaction between the OS and your database is paramount for building highly available systems.