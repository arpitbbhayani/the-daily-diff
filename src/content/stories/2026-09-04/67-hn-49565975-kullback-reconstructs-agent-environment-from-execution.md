---
title: Kullback reconstructs agent environment from execution traces
source: hn
url: https://www.leibler.dev/kullback
date: '2026-09-04'
tags:
- agent-behavior
- catchup
- environment-reconstruction
- execution-traces
- hn
- kullback
- leibler
- model-verification
- open-source
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49565975'
comments: https://news.ycombinator.com/item?id=49565975
why_read: This text introduces Kullback, an open-source tool that rebuilds agent environments,
  tools, and rules directly from execution traces. Readers will understand its mechanism
  for verifying agent behavior and its potential in post-training large language models.
authors:
- kkkamur
---

Evaluating and improving AI agents is a huge challenge. Kullback offers a genuinely novel solution: it generates synthetic RL environments directly from your agent's execution traces.

Think about the implications. Your agent already produces logs and traces. Kullback ingests these, reconstructs the tools, data, and rules the agent interacted with, and then lets you replay and test your agent against this high-fidelity, production-derived environment.

This is not just for testing; the project aims to post-train models within these rebuilt environments. Imagine significantly accelerating agent development and improving robustness by validating against real-world interactions without the complexity of live systems. It is context engineering taken to a new level.
