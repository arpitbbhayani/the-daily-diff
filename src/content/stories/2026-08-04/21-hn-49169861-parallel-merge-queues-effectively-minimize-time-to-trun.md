---
title: Parallel merge queues effectively minimize time-to-trunk
source: hn
url: https://inside.basepowercompany.com/p/merge-dont-queue
date: '2026-08-04'
tags:
- ai-agents
- catchup
- ci-gate
- developer-velocity
- hn
- merge-queues
- monorepo
- parallel-merge
- pre-merge-testing
- time-to-trunk
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49169861'
comments: https://news.ycombinator.com/item?id=49169861
why_read: This article explains how to significantly reduce time-to-trunk by implementing
  parallel merge queues and shifting comprehensive testing left into the pre-merge
  CI gate. It is especially valuable for organizations using AI coding agents.
authors:
- Base Power Company
- Valentin Reis
---

Dealing with merge queue bottlenecks in high-velocity engineering? This article offers a compelling strategy: "Merge, Don't Queue," leveraging parallel merge queues to drastically reduce time-to-trunk. They even integrate AI review agents.

The key insight is pushing post-submit tests to pre-merge CI. While most teams run end-to-end suites nightly or post-merge, Base Power moved these critical tests into the pre-merge gate. This ensures that every atomic change is rigorously validated *before* hitting the main branch, virtually eliminating regressions.

This approach, combined with a robust parallel merge queue system, allowed them to handle hundreds of PRs per week, even with AI agents generating significant code volumes. It is a masterclass in optimizing developer velocity through intelligent CI/CD pipeline design and testing strategy.

Learn how to ship faster and safer.
