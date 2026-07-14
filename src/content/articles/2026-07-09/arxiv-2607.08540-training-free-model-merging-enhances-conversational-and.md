---
title: Training-Free Model Merging Enhances Conversational and Ad-Hoc Retrieval
source: arxiv
url: http://arxiv.org/abs/2607.08540v1
date: '2026-07-09'
tags:
- ad-hoc-retrieval
- arxiv
- catastrophic-forgetting
- catchup
- conversational-information-retrieval
- cs.CL
- cs.IR
- model-merging
- model-soup
- slerp
- zero-shot
arxiv_id: '2607.08540'
categories: cs.IR, cs.CL
why_read: This paper introduces model merging as a training-free strategy to overcome
  catastrophic forgetting in conversational information retrieval. You will learn
  how it enables a single model to perform well across both ad-hoc and conversational
  search tasks.
authors:
- Ahmed Rayane Kebir
- Jose G. Moreno
- Lynda Tamine
---

Conversational information retrieval often requires costly fine-tuning that can lead to catastrophic forgetting, degrading foundational ad-hoc retrieval performance. There is a better way.

This paper introduces *model merging* as a training-free strategy. It allows a single retrieval model to operate effectively across both ad-hoc and conversational settings without additional fine-tuning.

By using linear and non-linear parameter-wise merging strategies like Model Soup and Slerp, the method significantly enhances ad-hoc search capabilities of conversational retrievers.

Achieve high generalizability and prevent catastrophic forgetting in your LLM-powered retrieval systems, all without retraining.
