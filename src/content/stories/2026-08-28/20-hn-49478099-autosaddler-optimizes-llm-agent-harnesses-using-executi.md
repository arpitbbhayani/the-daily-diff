---
title: AutoSaddler optimizes LLM agent harnesses using execution traces
source: hn
url: https://arxiv.org/abs/2608.23041
date: '2026-08-28'
tags:
- agent-robustness
- catchup
- failure-diagnosis
- harness-optimization
- hn
- llm-agents
- offline-learning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49478099'
comments: https://news.ycombinator.com/item?id=49478099
why_read: This paper introduces AutoSaddler, a framework for automatically optimizing
  harnesses for LLM agents to improve their robustness on long-horizon tasks. Readers
  will understand how it leverages failure trace diagnosis and an offline learning
  approach for iterative updates.
authors:
- Sungho Park
- Wonjoong Kim
- Rongyuan Tan
- Jue Zhang
- Wook-Shin Han
- Pengfei Gao
- Chanyoung Park
- Yongqiang Yao
- Rao Fu
- Elsie Nallipogu
- Qingwei Lin
- Saravan Rajmohan
- Dongmei Zhang
---

LLM agents often struggle with long, complex tasks where small errors can cascade into full system failures. This paper introduces AutoSaddler, a framework that automatically optimizes agent harnesses to significantly boost reliability.

It works by diagnosing failures from execution traces, treating the harness as code, and then generating structured patches to fix identified issues. This iterative approach, combined with validation, helps agents learn from their mistakes in a targeted and efficient manner.

The results are compelling, showing performance gains of 9-10 percentage points on benchmarks like GAIA2 and SWE-Bench Pro. This offers a concrete, data-driven methodology for enhancing agent robustness, moving beyond manual prompt engineering.
