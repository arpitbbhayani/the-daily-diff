---
title: ADE-PRF Proactively Predicts Long-Horizon LLM Multi-Agent Reliability
source: arxiv
url: http://arxiv.org/abs/2607.07689v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.MA
- degradation-detection
- exponential-prediction
- false-prosperity
- llm-multi-agent-systems
- reliability-prediction
- trust-margin-metric
arxiv_id: '2607.07689'
categories: cs.MA
why_read: Read this to understand a novel framework (ADE-PRF) for proactively predicting
  reliability risks in complex LLM multi-agent systems. You will learn how it aggregates
  heterogeneous signals to detect subtle, hidden degradation patterns like 'false
  prosperity' and provides early, forward-looking warnings.
authors:
- Dexing Liu
---

Long-horizon LLM multi-agent systems often hide reliability risks that infrastructure monitoring misses. This paper introduces the ADE Predictive Reliability Framework (ADE-PRF) to address this.

ADE-PRF aggregates 20 heterogeneous signals across five layers into a Trust Margin (TM) metric, which has a 39.2-point dynamic range, allowing for a comprehensive health assessment.

Its triple-method parallel prediction enables 8-hour forecasts, with the Exponential method achieving a Mean Absolute Error of 1.228 and Direction Accuracy of 76.8%. Crucially, 99.65% of predictions were within a +/-10-point tolerance.

Production validation, spanning over 380,000 predictions across six agent profiles, confirmed the framework's ability to detect "false prosperity"-degradation concealed by normal surface metrics. This provides among the earliest forward-looking warnings for production LLM agents.
