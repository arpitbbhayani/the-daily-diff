---
title: Handling a multi-wave ddos attack exceeding uplink capacity
source: hn
url: https://nine.ch/en/blog/ddos-attack-august-2026-postmortem/
date: '2026-09-28'
tags:
- catchup
- ddos-attack
- hn
- incident-response
- network-capacity
- telemetry
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49875401'
comments: https://news.ycombinator.com/item?id=49875401
why_read: Read this post to understand how massive multi-wave DDoS attacks overwhelm
  upstream link capacity and learn practical infrastructure resilience lessons.
authors:
- Raphael Knecht
image: /infographics/04-hn-49875401.jpg
---

When a 600 Gbps volumetric DDoS attack hits your network, internal defenses do not matter if total inbound traffic exceeds the physical capacity of your provider uplinks. In a multi-day incident, traffic arrived in distinct waves that shifted targets across customer applications, central control panels, and internal ticketing systems.

The real operational bottleneck during sustained attacks is often not edge compute capacity, but upstream saturation. Upstream providers confirmed seeing 260 Gbps on individual links, forcing immediate diversion and upstream filtering before packets reached edge routers.

Handling these incidents requires automated upstream BGP blackholing and dynamic traffic scrubbing contracts that activate before pipe saturation cascades into total control plane loss.
