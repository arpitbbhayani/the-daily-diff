---
title: Auto-optimizing Jev achieves half the errors at seventh the cost
source: hn
url: https://kiln.tech/blog/auto_optimizing_jev_with_autoresearch
date: '2026-09-22'
tags:
- autoresearch
- catchup
- classifier
- cost-reduction
- error-reduction
- hn
- jev
- optimization
- system-one-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49799118'
comments: https://news.ycombinator.com/item?id=49799118
why_read: This article explains how an autoresearch loop can dramatically improve
  the performance and cost-efficiency of a classifier like Jev. Readers will learn
  about the autoresearch methodology and its practical application.
authors:
- Leonard Marcq
---

Imagine an AI agent that optimizes another AI agent. This article introduces 'autoresearch,' a fascinating loop where a coding agent iteratively refines the 'harness' around a classifier called Jev. The results are astounding: half the errors, 1/7th the cost, and 1/30th the latency compared to traditional reasoning models.

What is truly novel is that this optimization does not involve fine-tuning Jev itself, a model designed to be a "System One" classifier that cannot be fine-tuned. Instead, the autoresearch agent focuses entirely on context engineering – feeding Jev the right information and questions. This highlights the power of intelligent prompting and input structuring.

This is a significant breakthrough for applied AI, demonstrating that substantial performance gains can come from optimizing the interaction *with* a model, rather than just the model's weights. It is a paradigm shift for how we might approach AI system development and agentic workflows.

Any engineer working on AI agents or seeking to dramatically improve model efficiency needs to understand this 'autoresearch' approach.
