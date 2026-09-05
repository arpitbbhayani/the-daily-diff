---
authors:
- TylerJewell
comments: https://news.ycombinator.com/item?id=49548871
date: '2026-09-03'
depth_score: 7
hn_id: '49548871'
image: /infographics/25-hn-49548871.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-rewrites
- akka-sdk
- catchup
- delivery-harness
- frontier-models
- hn
- open-source-software
- rag-systems
- system-resilience
title: AI can completely rewrite systems with significant performance and accuracy
  gains
url: https://akka.io/blog/we-ported-65-oss-projects
utility_score: 8
why_read: This text demonstrates the feasibility and significant benefits of using
  AI for complete, unattended rewrites of existing software systems. Readers will
  learn how structured delivery toolkits and opinionated SDKs enable dramatic improvements
  in code metrics, performance, and development timelines.
---

The promise of AI writing entire systems from scratch is often discussed, but Akka has delivered concrete results: they successfully ported 65 open-source projects using an AI-driven toolkit, Akka Specify, achieving unattended rewrites that pass original tests.

Crucially, they found that lower-effort models were often more efficient than high-effort models for these rewrites, and the delivery harness's structure had a greater impact on consistency than raw model capability. This suggests that good prompt engineering and framework design might be more important than just throwing the largest model at the problem.

They even saw performance and line-of-code improvements in 57 out of 65 ports. This demonstrates a practical, scalable approach to using AI for massive code migration and refactoring, pushing the boundaries of what AI can do in software development.