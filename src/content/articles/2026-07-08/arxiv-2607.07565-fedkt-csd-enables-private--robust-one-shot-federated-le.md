---
title: FedKT-CSD enables private, robust one-shot federated learning using autoencoders
source: arxiv
url: http://arxiv.org/abs/2607.07565v1
date: '2026-07-08'
tags:
- arxiv
- autoencoders
- catchup
- cs.AI
- cs.LG
- data-heterogeneity
- differential-privacy
- federated-learning
- one-shot-federated-learning
- secure-aggregation
arxiv_id: '2607.07565'
categories: cs.LG, cs.AI
why_read: This paper presents FedKT-CSD, a framework that uniquely achieves strong
  privacy guarantees and robustness to data heterogeneity in one-shot federated learning.
  You will learn how pretrained autoencoders and secure aggregation can enable efficient,
  private knowledge transfer to construct synthetic datasets.
authors:
- Maximilian Andreas Hoefler
- Karsten Mueller
- Wojciech Samek
---

Federated learning often struggles with communication overhead and maintaining model quality when client data is diverse. This new framework, FedKT-CSD, tackles both by generating collaborative synthetic data. Clients send only latent statistics, aggregated securely on the server with differential privacy, which then creates a synthetic dataset for global model training. This means low communication, strong privacy guarantees, and robust performance even with heterogeneous data. It is a smart approach for building scalable and privacy-conscious distributed AI systems.
