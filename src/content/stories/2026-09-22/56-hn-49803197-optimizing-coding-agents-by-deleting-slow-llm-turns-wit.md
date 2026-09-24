---
authors:
- respectattentio
comments: https://news.ycombinator.com/item?id=49803197
date: '2026-09-22'
depth_score: 8
hn_id: '49803197'
image: /infographics/56-hn-49803197.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- ci-cd-optimization
- coding-agents
- feedback-loops
- hn
- jev
- llm-turns
title: Optimizing coding agents by deleting slow LLM turns with Jev
url: https://tawfeks.github.io/decisionkit/
utility_score: 9
why_read: This text details an experiment to optimize coding agents by deleting LLM
  turns using Jev. Readers will learn about the challenges encountered and the critical
  impact on accuracy, task time, and cost when attempting to reduce LLM inference.
---

Tired of slow, expensive LLM turns in your coding agents? A practical approach shows how using a smart router, like "Jev", can dramatically cut down on inference time and cost, directly addressing one of the biggest bottlenecks in agentic AI. You are not just saving tokens; you are reclaiming engineering cycles.

The core idea involves using a classifier to intelligently route requests and preempt LLM calls when a deterministic, cheaper action suffices. This strategy yielded significant improvements in task time and cost, validated with A/B runs.

This is a prime example of context engineering, where better system design outshines simply relying on larger models. It teaches you how to build faster, more efficient AI agents by critically evaluating and optimizing every step of their execution flow.