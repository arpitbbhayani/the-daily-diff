---
title: Resolving excessive gcache page file accumulation in MySQL clusters
source: hn
url: https://www.percona.com/blog/too-many-gcache-page-files-in-mysql-data-directory/
date: '2026-10-02'
tags:
- catchup
- disk-space
- gcache
- hn
- mysql
- percona-xtradb-cluster
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49931567'
comments: https://news.ycombinator.com/item?id=49931567
why_read: Understand the root causes of gcache page file accumulation in Percona XtraDB
  Cluster environments. You will learn diagnostic techniques to identify cluster changes
  that trigger disk space exhaustion.
authors:
- Kedar Vaijanapurkar
- Peter Sylvester
---

Galera Cluster uses a write-set cache known as GCache to store replication events. While GCache normally acts as a ring buffer in memory and a preallocated file on disk, large write transactions or lagging replica nodes can force it to allocate auxiliary 128 MB page files (gcache.page.*) on disk that persist until explicitly cleaned up.

When a cluster node fails to purge these temporary page files, disk space quietly exhausts. Investigating this issue requires understanding write-set replication lifecycles, identifying lagging nodes holding back the oldest sequence numbers, and verifying that the cluster is not pinned by long-running transactions.

Understanding your database replication engine storage mechanisms prevents unexpected outages during sudden transaction bursts.
