---
authors:
- Preetam Dwivedi
- Akshay Hacholli
- Adam Bettigole
comments: https://news.ycombinator.com/item?id=49556342
date: '2026-09-03'
depth_score: 8
hn_id: '49556342'
image: /infographics/66-hn-49556342.jpg
interest_score: 8
novelty_score: 8
section: systems
source: hn
tags:
- catchup
- git-as-a-service
- gitfarm
- hn
- monorepo
- scalability
- uber
title: GitFarm provides Git as a Service for Uber's large monorepos
url: https://www.uber.com/us/en/blog/gitfarm-as-a-service/
utility_score: 9
why_read: This explains how Uber built GitFarm to address fundamental Git workflow
  bottlenecks and improve performance for large-scale monorepos. Readers will learn
  about the challenges of traditional Git at scale and the architectural solution
  provided by GitFarm.
---

At Uber's scale, traditional Git workflows choked their multi-gigabyte monorepos, leading to agonizingly slow clone times and immense load on Git servers. They did not just add more caching; they fundamentally rethought how Git is used across thousands of automation systems.

The solution is GitFarm, a "Git as a Service" platform. It acts as a centralized Git client in the cloud, executing standard Git commands via a high-performance gRPC API. Imagine no local clones, access to a full Git checkout in under 500 milliseconds, all backed by pre-warmed repository and container pools.

This dramatically reduced client-side resource utilization by over 80 percent and eliminated 10-15 minute cold-start latencies. GitFarm enforces identity-scoped authorization and uses specialized backend clusters for workload isolation, ensuring both speed and security.

This is a prime example of building a scalable internal platform to turn a massive bottleneck into a streamlined asset. It shows how infrastructure innovation can unlock developer productivity even with established tools like Git.