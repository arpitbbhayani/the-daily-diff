---
title: Sampling transforms off-policy data to improve supervised finetuning
source: hn
url: https://arxiv.org/abs/2610.02140
date: '2026-10-02'
tags:
- catastrophic-forgetting
- catchup
- hn
- mcmc-sampling
- off-policy-data
- reinforcement-learning
- supervised-finetuning
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49936786'
comments: https://news.ycombinator.com/item?id=49936786
why_read: Learn how an MCMC sampling algorithm adapts off-policy data to be more on-policy,
  enabling supervised finetuning to rival reinforcement learning while mitigating
  catastrophic forgetting.
authors:
- Aayush Karan
- Sitan Chen
- Yilun Du
---

Conventional wisdom in frontier model post-training suggests that reinforcement learning generalizes far better than supervised fine-tuning while avoiding catastrophic forgetting. However, reinforcement learning depends heavily on sampling successful trajectories on-policy, whereas supervised fine-tuning struggles to effectively absorb off-policy expert data without distribution shift.

New research shows that tailoring data distributions using Markov chain Monte Carlo sampling can bridge this divide. Instead of modifying post-training loss functions, the proposed method progressively transforms off-policy expert demonstrations to better align with the reference model distribution. By steering static datasets toward the learner policy, standard supervised fine-tuning matches or exceeds strong reinforcement learning baselines across mathematical reasoning and scientific skill benchmarks.

Treating sampling as a data transformation primitive rather than relying strictly on reinforcement learning dynamics opens up a cleaner, more stable pathway for domain-specific fine-tuning.
