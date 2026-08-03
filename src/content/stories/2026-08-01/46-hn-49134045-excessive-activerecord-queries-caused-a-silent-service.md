---
authors:
- Vlad Radulescu
comments: https://news.ycombinator.com/item?id=49134045
date: '2026-08-01'
depth_score: 8
hn_id: '49134045'
image: /infographics/46-hn-49134045.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- active-record
- catchup
- debugging
- health-checks
- hn
- outage
- puma
- system-failures
title: Excessive ActiveRecord Queries Caused a Silent Service Outage
url: https://vladthe.dev/blog/86-359-queries-in-one-request-an-outage-where-every-dashboard-was-green
utility_score: 8
why_read: This article dissects a real-world outage where monitoring dashboards remained
  green despite a core service failing. Readers will learn about the nuanced challenges
  of diagnosing hidden system failures caused by excessive database queries and occupied
  threads.
---

A production outage where every dashboard was green? It sounds impossible, but this engineer details a real-world incident where an application suffered catastrophic failure while all standard metrics indicated health. The culprit was tens of thousands of cached ActiveRecord queries.

The issue was not a typical N+1 query. Instead, it was N+1 queries being triggered inside a Ruby process that was already hitting a cache. This meant the database was not overloaded, but the application threads were silently exhausted, causing the health check to time out only at the process level, leading to restarts.

This detailed post-mortem walks through four plausible but ultimately incorrect diagnoses before zeroing in on the true cause using specific commands and stack traces. It is a masterclass in debugging production systems and challenges assumptions about what "green" dashboards truly mean.

Learn how to debug the invisible failures lurking within your own application code.