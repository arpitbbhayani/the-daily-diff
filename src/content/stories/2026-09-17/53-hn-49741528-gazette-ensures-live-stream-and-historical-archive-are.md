---
title: Gazette ensures live stream and historical archive are the same dataset
source: hn
url: https://estuary.dev/blog/gazette-streaming-broker-architecture/
date: '2026-09-17'
tags:
- backfills
- catchup
- data-consistency
- gazette
- historical-data
- hn
- live-streaming
- streaming-broker
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49741528'
comments: https://news.ycombinator.com/item?id=49741528
why_read: This text explains how the Gazette streaming broker addresses the challenge
  of backfills and ensures consistency between live and historical data. Readers will
  learn about its unique architecture that unifies these two distinct workloads.
authors:
- "Dani P\xE1lma"
---

Designing streaming systems for both real-time events and large historical backfills is a common nightmare; often, you end up with two distinct data pipelines that eventually diverge.

Gazette offers a fascinating architectural solution to this. This open-source streaming broker avoids storing historical data itself, instead focusing on sequencing and synchronously replicating current writes. It offloads sealed history to object storage, treating the live stream and its archive as a single, ordered dataset.

This separation means new consumers performing massive backfills do not destabilize your live production environment. It intelligently unifies the "live" and "historical" views, eliminating the data reconciliation headaches that plague many traditional setups. A truly insightful approach to resilient data architecture.
