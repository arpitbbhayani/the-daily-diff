---
title: How Notion handles collaborative concurrent editing with CRDTs
source: hn
url: https://www.notion.com/en-gb/blog/how-notion-handles-concurrent-editing-with-crdts
date: '2026-09-28'
tags:
- catchup
- concurrent-editing
- crdts
- data-synchronization
- hn
- last-write-wins
- rich-text-editing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49881416'
comments: https://news.ycombinator.com/item?id=49881416
why_read: Learn how Notion redesigned its document model and transitioned from last-write-wins
  to CRDTs to eliminate data loss in collaborative and offline editing.
authors:
- Angelique Nehmzow
- Emma Guo
- Fabricio Pontes Harsich
- Stephan Boyer
---

Notion recently redesigned its core document architecture, transitioning from a Last-Write-Wins (LWW) model to Conflict-free Replicated Data Types (CRDTs) to handle concurrent block editing and enable reliable offline support.

Historically, Notion represented pages as independent database records per block. While this allowed distinct blocks to be edited concurrently without collisions, simultaneous edits to the same block routinely resulted in silent data loss as the server resolved conflicts strictly by the latest arrival timestamp.

By integrating CRDTs directly into their block-based data model, concurrent edits now merge deterministically across multiple clients without requiring central server lock coordination. This eliminates the risk of overwriting peer changes during high-concurrency editing sessions or after reconnecting from an offline state.

Designing collaborative systems requires moving past simple timestamp ordering and investing in deterministic convergence primitives.
