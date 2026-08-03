---
authors:
- handfuloflight
comments: https://news.ycombinator.com/item?id=49138084
date: '2026-08-01'
depth_score: 8
hn_id: '49138084'
image: /infographics/38-github-49138084.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: github
tags:
- build-stability
- catchup
- continuous-integration
- github
- merge-queue
- monorepo
- speculative-merging
title: SubmitQueue is a high-performance speculative merge queue for monorepos
url: https://github.com/uber/submitqueue/
utility_score: 9
why_read: Read this to understand how Uber's SubmitQueue addresses challenges in maintaining
  a stable trunk for large monorepos. It explains a high-performance speculative merge
  queue approach that automates change validation and minimizes human intervention.
---

Uber has open-sourced SubmitQueue, a high-performance speculative merge queue that fundamentally changes how large teams manage their trunk branch. It keeps your main branch consistently green, even with thousands of daily commits.

Instead of validating changes one-by-one, SubmitQueue speculatively rebases and validates multiple changes in parallel against predicted future states of HEAD. When validations pass, changes land automatically. This is a game-changer for merge velocity.

If validations fail, SubmitQueue intelligently isolates the offending change and retries the rest without human intervention. This prevents a single problematic commit from blocking the entire merge queue, a common bottleneck in monorepos.

This is a robust solution for maintaining trunk stability and accelerating development in fast-paced environments.