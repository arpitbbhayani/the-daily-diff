---
title: MOPD integrates diverse capabilities in large language models post-training
source: hn
url: https://mimo.xiaomi.com/paper/mopd
date: '2026-08-27'
tags:
- capability-integration
- catchup
- hn
- llms
- mopd
- on-policy-distillation
- post-training
- reinforcement-learning
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49462695'
comments: https://news.ycombinator.com/item?id=49462695
why_read: This paper introduces Multi-teacher On-Policy Distillation (MOPD), an efficient
  post-training paradigm for integrating diverse capabilities into large language
  models without performance loss. Readers will learn how MOPD outperforms existing
  methods and enables parallel development of specialized domain teachers.
authors:
- Wenhan Ma
- Jianyu Wei
- Liang Zhao
- Hailin Zhang
- Bangjun Xiao
- Lei Li
- Qibin Yang
- Bofei Gao
- Yudong Wang
- Rang Li
- Jinhao Dong
- Zhifang Sui
- Fuli Luo
---

Integrating multiple specific capabilities into a single large language model during post-training has been a persistent headache for engineers. Existing methods often sacrifice efficiency or lead to performance degradation, creating a significant bottleneck for deploying versatile AI.

A recent paper introduces MOPD: Multi-teacher On-Policy Distillation. This innovative paradigm trains per-domain specialized RL teachers and then distills their combined knowledge into a single student model using its own rollouts. This approach not only eliminates exposure bias but also provides a much denser optimization signal, leading to superior performance.

Deployed in an industrial-scale frontier model, MOPD has demonstrated practical value, significantly outperforming baselines like Mix-RL and Cascade RL. This technique promises more capable and efficient LLMs, allowing parallel, independent development of specialized teachers without cross-domain coupling. This is a crucial step towards truly versatile AI agents.
