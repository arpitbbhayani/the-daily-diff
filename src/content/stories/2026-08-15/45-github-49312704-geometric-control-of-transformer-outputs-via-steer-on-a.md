---
title: Geometric Control of Transformer Outputs via Steer on a Sphere
source: github
url: https://github.com/ntrillard/transformer-geometry
date: '2026-08-15'
tags:
- catchup
- geometric-control
- github
- rmsnorm
- token-biasing
- transformer-geometry
- transformer-outputs
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49312704'
comments: https://news.ycombinator.com/item?id=49312704
why_read: This text explains how transformer layers' geometric properties, specifically
  hidden states constrained on a sphere by RMSNorm, allow for direct control over
  transformer outputs. Readers will learn how to bias generation towards specific
  tokens without training or data, and understand the mechanism behind this geometric
  steering.
authors:
- N. Trillard
---

You can directly control Transformer outputs without any retraining or fine-tuning. This project unveils "Steer on a Sphere," a technique that leverages the geometric properties of Transformer hidden states.

The core idea is that RMSNorm constrains hidden states near a sphere. The LM head maps tokens to directions on this sphere. By taking a single tangent step on this sphere, you can bias the model's output towards any token direction, achieving 91-98% rank 1 for the target token.

This capability is extremely powerful for applied AI. Imagine mitigating "cow tipping" (self-reinforcing tokens) or dynamically steering an agent's responses based on runtime context. It offers a low-cost, high-impact way to influence LLM behavior.
