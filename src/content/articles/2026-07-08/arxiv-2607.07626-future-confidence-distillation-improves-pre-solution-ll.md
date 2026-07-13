---
title: Future Confidence Distillation Improves Pre-Solution LLM Reliability
source: arxiv
url: http://arxiv.org/abs/2607.07626v1
date: '2026-07-08'
tags:
- arxiv
- calibration
- catchup
- confidence-estimation
- cs.AI
- cs.CL
- future-confidence-distillation
- large-language-models
- post-solution-confidence
- pre-solution-confidence
- temporal-perspective
arxiv_id: '2607.07626'
categories: cs.CL, cs.AI
why_read: This paper reveals how LLM confidence estimates evolve throughout the answering
  process, with post-solution being more reliable. It introduces future confidence
  distillation to achieve significantly more reliable, low-cost pre-solution confidence
  estimation.
authors:
- Sahil Kale
---

Reliable confidence estimation in LLMs is crucial for downstream tasks like retrieval and tool use, yet current methods often wait for a full response. This paper introduces "future confidence distillation" which trains a model to predict confidence *before* the answer is complete. It uses post-solution confidence as a "teacher" for pre-solution hidden representations, achieving calibration improvements similar to post-solution methods but at a much lower inference cost. This dramatically improves the practical deployability of confidence-aware LLM systems.
