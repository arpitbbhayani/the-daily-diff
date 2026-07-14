---
title: Secure Aggregation Enhances Federated RL Robustness Against Poisoning
source: arxiv
url: http://arxiv.org/abs/2607.08137v1
date: '2026-07-09'
tags:
- arxiv
- autonomous-vehicles
- catchup
- cs.CR
- cs.DC
- cs.LG
- cs.NI
- digital-twins
- federated-reinforcement-learning
- poisoning-attacks
- secure-aggregation
arxiv_id: '2607.08137'
categories: cs.CR, cs.DC, cs.LG, cs.NI
why_read: This text introduces a novel defensive framework for federated reinforcement
  learning systems, demonstrating how secure aggregation and digital twins can mitigate
  poisoning attacks in safety-critical autonomous driving scenarios. Readers will
  learn about a new approach to enhance system robustness and reliability in multi-agent
  environments.
authors:
- Zifan Zhang
- Minghong Fang
- Dianwei Chen
- Zhuqing Liu
- Prashant Khanduri
- Xianfeng Yang
- Anupam Das
- Yuchen Liu
---

Federated Reinforcement Learning is powerful for autonomous driving, enabling collaborative learning across agents. But it is dangerously vulnerable to poisoning attacks.

These attacks can compromise global control models, leading to potential hazards. This paper introduces \alg (Secure Aggregation with Poisoning-Prevention and Historical Reinforcement) to counter this.

\alg integrates digital twins for rehearsal-based learning and leverages historical model parameters to ensure only benign data is aggregated. It provides theoretical convergence guarantees even with poisoning attacks.

Secure collaborative learning is paramount for safety-critical autonomous systems.
