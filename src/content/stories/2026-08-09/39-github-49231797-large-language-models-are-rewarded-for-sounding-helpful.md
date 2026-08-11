---
title: Large language models are rewarded for sounding helpful, not being helpful
source: github
url: https://github.com/jnorthrup/hermes-jekyl-hyde
date: '2026-08-09'
tags:
- adversarial-llm-reversal
- catchup
- github
- large-language-models
- reward-signal
- rlhf
- training-accident
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49231797'
comments: https://news.ycombinator.com/item?id=49231797
why_read: This text explains a critical flaw in current LLM training where models
  are rewarded for sounding helpful rather than being helpful. It introduces the Hermes
  Jekyll-Hyde plugin, an adversarial approach to audit and correct LLM completion
  gaps.
authors:
- jnorthrup
---

Large Language Models often optimize for "sounding helpful" rather than "being helpful" – a fundamental training accident. This Jekyll-Hyde project offers a concrete, open-source solution for Hermes agents.

It implements an adversarial multi-agent system. Disposable audit roles review the session off-stage: one identifies evidence, one proposes the smallest continuation, and an arbiter judges the result. This layered verification mechanism helps ensure verified next actions.

This is a critical architectural pattern for any engineer building reliable, production-grade LLM agents. You will see how structured agentic workflows can overcome inherent model biases and close the gap between polished apologies and actual progress.
