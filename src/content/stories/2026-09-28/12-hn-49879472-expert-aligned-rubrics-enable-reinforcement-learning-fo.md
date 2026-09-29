---
title: Expert-aligned rubrics enable reinforcement learning for superhuman writing
source: hn
url: https://facebookresearch.github.io/RAM/blogs/unslop/
date: '2026-09-28'
tags:
- ai-slop
- catchup
- hn
- language-models
- reinforcement-learning
- reward-models
- rl-xar
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49879472'
comments: https://news.ycombinator.com/item?id=49879472
why_read: This text explains how training models with expert-aligned rubrics overcomes
  the quality ceilings of standard RLHF to eliminate mediocre writing.
authors:
- Meta AI
---

Standard reinforcement learning from human feedback hits a strict quality ceiling because reward models only reflect the taste and expertise of non-expert annotators. When training models on non-verifiable tasks like creative prose or scientific writing, standard objectives inevitably produce bland text patterns known as AI slop.

Meta AI introduced Reinforcement Learning from Expert-Aligned Rubrics (RL-XAR) to bypass this annotator bottleneck. The method first gathers premier human-written references, then trains judge models using rubrics calibrated specifically to rate those expert samples above model outputs. Models then undergo reinforcement learning against these dynamic rubrics, iterating until meta-optimization reveals no discernible quality gap.

On benchmark evaluations across novel continuations and scientific literature, this approach produced marked gains in coherence and stylistic depth over standard training pipelines.

Removing the human annotator ceiling is essential for training LLMs to generate truly expert prose.
