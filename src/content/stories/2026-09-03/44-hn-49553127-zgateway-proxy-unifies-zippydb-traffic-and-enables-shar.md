---
title: ZGateway proxy unifies ZippyDB traffic and enables shared services
source: hn
url: https://engineering.fb.com/2026/09/03/core-infra/zgateway-proxy-zippydb-meta/
date: '2026-09-03'
tags:
- admission-control
- catchup
- client-management
- connection-management
- hn
- key-value-store
- load-balancing
- proxy
- request-batching
- shared-services
- zgateway
- zippydb
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49553127'
comments: https://news.ycombinator.com/item?id=49553127
why_read: This article explains how ZGateway, a proxy for Meta's ZippyDB, unifies
  client traffic and enables critical shared services. Readers will learn the structural
  value of a proxy layer for managing large, diverse client populations.
authors:
- Rittik Banik
- Yunhao Cao
---

Putting a proxy in front of your database is not just for security; Meta's ZGateway in front of ZippyDB reveals profound benefits for managing traffic at extreme scale. This is not a trivial add-on, it is a critical architectural decision.

At Meta's scale, managing over a million ZippyDB clients owned by hundreds of teams became unmanageable. The ZGateway solved this by bounding the problem, creating a central point for shared work like connection pooling and retries, and establishing a single control plane for the entire workload. This significantly boosted cross-region resilience and enabled rich operations not possible client-side.

Understanding how a well-placed proxy can transform a distributed system's operability and scalability provides powerful lessons for any senior engineer designing large-scale infrastructure.
