---
title: Code critique reframes AI review around intent and drift
source: hn
url: https://arxiv.org/abs/2607.29516
date: '2026-09-23'
tags:
- ai-coding-agents
- backtranslation
- catchup
- code-review
- code-spotlight
- drift-detection
- hn
- intent-prediction
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49821485'
comments: https://news.ycombinator.com/item?id=49821485
why_read: Read this to learn how to scale review of AI-generated diffs by focusing
  on intent drift and targeted diff spotlighting rather than superficial style checks.
  It offers practical techniques for aligning automated code generation with human
  developer intent.
authors:
- Chandra Maddila
- Mashrur Rashik
- Euna Mehnaz Khan
- Smriti Jha
- James Saindon
- Nachi Nagappan
- Peter C. Rigby
---

As AI coding agents produce pull requests at high volumes, traditional peer review breaks down. Most AI review tools fail because they focus on cosmetic formatting instead of runtime correctness, security, and intent alignment.

A new framework called ARCTIC addresses this problem by introducing three distinct capabilities: intent prediction, drift detection, and diff spotlighting. The system uses conversation metadata to infer developer intent, then runs backtranslation against the generated code to measure semantic drift. In evaluations across 18,000 code reviews, drift detection matched human annotators with a quadratic weighted kappa of 0.907.

Crucially, the code spotlighting mechanism flags only the diff sections carrying high architectural risk. It delivers a 2.4x improvement in quality estimation while consuming five times fewer tokens than standard full-file AI reviewers.

Automating code review for agentic outputs requires measuring intent drift rather than checking stylistic lint rules.
