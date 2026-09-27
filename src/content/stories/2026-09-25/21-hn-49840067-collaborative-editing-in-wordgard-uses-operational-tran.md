---
title: Collaborative editing in Wordgard uses operational transformation with a tree
  structure
source: hn
url: https://marijnhaverbeke.nl/blog/collaborative-editing-wordgard.html
date: '2026-09-25'
tags:
- catchup
- central-server
- collaborative-editing
- document-tree-structure
- hn
- operational-transformation
- rich-text-editor
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49840067'
comments: https://news.ycombinator.com/item?id=49840067
why_read: This post explains the author's current thinking on implementing collaborative
  editing in Wordgard, specifically detailing how operational transformation with
  a central server can be applied to rich text editors with a hierarchical, tree-structured
  document model.
authors:
- Marijn Haverbeke
---

Collaborative editing for rich text is a notoriously hard problem. This deep dive into Wordgard's approach, building on years of experience with ProseMirror and CodeMirror, reveals critical insights into managing distributed state for hierarchical document structures.

The core challenge lies in applying operational transformation (OT) to trees, not just flat character sequences. Many systems flatten documents to simplify this, but Wordgard tackles the complexity head-on, explaining the trade-offs and how a central server orchestrates changes to maintain consistency.

This is a must-read for any senior engineer wrestling with real-time synchronization, distributed systems, or complex UI state. It offers a masterclass in handling concurrency and conflict resolution in a demanding environment.
