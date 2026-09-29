---
title: Regularized search trajectory prevents overfitting in agent harnesses
source: github
url: https://github.com/google-research/rrsi
date: '2026-09-28'
tags:
- agent-harnesses
- catchup
- github
- llm-agents
- overfitting
- recursive-self-improvement
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49881797'
comments: https://news.ycombinator.com/item?id=49881797
why_read: Understand how regularizing recursive self-improvement prevents LLM agent
  harnesses from overfitting to benchmark suites. You will learn mechanistic strategies
  like annealed edit budgets and critic screening that ensure robust out-of-distribution
  generalization.
authors:
- simonpure
image: /infographics/09-github-49881797.jpg
---

An LLM agent is only as good as its harness. The prompts, control flow, tool routing, and memory policies wrap around a frozen model to determine how effectively it solves multi-step tasks. However, when you recursively optimize an agent harness against a fixed benchmark, it quickly overfits and fails on unseen tasks.

Google Research released RRSI (Regularized Recursive Self-Improvement) to address this exact failure mode. Instead of letting the search space overfit task-specific quirks, RRSI regularizes the trajectory of harness mutations. It caps bundled edits via an annealed budget, conditions candidate proposals on historical falsifications, and actively redirects stalled runs toward unexercised components.

On the validation side, RRSI enforces a strict cost rule: any mutation that increases token consumption must prove a measurable gain exceeding benchmark noise floors. A critic model screens candidates before execution to catch benchmark-specific leakage.

This framework provides a disciplined approach for teams building autonomous coding agents and production workflows that need to improve reliably over time.
