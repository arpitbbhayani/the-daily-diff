---
title: Caching Git Checkouts in CI/CD has Unexpected Complexity
source: hn
url: https://twitter.com/useblacksmith/status/2100590354915291400
date: '2026-09-17'
tags:
- caching
- catchup
- ci-cd
- git-checkout
- hn
- monorepo
- repository-mirror
- shallow-checkout
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49742645'
comments: https://news.ycombinator.com/item?id=49742645
why_read: This article explains the challenges and complexities of caching Git checkouts
  in CI/CD environments. Readers will learn why a seemingly simple caching problem
  can lead to unexpected performance issues, especially with shallow checkouts and
  large monorepos.
authors:
- Blacksmith
---

Caching Git checkouts in CI/CD seems simple, but it is surprisingly hard, especially with large monorepos. This thread from Blacksmith uncovers why most naive caching attempts fail and how to genuinely accelerate your CI pipelines.

The core challenge lies in understanding Git's object model and how shallow checkouts behave. A simple `depth=1` fetch, often assumed to be cheap, can actually be slower with a mirror than without, due to the server having to compute expensive packs. This is a counter-intuitive pitfall many engineers discover the hard way.

The solution involves sophisticated strategies: managing local repository mirrors that persist between jobs, carefully handling `git fetch` with existing objects, and optimizing for the specific quirks of CI runners. Mastering this can shave minutes off every CI job, directly impacting developer productivity at scale.
