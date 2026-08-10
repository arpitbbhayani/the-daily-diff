---
title: YC's QM struggles with identity as an agent hosting platform
source: hn
url: https://ferran.sh/writing/qm-review
date: '2026-08-08'
tags:
- agent-management
- catchup
- hn
- multi-agent-harness
- product-identity
- yc-qm
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49227031'
comments: https://news.ycombinator.com/item?id=49227031
why_read: This article explains YC's QM tool, detailing its purpose as an agentic
  harness and host, and critically analyzes its shortcomings in product identity and
  communication. Readers will learn about the challenges of scaling agentic systems
  and the importance of clear product messaging.
authors:
- Ferran Sulaiman
---

Building scalable multi-agent systems is hard, and YC's internal harness, QM, offers a fascinating case study in both triumphs and missteps. It was designed to manage numerous OpenClaw-like agents efficiently, moving beyond the cost and complexity of individual instances.

The architecture includes crucial primitives like shared context, robust sandboxing, a cron system, and tool connectors for Slack, GitHub, and Notion. However, the author points out that despite these features, the initial launch suffered from a perception problem, with many confusing its role as an agent host with a mere meeting place.

A key takeaway for any engineer building AI infrastructure is the critical balance between powerful primitives and clear communication of the system's core purpose. Understanding how YC tackled agent management, isolation, and integration can directly inform your own applied AI projects.
