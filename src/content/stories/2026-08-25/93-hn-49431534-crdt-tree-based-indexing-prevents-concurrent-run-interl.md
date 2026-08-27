---
title: CRDT Tree-Based Indexing Prevents Concurrent Run Interleaving
source: hn
url: https://madebyevan.com/algos/crdt-tree-based-indexing/
date: '2026-08-25'
tags:
- catchup
- concurrent-editing
- crdt
- hn
- parent-pointers
- sequence-ordering
- tree-based-indexing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49431534'
comments: https://news.ycombinator.com/item?id=49431534
why_read: This post details a specific CRDT algorithm for maintaining consistent object
  order in collaborative peer-to-peer applications, explaining how tree-based indexing
  prevents interleaving of concurrently-inserted runs in textual data.
authors:
- Evan
---

Achieving consistent object ordering in collaborative peer-to-peer applications, especially with concurrent insertions, is a challenging problem in distributed systems. Fractional indexing can lead to interleaving, which is undesirable for textual data. This calls for a more robust approach.

This article describes a powerful tree-based indexing algorithm for CRDTs. It uses parent pointers and pre-order tree traversal to determine order, with children sorted by their original insertion-time counts to manage concurrency. This design ensures that concurrently inserted runs do not interleave.

Understanding these algorithmic details is crucial for building resilient and consistent collaborative applications. This is a fundamental pattern for any engineer working on complex distributed primitives.
