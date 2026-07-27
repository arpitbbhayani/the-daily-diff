---
authors:
- gritzko
comments: https://news.ycombinator.com/item?id=49047203
date: '2026-07-25'
depth_score: 8
hn_id: '49047203'
image: /infographics/55-hn-49047203.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- catchup
- crdt
- hn
- libdog
- revision-control
- token-level-diff
title: libdog offers token-level revision control primitives for custom systems
url: https://github.com/gritzko/libdog/blob/main/README.md
utility_score: 7
why_read: Read this to understand how libdog provides a lightweight, token-level revision
  control toolkit for building custom systems, distinct from traditional line-based
  Git reimplementations.
---

Traditional version control like Git operates on lines, which can lead to messy merges when code structure changes. Libdog introduces token-level revision control, a fundamentally different approach that understands code semantics rather than just text lines.

This C toolkit includes tokenizers for 60 languages and uses CRDTs (CausalTree-like) for its diff, merge, and blame operations. Imagine the precision for code intelligence, where changes are understood at the syntax level, not merely as additions or deletions of text blocks.

By providing core revision control primitives, Libdog could be a game-changer for building smarter development tools. It is not a Git reimplementation, but a robust library designed for deep integration into advanced engineering workflows.