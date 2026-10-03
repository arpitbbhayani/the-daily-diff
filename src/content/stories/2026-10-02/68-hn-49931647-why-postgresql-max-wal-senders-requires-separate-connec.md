---
title: Why postgresql max wal senders requires separate connection planning
source: hn
url: https://thebuild.com/blog/all-your-gucs-in-a-row-max_wal_senders/
date: '2026-10-02'
tags:
- catchup
- hn
- logical-replication
- max-wal-senders
- pg-basebackup
- postgresql
- wal-level
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49931647'
comments: https://news.ycombinator.com/item?id=49931647
why_read: Learn how PostgreSQL handles WAL sender processes independently of max_connections
  and how to correctly size connection capacity for replication and backups.
authors:
- hnrprtlpdb
---

If you are still sizing PostgreSQL max_connections to include replication connections, your configuration mental model is out of date. Since PostgreSQL 12, WAL sender processes have their own dedicated allocations controlled entirely by max_wal_senders.

Configuring max_wal_senders requires accounting for far more than active standby replicas. Every default pg_basebackup run consumes two slots. Each logical replication subscription consumes at least one slot, plus an additional slot for every table currently undergoing initial copy. Streaming tools like Barman and pg_receivewal also claim these sender slots directly.

Worse, orphaned replication clients that drop off the network without cleanly terminating sockets hold onto their assigned slots until wal_sender_timeout expires. If your pool runs dry during an unexpected network partition or concurrent backup run, replication stalls entirely.

Review your PostgreSQL parameters today to ensure your replica headroom accounts for transient backup jobs and stalled connections.
