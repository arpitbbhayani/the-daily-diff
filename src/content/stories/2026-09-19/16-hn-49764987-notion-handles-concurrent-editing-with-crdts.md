---
title: Notion handles concurrent editing with CRDTs
source: hn
url: https://www.notion.com/blog/how-notion-handles-concurrent-editing-with-crdts
date: '2026-09-19'
tags:
- block-based-document-model
- catchup
- concurrent-editing
- crdts
- hn
- last-write-wins
- offline-mode
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49764987'
comments: https://news.ycombinator.com/item?id=49764987
why_read: This article explains how Notion re-architected its system to support true
  concurrent editing, moving away from a "last write wins" model. Readers will learn
  about the challenges of collaborative text editing, especially with block-based
  documents and offline mode, and how Conflict-free Replicated Data Types (CRDTs)
  provide a solution.
authors:
- Angelique Nehmzow
- Emma Guo
---

Concurrent editing is notoriously hard, but Notion shares how they conquered the "last write wins" problem with CRDTs, ensuring seamless collaboration even offline. This provides a masterclass in distributed system design.

You are not just getting a theoretical overview; Notion dives into how they specifically adapted Conflict-free Replicated Data Types for their unique block-based document model. This tackles real-world complexities that often trip up collaborative applications, especially when users are disconnected.

Understanding their approach offers direct, actionable insights for any engineer building scalable, eventually consistent systems. It provides a robust blueprint for achieving strong data consistency in challenging distributed environments.
