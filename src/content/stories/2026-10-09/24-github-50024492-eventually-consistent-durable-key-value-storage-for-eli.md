---
title: Eventually consistent durable key-value storage for Elixir applications
source: github
url: https://github.com/chrismccord/ekv
date: '2026-10-09'
tags:
- catchup
- distributed-systems
- elixir
- eventual-consistency
- github
- key-value-store
- linearizable-cas
- sqlite
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50024492'
comments: https://news.ycombinator.com/item?id=50024492
why_read: Understand how EKV provides durable, partitioned-tolerant distributed key-value
  storage in Elixir using SQLite NIFs and per-shard oplog delta sync. It offers a
  clear mental model for running an embedded zero-dependency storage layer across
  Erlang clusters.
authors:
- Chris McCord
---

Running distributed state inside the BEAM runtime often forces an awkward choice between ephemeral in-memory tables and heavy external database clusters. EKV bridges that gap by embedding a vendored SQLite engine inside each Elixir node while replicating data directly across connected nodes through per-shard oplogs.

The architecture defaults to eventual consistency using delta synchronization, yet it introduces opt-in per-key linearizable compare-and-swap operations for critical paths. Because persistence relies on SQLite compiled directly as an Erlang NIF, the system requires zero external operational dependencies. Data persists across node restarts, node terminations, and network partitions without requiring a separate operational datastore.

Verification matters just as much as design here: the project includes full Jepsen test suites to validate consistency guarantees under partition faults. For teams building stateful Elixir services, this pattern demonstrates how local embedded storage and cluster distribution can eliminate dedicated database infrastructure entirely.

Local storage with cluster-level durability is an exceptionally compelling architecture for stateful systems.
