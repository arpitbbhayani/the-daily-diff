---
title: Converting generative language models into probability scoring decision models
source: hn
url: https://unsloth.ai/docs/basics/train-your-own-decision-model-with-unsloth
date: '2026-10-09'
tags:
- catchup
- clef-head
- decision-models
- hn
- lora
- unsloth
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50024959'
comments: https://news.ycombinator.com/item?id=50024959
why_read: Learn how to fine-tune generative language models into discrete decision
  models that score predefined choices. You will gain a practical workflow for boosting
  classification accuracy using LoRA and Unsloth.
authors:
- armcat
---

Using generative language models for routing and classification in production pipelines is often slow, wasteful, and brittle. Generating freeform text strings just to pick an execution branch adds latency and invites parsing errors that break automated systems.

Unsloth now allows developers to fine-tune compact language models into dedicated decision heads rather than autoregressive text generators. By attaching a classification head and training with low-rank adaptation for a single epoch, sub-billion parameter models achieve remarkable jumps in categorization accuracy. In benchmark evaluations on typed decisions, a lightweight model climbed from thirty-six percent accuracy to seventy-three percent accuracy in just forty-two minutes on four gigabytes of memory.

Instead of paying the inference overhead of autoregressive token sampling, the model directly scores discrete candidates and returns explicit probability distributions. This transforms a slow generative model into a deterministic, ultra-fast routing engine that runs comfortably on commodity hardware.

You do not need massive reasoning models when a specialized decision head can route requests in milliseconds.
