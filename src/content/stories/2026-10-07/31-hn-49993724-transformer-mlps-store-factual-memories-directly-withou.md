---
title: Transformer MLPs store factual memories directly without gradient descent
source: hn
url: https://hazyresearch.stanford.edu/blog/2026-07-22-mlps-are-hebbians
date: '2026-10-07'
tags:
- catchup
- fact-storage
- hebbian-memory
- hn
- mechanistic-interpretability
- multi-layer-perceptrons
- transformers
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49993724'
comments: https://news.ycombinator.com/item?id=49993724
why_read: This post explains how viewing transformer multi-layer perceptrons as Hebbian
  memories enables closed-form, training-free factual storage at optimal capacity.
  Readers will gain a clear mechanistic mental model for how factual knowledge can
  be directly embedded and edited inside transformers.
authors:
- Roberto Garcia
- Jerry Liu
- Ronny Junkins
- Sabri Eyuboglu
- Atri Rudra
- "Chris R\xE9"
---

Updating factual knowledge in large language models usually requires fine-tuning or full pre-training passes that risk catastrophic forgetting. A team from Stanford Hazy Research demonstrated that multilayer perceptron blocks in Transformers operate directly as Hebbian associative memories, meaning weights can be constructed algebraically rather than learned through gradient descent.

Their closed-form construction packs factual associations into feedforward layers at the information-theoretically optimal rate of Theta(F log F) parameters for F facts. Instead of running iterative optimization steps with backpropagation, engineers can write specific key-value factual associations directly into the weight matrices.

This constructive view turns mechanistic interpretability into practical model editing. When an underlying entity fact changes, updating model behavior becomes an exact, localized linear algebra operation rather than an unpredictable fine-tuning run.

Direct weight editing transforms model retraining from an expensive stochastic search into a deterministic write operation.
