---
title: CAGI Co-optimizes Clustering and Imputation to Address Data Heterogeneity
source: arxiv
url: http://arxiv.org/abs/2607.06930v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cluster-aware-generative-imputation
- co-optimization
- cs.AI
- cs.LG
- data-imputation
- generative-adversarial-network
- iterative-feedback-loop
- missing-data
- population-heterogeneity
- subgroup-identification
arxiv_id: '2607.06930'
categories: cs.LG, cs.AI
why_read: This paper introduces CAGI, a novel framework for imputing missing data
  in heterogeneous datasets. It explains how co-optimizing clustering and imputation
  can resolve the circular dependency problem.
authors:
- Chuyao Zhang
- E Li
- Taochen Chen
- Yiqun Zhang
- Yuzhu Ji
- Shuping Zhao
- Peng Liu
- Yiu-ming Cheung
---

Missing data is a constant headache in real-world applications. Most imputation methods struggle when datasets have hidden subgroups with distinct distributions, often producing generic estimates that blur valuable details. CAGI (Cluster-Aware Generative Imputation) offers an ingenious solution. It tackles imputation and clustering as a single, mutually reinforcing process. By using dynamic cluster assignments as local priors for a Generative Adversarial Network, CAGI preserves subgroup boundaries and enhances instance-level fidelity. This iterative refinement approach significantly improves data quality for downstream analysis, a game-changer for data engineers and AI practitioners.
