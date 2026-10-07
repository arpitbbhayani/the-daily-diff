---
title: Base models reason effectively when prompted with starting token cues
source: news
url: https://arxiv.org/abs/2610.06851
date: '2026-10-06'
tags:
- base-models
- catchup
- news
- reasoning
- reinforcement-learning
- token-cues
- training-data
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49977262'
comments: https://news.ycombinator.com/item?id=49977262
why_read: Read this paper to understand the mechanistic link between prefix tokens
  and reasoning behaviors in base models. You will learn how specific cues in training
  data trigger latent reasoning without reinforcement learning.
authors:
- Sophie L. Wang
- Amil Dravid
- Rulin Shao
- Kevin Farhat
- Sewon Min
- Alexei A. Efros
---

Reinforcement learning may not be teaching models how to reason from scratch. New research shows that base language models already contain latent reasoning capabilities that can be unlocked simply by prepending specific token cues to their generations.

Fixing initial token cues like punctuation and conversational fillers raises accuracy dramatically. For example, adding a simple prefix increased pass rates on MATH-500 from 42 percent to 78 percent on a base model, matching the gains usually attributed to expensive reinforcement learning post-training pipelines.

Causal data interventions show that these cues activate hidden state representations tied directly to structured reasoning documents in the pre-training corpus. When the right token triggers that distribution, the model naturally produces step-by-step logic instead of shallow answers.

Prompt prefixes can extract complex reasoning without the compute cost of reinforcement learning.
