---
title: MiniLM embedding improves out-of-scope intent detection via boundary learning
source: arxiv
url: http://arxiv.org/abs/2607.07974v1
date: '2026-07-08'
tags:
- arxiv
- boundary-learning
- catchup
- cs.AI
- cs.CL
- intent-detection
- mini-lm-embedding
- one-class-classification
- out-of-scope-intents
arxiv_id: '2607.07974'
categories: cs.CL, cs.AI
why_read: This paper introduces a multi-cluster boundary learning method using MiniLM
  embeddings for out-of-scope intent detection, offering a more efficient and accurate
  alternative to traditional or large LLM-based approaches. Readers will learn about
  a state-of-the-art technique that addresses challenges in human-machine interaction
  systems.
authors:
- Yihong Xu
- Mingyu Kang
- "Linyuan L\xFC"
---

Detecting out-of-scope (OOS) intents is a persistent challenge in building robust human-machine interaction systems. Traditional multi-class classification methods often struggle as the number of known intents grows.

This paper proposes an elegant solution: a multi-cluster boundary learning method using MiniLM embeddings. By framing OOS detection as a one-class classification problem, it avoids the scaling issues of increasing known intent classes.

The method learns boundaries of multi-cluster embeddings from training utterances, then rejects out-of-domain utterances as OOS. This lightweight approach, leveraging MiniLM, is significantly easier to train and deploy compared to larger LLM embedding methods.

Evaluations on CLINC150, StackOverflow, and Banking77 datasets show state-of-the-art OOS intent detection performance. For engineers building conversational AI or agentic systems, this means more reliable and user-friendly interactions.

Build smarter, more robust intent detection into your AI applications.
