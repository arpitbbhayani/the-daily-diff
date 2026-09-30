---
title: Testing Datadog intake architecture migration to stateful encoding using Antithesis
source: hn
url: https://antithesis.com/blog/2026/datadog/
date: '2026-09-29'
tags:
- antithesis
- catchup
- event-platform-intake
- hn
- stateful-encoding
- telemetry-pipelines
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49896060'
comments: https://news.ycombinator.com/item?id=49896060
why_read: Learn how Datadog tackles the architectural and testing challenges of shifting
  high-throughput telemetry pipelines from stateless communication to stateful encoding
  at massive scale.
authors:
- TW Lim
---

Moving an ingestion pipeline from stateless HTTP to stateful stream encoding is one of the hardest migrations in distributed systems. Datadog processes over 100 trillion events per day through its Event Platform Intake. Maintaining decoding state between the Datadog Agent and intake servers drastically cuts network bandwidth and CPU overhead, but introducing state creates severe failure modes like dropped sequences and synchronization drift.

To safely validate this architectural overhaul, Datadog used Antithesis deterministic simulation testing. Instead of relying on traditional integration testing or raw canary deployments, the team injected network partitions, process crashes, and message reordering into the stateful pipeline under deterministic conditions.

This approach caught edge-case race conditions in session re-establishment before code ever touched production. Designing high-throughput event intake requires treating state synchronization and deterministic fault injection as first-class architectural requirements.
