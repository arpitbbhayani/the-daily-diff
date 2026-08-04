---
title: SCROLL protocol offers superior synchronization over webhooks
source: hn
url: https://welidev.github.io/scroll/
date: '2026-08-02'
tags:
- catchup
- change-log
- cursor-based
- data-synchronization
- hn
- ndjson
- scroll-protocol
- webhooks
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49142354'
comments: https://news.ycombinator.com/item?id=49142354
why_read: This document explains the limitations of webhooks for data synchronization
  and introduces SCROLL, an alternative protocol that uses cursor-addressed change
  logs over NDJSON for more robust replication.
authors:
- weli
---

Webhooks are convenient, but for critical data synchronization across distributed systems, they often fall short, leading to lost events and difficult recovery. SCROLL (Synchronized Change Replication Over Line Logs) offers a powerful, principled alternative.

SCROLL proposes using HTTP long-lived connections to stream NDJSON events, each carrying a cursor. This simple design means consumers can easily resume from where they left off after an outage, ensuring no data loss and straightforward state synchronization.

This is not just another eventing mechanism; it is a thoughtful protocol addressing the fundamental challenges of reliable data replication. If you have struggled with eventual consistency or complex retry logic for webhooks, SCROLL provides a compelling, more robust blueprint.
