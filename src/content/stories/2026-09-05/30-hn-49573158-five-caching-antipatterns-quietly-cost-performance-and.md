---
title: Five caching antipatterns quietly cost performance and money
source: hn
url: https://vercel.com/kb/guide/caching-antipatterns
date: '2026-09-05'
tags:
- cache-keys
- caching-antipatterns
- catchup
- deploy-schedule-caching
- hn
- spinner-shells
- write-amplification
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49573158'
comments: https://news.ycombinator.com/item?id=49573158
why_read: This article identifies five critical caching antipatterns that degrade
  web performance and increase costs. Readers will learn how to diagnose and avoid
  common caching mistakes to improve efficiency and user experience.
authors:
- Forward Deployed Engineering Team
---

Many teams believe they have robust caching, but Vercel's audits reveal common antipatterns that quietly tank performance and inflate costs. Do not assume your cache is working as intended; verify its behavior with deep diagnostics.

One insidious issue is write amplification: if your Incremental Static Regeneration (ISR) writes outnumber reads for content routes, you are paying to regenerate pages nobody views. Another common trap involves deployment schedules acting as implicit cache policies, wiping runtime-generated entries and capping hit ratios with every fresh deploy.

You must examine cached HTML to ensure primary content, not just a spinner, is being served. Inputs to cache keys should only be those that alter the rendered document. These are critical details that separate efficient, scalable systems from costly bottlenecks.
