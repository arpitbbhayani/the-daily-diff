---
title: Why deterministic lookup tables should decide urgency instead of models
source: hn
url: https://tailstory-app.com/en/blog/model-observes-table-decides
date: '2026-09-24'
tags:
- catchup
- determinism
- hn
- lookup-tables
- pet-triage
- structured-outputs
- vision-models
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49837843'
comments: https://news.ycombinator.com/item?id=49837843
why_read: Learn why separating visual observations from deterministic decision tables
  makes high-stakes AI applications testable, reviewable, and reliable.
authors:
- Mohsentr
---

Using an LLM to make high-stakes triage decisions directly in production is a recipe for non-deterministic failures. Models sound confident even when hallucinating, and prompt behavior cannot be reliably unit tested or audited by domain experts.

A far more resilient pattern is to decouple perception from evaluation. Instead of asking a vision model for an urgency score or diagnosis, constrain it strictly to structured observations (such as closed-enum colors, boolean flags for symptoms, and standardized descriptions). The actual decision logic lives entirely inside a deterministic lookup table.

This separation gives you determinism, immediate reviewability by domain experts, and full unit test coverage for critical business paths. When the model misbehaves or times out, fallback bands remain safely governed by deterministic rules rather than stochastic text generation.

Do not let your LLM decide what actions to take when a deterministic table can do the job reliably.
