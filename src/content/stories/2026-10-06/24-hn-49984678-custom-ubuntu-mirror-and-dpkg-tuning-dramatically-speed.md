---
title: Custom Ubuntu mirror and dpkg tuning dramatically speed package installation
source: hn
url: https://depot.dev/blog/faster-ubuntu-package-installs
date: '2026-10-06'
tags:
- apt
- build-performance
- catchup
- dpkg
- hn
- package-management
- ubuntu-mirror
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49984678'
comments: https://news.ycombinator.com/item?id=49984678
why_read: Learn how Depot diagnosed official mirror slowdowns and tuned apt and dpkg
  to reduce median package installation times from nineteen seconds down to three.
authors:
- Chris Goller
---

Package manager overhead in continuous integration environments can quietly consume a substantial portion of total build time. Standard apt operations often account for almost 10 percent of job runtime when relying on public Ubuntu upstream mirrors, which are prone to network throttling and variable latency.

Depot reduced their median package installation times from 19 seconds down to just 3 seconds across their container fleet. The team executed this in two distinct steps: first by deploying dedicated, geographically distributed Ubuntu mirror caches, and second by optimizing dpkg execution settings directly inside the build environments.

Eliminating remote network latency brought baseline consistency, but fine-tuning filesystem sync behavior and local package unpacking unlocked the remaining performance gains. For organizations running tens of thousands of container builds daily, shaving 16 seconds from each pipeline run yields significant compute savings.

Profiling the exact bottlenecks inside foundational build tools often reveals massive latency improvements hiding in plain sight.
