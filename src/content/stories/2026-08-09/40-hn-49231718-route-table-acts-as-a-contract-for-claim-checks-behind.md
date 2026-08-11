---
title: Route Table Acts as a Contract for Claim Checks Behind a Gateway
source: hn
url: https://james-carr.org/posts/2026-07-29-stop-treating-your-object-store-like-a-shared-database/
date: '2026-08-09'
tags:
- api-gateway
- architecture
- aws
- caching
- catchup
- claim-check
- enterprise-integration-patterns
- event-driven
- hn
- messaging
- microservices
- presigned-urls
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49231718'
comments: https://news.ycombinator.com/item?id=49231718
why_read: This article explains why presigned URLs are problematic for claim checks
  in distributed systems and proposes using a stable route table reference behind
  a gateway to ensure reliable payload resolution.
authors:
- mooreds
---

Stop treating your object store like a shared database! This article makes a compelling case for using the Claim Check pattern behind an API gateway instead of letting every consumer talk directly to S3.

While presigned URLs are convenient, they fall short with replay, fan-out, or migrations. A stable reference behind a gateway makes the route table the definitive contract, ensuring resilience and cleaner architecture. This is critical for robust event-driven systems.

This article provides highly practical advice for senior engineers building scalable, distributed systems, illustrating how to manage document fetching reliably across microservices and reduce blast radius. You will learn how this approach improves message integrity and system stability.
