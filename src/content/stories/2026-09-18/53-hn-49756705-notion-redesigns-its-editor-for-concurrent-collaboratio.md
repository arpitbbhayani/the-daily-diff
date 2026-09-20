---
title: Notion redesigns its editor for concurrent collaboration with CRDTs
source: hn
url: https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts
date: '2026-09-18'
tags:
- catchup
- concurrent-editing
- crdts
- hn
- last-write-wins
- notion
- offline-mode
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49756705'
comments: https://news.ycombinator.com/item?id=49756705
why_read: This article explains the challenges of implementing true concurrent editing
  in collaborative software like Notion and how CRDTs were used to overcome data loss
  from 'last write wins' systems.
authors:
- Angelique Nehmzow
- Emma Guo
---

Collaborative editing is one of the toughest problems in distributed systems, often leading to data loss in "last write wins" (LWW) scenarios. Notion faced this challenge head-on, transitioning its underlying system to leverage Conflict-free Replicated Data Types (CRDTs).

This move was critical for ensuring consistency and preventing lost edits, especially with its block-based document model and the eventual introduction of offline mode. The article dives deep into the technical considerations and adaptations required to implement CRDTs effectively in a rich-text environment.

For engineers tackling real-time collaboration or building resilient distributed systems, understanding Notion's CRDT journey offers invaluable practical lessons on eventual consistency and conflict resolution strategies. It is a masterclass in building collaborative software.
