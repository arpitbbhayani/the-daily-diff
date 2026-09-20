---
title: Migrating a metrics platform at scale to OpenTelemetry
source: hn
url: https://www.cncf.io/blog/2026/09/17/opentelemetry-everywhere-migrating-a-metrics-platform-at-scale/
date: '2026-09-18'
tags:
- catchup
- data-pipeline
- distributed-systems
- gostatsd
- hn
- metrics-platform
- migration
- observability
- opentelemetry
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49751079'
comments: https://news.ycombinator.com/item?id=49751079
why_read: This article details Atlassian's strategic approach to migrating a large-scale
  metrics platform to OpenTelemetry without disrupting thousands of services. Readers
  will gain insights into the complexities of system migration and a practical strategy
  for replacing core infrastructure with minimal impact.
authors:
- Iris Grace Endozo
- Farzad Vazirnia
- Albert Kerr
---

Migrating a metrics platform serving 100,000 hosts across 14 regions without disruption is a monumental task. Atlassian's move to OpenTelemetry provides a masterclass in large-scale infrastructure evolution.

Their key insight was not to rip and replace, but to strategically swap the collection and pipeline engine while preserving the existing StatsD over UDP interface for service owners. This allowed a phased rollout without forcing thousands of teams to re-instrument.

The article details how they maintained a 99.95 percent SLO during the transition, highlighting practical challenges and solutions in distributed systems migrations. This is a blueprint for evolving critical infrastructure without outages.
