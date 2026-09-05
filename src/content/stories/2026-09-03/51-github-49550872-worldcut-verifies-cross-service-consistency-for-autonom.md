---
authors:
- Jason Doyle
comments: https://news.ycombinator.com/item?id=49550872
date: '2026-09-03'
depth_score: 8
hn_id: '49550872'
image: /infographics/51-github-49550872.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- autonomous-agents
- catchup
- cross-service-consistency
- decision-contracts
- decision-verification
- deterministic-evaluation
- github
- metadata
title: WorldCut verifies cross-service consistency for autonomous agent decisions
url: https://github.com/Jason-Doyle/WorldCut
utility_score: 9
why_read: This tool helps ensure the reliability of autonomous agent decisions by
  deterministically verifying cross-service consistency of observations against defined
  contracts.
---

Ensuring autonomous agents make reliable decisions in distributed environments is a monumental challenge. With multiple independent services providing observations, how do you guarantee an agent's decision is based on a consistent, timely, and correct view of the world?

WorldCut tackles this head-on. It is a library that deterministically verifies cross-service consistency for agent decisions. You define a 'decision contract' and provide versioned observations from your systems. WorldCut then evaluates if these observations satisfy the required version and time relationships, returning clear verdicts like CONTRACT_SATISFIED or CONTRACT_VIOLATED.

This is not about inferring truth; it is about rigorous, auditable verification of declared contracts. For senior engineers building mission-critical agent systems or complex distributed applications, WorldCut provides an essential component for robustness, allowing you to gate decisions on verifiable data integrity.