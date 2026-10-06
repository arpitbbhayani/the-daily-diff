---
title: Branching running machines preserves lineage across stateful checkpoints
source: hn
url: https://smolmachines.com/engineering/branching-and-checkpoint-lineage
date: '2026-10-05'
tags:
- catchup
- checkpointing
- copy-on-write
- firecracker
- hn
- microvms
- virtual-machines
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49969447'
comments: https://news.ycombinator.com/item?id=49969447
why_read: Learn how microVM branching and lineage checkpointing differ from traditional
  Firecracker snapshots for stateful workloads. It explains how to maintain full VM
  state, disks, and identity across checkpoints.
authors:
- binsquare
---

AI agent workflows frequently need to fork state, execute speculative actions, and roll back safely without losing previous lineage.

Standard microVM platforms rely heavily on Firecracker snapshots, which pause the VM and dump memory plus device state. However, Firecracker leaves disk diff chains, base rebasing, and clone identity management entirely to the user. Smolvm takes a different path by providing native copy-on-write branching across both memory and disks in roughly 80 milliseconds.

Instead of managing brittle diff chains where deleting an older snapshot invalidates subsequent restores, smolvm captures the entire checkpoint history. The latest checkpoint retains full parent tracking, allowing instant rollbacks to any prior point in execution lineage.

Building robust sandboxes for autonomous agents requires treating whole-machine state and disk history as first-class branchable entities.
