---
title: Gradient-Guided Attacks Subvert Relational Deep Learning via FK Rewiring
source: arxiv
url: http://arxiv.org/abs/2607.07089v1
date: '2026-07-08'
tags:
- adversarial-robustness
- arxiv
- catchup
- classification-tasks
- cs.DB
- cs.LG
- foreign-key-rewiring
- gradient-based-attacks
- graph-neural-network
- regression-tasks
- relational-database
- relational-deep-learning
arxiv_id: '2607.07089'
categories: cs.LG, cs.DB
why_read: Read this to understand how Relational Deep Learning models can be adversarially
  attacked by rewiring foreign-key references in databases, and to learn about the
  performance differences between gradient-based and random attack heuristics.
authors:
- Alan Gany
- Bogdan Cautis
- Silviu Maniu
---

Relational Deep Learning (RDL) is becoming standard for ML on databases, mapping tuples to nodes and PK-FK to edges. But what if the underlying database itself is subtly attacked?
A new paper shows how attackers can rewire foreign-key references, while strictly preserving database integrity constraints, to significantly degrade GNN predictions. This is not about data poisoning, but structural manipulation.
Gradient-based attacks outperformed random baselines on regression tasks, demonstrating how sensitive these models can be to architectural data changes.
Understanding these vulnerabilities is paramount as we increasingly rely on AI agents interacting directly with critical data stores. Your database schema could become an attack vector.
