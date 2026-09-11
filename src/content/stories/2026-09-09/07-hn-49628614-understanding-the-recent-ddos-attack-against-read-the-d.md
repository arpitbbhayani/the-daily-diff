---
title: Understanding the Recent DDoS Attack Against Read the Docs
source: hn
url: https://about.readthedocs.com/blog/2026/09/2026-ddos-attack/
date: '2026-09-09'
tags:
- catchup
- cloudflare
- ddos
- hn
- infrastructure
- performance
- security
- terraform
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49628614'
comments: https://news.ycombinator.com/item?id=49628614
why_read: This article details the anatomy of a sophisticated DDoS attack against
  Read the Docs, explaining why standard rate limiting failed and what defense strategies
  proved effective. Readers will gain insight into the challenges of such attacks
  and how robust incident response can maintain availability.
authors:
- David Fischer
---

Ever wonder what it takes to weather a sophisticated DDoS attack? Read the Docs just published a detailed post-mortem on a 10-day assault that hit their infrastructure with over 5.5 million requests per minute, 100 times their normal baseline. This was not a simple traffic flood; attackers adapted rapidly and bypassed caching.

Their experience highlights that generic rate limiting is often insufficient. The article delves into the critical role of edge defenses, how attackers exploit system weaknesses beyond cached content, and the evolution of their incident response. It is a masterclass in real-world system resilience.

You will gain actionable insights into designing more robust distributed systems, enhancing your infrastructure's defenses, and developing an effective incident response plan for when the inevitable happens.
