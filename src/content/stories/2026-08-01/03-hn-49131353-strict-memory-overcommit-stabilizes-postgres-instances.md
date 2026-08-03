---
authors:
- Kaushik Iska
comments: https://news.ycombinator.com/item?id=49131353
date: '2026-08-01'
depth_score: 9
hn_id: '49131353'
image: /infographics/03-hn-49131353.jpg
interest_score: 9
novelty_score: 7
section: databases
source: hn
tags:
- catchup
- enomem
- hn
- linux-kernel
- memory-overcommit
- oom-killer
- postgres
title: Strict memory overcommit stabilizes Postgres instances
url: https://clickhouse.com/blog/strict-memory-overcommit-for-postgres
utility_score: 9
why_read: This article explains why strict memory overcommit is essential for Postgres
  stability, detailing how it prevents instance-wide crashes caused by the OOM killer.
  Readers will learn the difference between default and strict overcommit policies
  and their impact on database resilience.
---

When PostgreSQL instances crash due to the Linux OOM (Out Of Memory) killer, the entire database instance often restarts, causing significant downtime. This happens because Postgres, which uses a single shared memory segment, cannot safely recover a partially corrupted segment if a backend process is summarily SIGKILLed.

The solution is to enable strict memory overcommit by setting `vm.overcommit_memory = 2`. This prevents the kernel from granting more memory than the system can guarantee, ensuring that `malloc` calls fail gracefully with `ENOMEM` *before* physical memory exhaustion. This allows PostgreSQL to handle the error, roll back the transaction, and keep the remaining connections operational, rather than triggering a full instance restart.

This is not a minor tweak; it is a fundamental shift in how the OS and database interact during memory pressure. Implementing this setting dramatically improves PostgreSQL's resilience and system stability, a must-know for any senior engineer managing production databases.