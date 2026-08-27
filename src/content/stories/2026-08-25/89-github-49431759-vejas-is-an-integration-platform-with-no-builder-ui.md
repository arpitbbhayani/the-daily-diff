---
title: Vejas is an integration platform with no builder UI
source: github
url: https://github.com/cpoder/vejas
date: '2026-08-25'
tags:
- agent-driven-flows
- catchup
- github
- integration-platform
- nats
- readable-code
- rust
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49431759'
comments: https://news.ycombinator.com/item?id=49431759
why_read: This describes Vejas, an integration platform that uses agent-written, readable
  code instead of a builder UI. Readers will learn about a novel approach to integration
  managed by AI agents and domain experts.
authors:
- cpoder
---

Vejas introduces a fascinating paradigm shift for integration platforms: no UI builder, just agents writing readable code for your integration flows. This system uses a Rust binary on NATS for execution and ensures human experts define 'what it means' while agents handle 'how'.

Imagine automating your data pipelines and service integrations where the agent generates the boilerplate and logic, then you review human-readable code. This setup directly tackles developer productivity challenges by having agents produce the code that goes into Git.

This is not a theoretical concept; it is in production with real customers. It offers a fresh perspective on how AI agents can fundamentally change enterprise integration and enhance engineering practices.
