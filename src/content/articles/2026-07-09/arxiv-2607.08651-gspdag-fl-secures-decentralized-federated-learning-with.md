---
title: gspDAG-FL Secures Decentralized Federated Learning Without Central Servers
source: arxiv
url: http://arxiv.org/abs/2607.08651v1
date: '2026-07-09'
tags:
- arxiv
- byzantine-fault-tolerance
- catchup
- cs.DC
- cs.LG
- decentralized-federated-learning
- directed-acyclic-graph
- gossip-protocol
- language-modeling
- lazy-participants
- mnist-classification
- model-provenance
- security
- virtual-voting
arxiv_id: '2607.08651'
categories: cs.LG, cs.DC
why_read: This paper introduces gspDAG-FL, a novel framework for secure decentralized
  federated learning that resolves provenance and resilience issues without central
  coordination. Readers will learn how it uses gossip history and DAGs for consensus,
  achieving high learning quality and throughput.
authors:
- Amirhossein Taherpour
- Xiaodong Wang
---

Decentralized Federated Learning (DFL) removes the central server, but often lacks provenance finality and resilience to Byzantine attacks. Existing ledger-assisted FL can reintroduce global coordination costs.

gspDAG-FL offers a secure DFL framework that derives consensus directly from the same gossip history used to disseminate models. It uses Hashgraph-style virtual voting and compact full-node certificates to achieve finality over unique model-origin tuples.

This framework combines payload and accepted-proof validation with private semantic audits to improve resilience. Experiments show gspDAG-FL achieves learning quality close to validation-based ledger FL, with reduced coordination bottlenecks and high invalid-origin detection.

Build truly secure and scalable decentralized federated learning systems with gossip and virtual voting.
