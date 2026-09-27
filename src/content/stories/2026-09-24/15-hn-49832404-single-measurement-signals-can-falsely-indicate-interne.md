---
title: Single measurement signals can falsely indicate internet outages
source: hn
url: https://observedstate.com/en/cases/ioda-probe-contrast.html
date: '2026-09-24'
tags:
- active-probing
- catchup
- false-positives
- hn
- ioda
- network-measurement
- telemetry
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49832404'
comments: https://news.ycombinator.com/item?id=49832404
why_read: Understand why relying on a single telemetry signal can create misleading
  alerts about large-scale outages. You will learn the importance of cross-validating
  anomalies across independent data sources before assuming real-world impact.
authors:
- xsofiaeven
---

A single metric crossing an alert threshold is only a fact about that specific probe, not necessarily about the underlying system.

During a recent monitoring event, an automated probe system flagged nine entire countries, including Japan, Australia, and Singapore, as disconnected from the internet. The alert triggered because active ICMP and ping probes dropped by over 50 percent, exceeding a five standard deviation threshold. However, passive BGP routing data and active web traffic indicators remained completely flat.

The networks had not gone down. They simply stopped responding to a specific external probe pattern. When diagnosing distributed systems, relying on a solitary telemetry stream will inevitably generate expensive false alarms.

Designing resilient observability requires multi-signal cross-correlation before triggering Sev-1 incidents.
