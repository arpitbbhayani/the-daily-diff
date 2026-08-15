---
authors:
- Björn Engdahl
- Adrian Kosowski
- Jan Chorowski
- Zuzanna Stamirowska
- Przemysław Uznański
- Junlin Jiang
- Rohan Phadke
- Remigiusz Kinas
- Richard Zhong
comments: https://news.ycombinator.com/item?id=49289516
date: '2026-08-13'
depth_score: 8
hn_id: '49289516'
image: /infographics/21-hn-49289516.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- arc-agi-1
- catchup
- cost-efficiency
- hn
- in-context-learning
- reasoning-model
- recurrent-latent-reasoning
title: BDH-CQ model sets new cost-accuracy frontier for ARC-AGI-1 tasks
url: https://huggingface.co/papers/2608.09888
utility_score: 7
why_read: Learn how the BDH-CQ model combines in-context learning with recurrent latent
  reasoning to achieve a new state of the art in cost efficiency for ARC-AGI-1 tasks.
---

A 150M-parameter model is challenging the notion that bigger is always better for LLM reasoning. BDH-CQ achieves a new cost-accuracy frontier on ARC-AGI-1, coming in 11x cheaper than some alternatives, by leveraging "recurrent latent reasoning."

This model solves queries through iterative computation in a high-dimensional latent space, importantly, *without verbalizing its intermediate reasoning*. This is a clever approach to efficiency and potentially reduces token usage dramatically, as less 'thought process' needs to be generated.

For senior engineers optimizing LLM deployments, this research suggests that architectural innovation, not just scale, can lead to breakthroughs in performance and cost, directly impacting infrastructure choices and operational budgets.