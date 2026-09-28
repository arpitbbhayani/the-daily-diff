---
title: Principles of machine learning systems from hardware to fleet scale
source: hn
url: https://mlsysbook.ai/
date: '2026-09-27'
tags:
- catchup
- distributed-training
- hardware-constraints
- hn
- machine-learning-systems
- performance-modeling
- tinytorch
section: systems
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 7
hn_id: '49871219'
comments: https://news.ycombinator.com/item?id=49871219
why_read: Read this to build a first-principles understanding of how machine learning
  systems are engineered, optimized, and deployed across scale. You will learn to
  navigate hardware trade-offs and build foundational ML infrastructure from scratch.
authors:
- 7777777phil
image: /infographics/01-hn-49871219.jpg
---

Building machine learning systems requires treating compute, memory bandwidth, and networking as strict physical constraints. Understanding whether an inference kernel is memory-bound or compute-bound determines your entire deployment architecture.

Scaling 70B parameter models to thousands of requests per second demands precise hardware selection and parallelism trade-offs. Evaluating arithmetic intensity across batch sizes reveals bottlenecks long before models reach production clusters.

Treating ML infrastructure with first-principles systems engineering is essential for building scalable AI platforms.
