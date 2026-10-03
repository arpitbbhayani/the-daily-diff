---
title: A decision model taking ten seconds is not System 1
source: hn
url: https://anth.us/blog/glide-decision-model-ten-seconds/
date: '2026-10-02'
tags:
- benchmarking
- catchup
- decision-models
- hn
- inference-latency
- system-1
- system-2
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49932121'
comments: https://news.ycombinator.com/item?id=49932121
why_read: Understand why thinking decision models with high latency fail to function
  as true System 1 components despite sharing the same API interface.
authors:
- Ryan Porter
---

An agent architecture requires rapid guardrails and triage. When an agent decides whether to approve, escalate, or reject an action, it relies on a decision model to return structured probabilities in milliseconds so the execution loop does not stall.

A benchmark comparing Fastino GLiDE against TypeSafe Jev revealed severe operational trade-offs when substituting reasoning models into fast decision paths. While Jev answered 3,600 reasoning questions with a median latency of 180 milliseconds via single-pass evaluation, GLiDE exhibited long tail latency. Over 240 responses took longer than ten seconds, with outliers exceeding two minutes.

Packaging extended token-generation reasoning behind a fast decision API endpoint creates severe operational bottlenecks. Agent harnesses expecting predictable sub-second gating will suffer cascading timeouts if a System 2 reasoning process masquerades as a low-latency System 1 classifier.

Matching the model architecture to the exact latency requirements of each agent loop stage is vital for building stable production workflows.
