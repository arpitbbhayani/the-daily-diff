---
title: Loop's three-year journey scaling Temporal for complex logistics
source: hn
url: https://www.loop.com/engineering-blog/temporal-at-loop---evolution-and-scaling
date: '2026-08-27'
tags:
- catchup
- hn
- logistics-platform
- orchestration
- scaling
- stateful-workflows
- temporal
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49469122'
comments: https://news.ycombinator.com/item?id=49469122
why_read: This article offers an engineering deep-dive into how Loop successfully
  evolved and scaled its Temporal usage over three years, addressing complex stateful
  business logic in a logistics data platform. Readers will learn practical insights
  into solving orchestration challenges with Temporal.
authors:
- Oxford Wang
---

Scaling distributed workflows is a monumental task, but Loop's journey with Temporal offers critical insights. They evolved from basic async file imports to a sprawling 34-queue, 400+ workflow platform, handling everything from payment processing to real-time freight audits and even AI agent orchestration.

Their deep dive reveals the practical challenges of managing intricate, stateful business logic across external APIs, databases, and S3. You will learn how they tackled failure modes, retries, and visibility across operations spanning minutes to hours, moving beyond reactive event consumers to robust orchestration.

This is not just about a tool; it is about architectural evolution, demonstrating how a resilient workflow engine can underpin core business functions and power the next generation of AI-driven processes.
