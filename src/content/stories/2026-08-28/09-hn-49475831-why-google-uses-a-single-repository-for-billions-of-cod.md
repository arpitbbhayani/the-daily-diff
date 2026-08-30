---
title: Why Google uses a single repository for billions of code lines
source: hn
url: https://dl.acm.org/doi/fullHtml/10.1145/2854146
date: '2026-08-28'
tags:
- catchup
- code-repository
- google
- hn
- monorepo
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49475831'
comments: https://news.ycombinator.com/item?id=49475831
why_read: This explains the architectural rationale and benefits behind Google's decision
  to maintain a single, massive code repository. Readers will gain insight into large-scale
  software development strategies.
authors:
- birdculture
---

The decision of whether to use a monorepo or polyrepos is one of the most fundamental architectural choices for any engineering organization. Google's approach, detailed in this essential 2016 article, offers unparalleled insight into operating at the extreme scale of billions of lines of code within a single repository.

You will discover the deep engineering challenges Google faced with code ownership, dependency management, build systems, and continuous integration. The article details how they custom-built tools like Piper and CitC to enable thousands of engineers to work concurrently and efficiently.

This is not merely a theoretical discussion; it is a practical blueprint for managing complexity and ensuring developer productivity at an unprecedented scale. Understanding these trade-offs is crucial for any senior engineer designing scalable software systems.
