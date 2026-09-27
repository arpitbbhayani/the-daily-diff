---
title: The Great CI Bottleneck of 2026 is a software problem
source: hn
url: https://dagger.io/blog/the-great-ci-bottleneck-of-2026/
date: '2026-09-25'
tags:
- catchup
- ci-bottleneck
- coding-agents
- hn
- scaling-problems
- software-architecture
- waste-reduction
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49846945'
comments: https://news.ycombinator.com/item?id=49846945
why_read: This post explains why the 'Great CI Bottleneck of 2026' is fundamentally
  a software problem, not an infrastructure problem, and proposes a new software stack
  as the solution.
authors:
- levlaz
---

The "Great CI Bottleneck of 2026" is here, and it is not just about needing faster machines. Coding agents are generating so much output that traditional CI pipelines are imploding, revealing a deep software problem, not just an infrastructure one.

Current CI boils down to "run shell scripts on VMs," which becomes catastrophically expensive and inefficient at the scale of agent-generated code. Throwing money and bigger VMs at it is a temporary fix at best.

The real solution lies in a new software stack for CI that enables smarter, less wasteful workloads. This is a call to fundamentally rethink CI system design, moving beyond decades of band-aids to build truly scalable and efficient pipelines for the age of AI.

This perspective is crucial for any senior engineer grappling with developer productivity and the impact of AI on their engineering workflows.
