---
title: Linkerd connection timeouts resolved by tuning TCP backlog and proxy workers
source: hn
url: https://www.buoyant.io/blog/backlog-and-workers-two-knobs-on-two-layers
date: '2026-09-17'
tags:
- catchup
- connection-timeouts
- hn
- linkerd
- performance-tuning
- proxy-workers
- tcp-listener-backlog
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49746365'
comments: https://news.ycombinator.com/item?id=49746365
why_read: This article explains how TCP listener backlog and proxy workers affect
  Linkerd performance. Readers will learn to diagnose and resolve connection timeouts
  and CPU issues by tuning these settings.
authors:
- Ivan Porta
---

Optimizing service mesh performance often comes down to understanding the invisible bottlenecks. For Linkerd users, connection timeouts can be tricky to debug. This article cuts through the mystery by explaining the two critical layers where connections get queued: the kernel's TCP listener backlog and the proxy's internal workers.

You will gain a clear understanding of how these mechanisms work, which configurations control them, and how to effectively diagnose whether your system is hitting limits at the TCP layer or within the proxy itself. This goes beyond generic advice, offering concrete insights into Linkerd's behavior.

Knowing these two "knobs" means you can proactively tune your service mesh for better resilience and throughput, turning obscure errors into solvable engineering problems. This is essential knowledge for anyone running production Kubernetes services.
