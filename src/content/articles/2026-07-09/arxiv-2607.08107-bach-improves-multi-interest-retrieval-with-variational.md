---
title: BACH Improves Multi-Interest Retrieval with Variational Inference
source: arxiv
url: http://arxiv.org/abs/2607.08107v1
date: '2026-07-09'
tags:
- arxiv
- bach-model
- catchup
- cs.IR
- cs.LG
- embedding
- mixture-models
- multi-interest-models
- routing-collapse
- two-tower-retrieval
- variational-inference
arxiv_id: '2607.08107'
categories: cs.IR, cs.LG
why_read: This text introduces BACH, a novel multi-interest retrieval model that uses
  variational inference to mitigate routing collapse. Readers will learn how BACH
  improves top-of-ranking retrieval by training all heads and providing per-user interest
  weightings.
authors:
- Quoc Phong Nguyen
- Paul Albert
- Long Vuong
- Vuong Le
- Julien Monteil
---

Traditional two-tower retrievers often compress users into a single embedding, failing to capture their diverse interests. Multi-interest models exist, but their hard-routing training often leads to "routing collapse."

BACH (Bayesian Admixture of Contrastive Heads) solves this by casting multi-interest retrieval as a per-user mixture over heads, fit by variational inference. This soft mixture trains every head, mitigating collapse, and provides a per-user weighting of interests.

On MovieLens-20M, Taobao, and Netflix, BACH consistently improved top-of-ranking retrieval over hard-routing multi-interest and single-vector baselines at every head count.

Leverage Bayesian methods to truly understand and serve your users' multi-faceted interests in retrieval systems.
