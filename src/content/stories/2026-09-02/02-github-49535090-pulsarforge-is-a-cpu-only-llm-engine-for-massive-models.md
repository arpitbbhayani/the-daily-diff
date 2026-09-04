---
title: PulsarForge is a CPU-only LLM engine for massive models on old laptops
source: github
url: https://github.com/siris9476/pulsarforge
date: '2026-09-02'
tags:
- bit-exactness
- c11
- catchup
- cpu-only
- cross-platform-compatibility
- engineering-retrospective
- github
- llm-inference-engine
- low-resource-hardware
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49535090'
comments: https://news.ycombinator.com/item?id=49535090
why_read: Read this to understand how a CPU-only LLM inference engine can run massive
  models on older hardware. It offers practical insights into optimizing performance,
  achieving cross-platform bit-exactness, and comprehensive engineering validation.
authors:
- siris9476
---

Running a 744-billion-parameter Mixture-of-Experts (MoE) model on a 2018 laptop with only 32GB of RAM and zero GPU sounds impossible, yet PulsarForge achieves it. This pure C, from-scratch LLM inference engine demonstrates unparalleled memory efficiency and optimization.

The project highlights groundbreaking techniques in LLM infrastructure, achieving cross-platform bit-exactness on Windows and Linux, and includes a transparent engineering retrospective detailing successes and failures. It pushes the boundaries of what is possible with CPU-only inference, fundamentally changing assumptions about hardware requirements for massive models.

This is not just an academic exercise; it offers crucial insights and potential blueprints for deploying large language models in extremely resource-constrained environments, from edge devices to cost-sensitive cloud deployments. It is a masterclass in extreme software optimization.
