---
authors:
- RoboKrunch
comments: https://news.ycombinator.com/item?id=49776827
date: '2026-09-20'
depth_score: 8
hn_id: '49776827'
image: /infographics/44-github-49776827.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- benchmarking
- catchup
- edge-computing
- github
- incident-triage
- jev
- physical-ai
- robotics
title: Benchmarking Jev for Physical AI on Robots and Edge Hardware
url: https://github.com/robokrunch/jev-physical-ai
utility_score: 9
why_read: This document provides real-world measured numbers for applying TypeSafe's
  Jev 'System One' model to physical AI applications, including robot fleets and edge
  hardware. Readers will learn about Jev's performance, cost, and latency in scenarios
  like warehouse incident triage.
---

Running AI decision models on the edge? This project provides real, hard numbers for TypeSafe's Jev, a "System One" AI model, applied to warehouse robot fleets. It is not about text generation but fast, typed probabilistic decisions.

The project benchmarks Jev as a decision layer for 10,000-robot fleet triage, achieving results at $24.57 per million inferences. This is a crucial comparison against larger LLMs, especially for latency-sensitive, resource-constrained edge hardware.

You will see the concrete build-versus-buy math for deploying AI models on CPUs, with execution times often between 70-500ms. This kind of empirical data helps to move beyond theoretical discussions to actionable, cost-effective system design.

It demonstrates a compelling alternative for applications requiring structured outputs and high performance at the inference layer. This project provides invaluable insights for anyone building real-time, applied AI systems.