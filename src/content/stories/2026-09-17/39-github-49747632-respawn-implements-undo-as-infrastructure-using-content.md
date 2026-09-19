---
title: Respawn implements undo as infrastructure using content-addressed snapshots
source: github
url: https://github.com/savageAZfck/respawn
date: '2026-09-17'
tags:
- autonomous-agents
- catchup
- content-addressed-snapshots
- directory-versioning
- fastcdc
- github
- respawn
- state-management
- undo-as-infrastructure
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49747632'
comments: https://news.ycombinator.com/item?id=49747632
why_read: This text introduces Respawn, a tool that provides 'undo as infrastructure'
  by versioning directory states with content-addressed snapshots. Readers will learn
  how this approach enables reliable system state management, particularly for autonomous
  agents, and how it uses technologies like FastCDC for efficient data handling.
authors:
- savag3AZfckk
---

Building reliable AI agents is hard, especially when they can make unexpected changes to your environment. Imagine an "undo" button for your agent's actions \u2013 that is exactly what Respawn provides.

This Rust-based tool versions the state of a directory tree using a content-addressed snapshot graph, where every file's content lives in a store using FastCDC for content-defined chunks. This design allows any previous snapshot to be materialized exactly.

Reverting is a simple HEAD pointer swap followed by atomic per-file writes. This means you can snapshot your environment before an autonomous process begins, and if anything goes wrong, you can instantly revert to a known good state. This is crucial for debugging and ensuring integrity.

It is a local-first solution with no cloud dependency, and supports peer-to-peer snapshot replication over LAN, even with Noise-encrypted communication. This offers a powerful primitive for developing and deploying AI agents with strong integrity guarantees.
