---
title: Notion implemented CRDTs for seamless collaborative editing
source: hn
url: https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts
date: '2026-09-21'
tags:
- catchup
- collaboration
- concurrent-editing
- crdts
- hn
- last-write-wins
- notion
- offline-mode
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49783437'
comments: https://news.ycombinator.com/item?id=49783437
why_read: This article details the challenges of implementing concurrent editing in
  collaborative applications like Notion, particularly with the "last write wins"
  approach. Readers will learn how Notion adopted CRDTs to overcome data loss and
  enable seamless real-time and offline collaboration.
authors:
- Angelique Nehmzow
- Emma Guo
---

Notion did not always have true concurrent editing; before 2025, edits to the same block could still result in data loss due to a "last write wins" system. To fix this fundamental problem, they entirely redesigned their underlying system to use Conflict-free Replicated Data Types, or CRDTs.

This is a deep dive into how CRDTs enable robust collaborative experiences, even with complex block-based document models and an eye towards offline functionality. It highlights the architectural shift needed to move from eventually consistent, single-writer assumptions to truly conflict-free, multi-writer collaboration.

You will learn about the specific challenges Notion faced with its existing block model and how CRDTs provided a scalable, resilient solution. It is a fantastic case study in applied distributed systems, showcasing the practical trade-offs and implementation details for real-time collaboration, a must-read for any system designer.
