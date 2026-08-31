---
title: Proton datacenter outage caused by cooling failure and delayed failover
source: hn
url: https://proton.me/blog/august-27-outage-incident-report
date: '2026-08-29'
tags:
- catchup
- cooling-system-failure
- database-replication
- datacenter-outage
- failover
- hn
- incident-report
- redundancy
- split-brain
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49493920'
comments: https://news.ycombinator.com/item?id=49493920
why_read: Read this to understand the specific causes of a datacenter outage at Proton,
  including a cooling system failure and the complexities of human-supervised database
  failovers. It explains how redundancy mechanisms can be challenged in specific scenarios.
authors:
- Cider9986
---

Proton's recent datacenter outage report offers invaluable lessons in distributed systems resilience. A cooling system failure caused temperatures to soar to 60°C, leading to a cascade of equipment failures, including critical network switches and primary database copies.

A key takeaway involves the trade-off in database failovers: Proton explicitly chose manual primary database failovers to avoid split-brain scenarios, even though this extended the recovery time. This highlights the critical human element in maintaining data consistency in the face of catastrophic infrastructure failure.

The report underscores that even with extensive redundancy, specific failure modes (like a complete datacenter environmental collapse) can expose latent vulnerabilities in failover strategies, demanding continuous re-evaluation of assumptions.
