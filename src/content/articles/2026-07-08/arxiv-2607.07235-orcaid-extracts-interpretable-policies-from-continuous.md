---
title: ORCAID Extracts Interpretable Policies from Continuous Action Space RL
source: arxiv
url: http://arxiv.org/abs/2607.07235v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- continuous-action-space
- cs.AI
- cs.LG
- cs.SE
- explainability
- interpretable-policy
- oblique-decision-tree
- orcaid
- reinforcement-learning
- rule-based-policies
arxiv_id: '2607.07235'
categories: cs.LG, cs.AI, cs.SE
why_read: This paper introduces ORCAID, a method for extracting interpretable, rule-based
  policies from reinforcement learning agents with continuous action spaces. It demonstrates
  how these policies can maintain strong performance and even enhance the original
  deep RL policy.
authors:
- Ignacio D. Lopez-Miguel
- Ezio Bartocci
- Thomas Eiter
- Martin Tappler
---

Building reliable AI agents often hits a wall with explainability, especially in complex reinforcement learning environments. Deep RL policies with continuous action spaces can be black boxes, making trust and debugging challenging.
ORCAID offers a new approach: it extracts crisp, rule-based policies from these complex agents, effectively making them interpretable. The method uses an efficient oblique decision tree algorithm to partition state space and fit local linear models.
The results are compelling: ORCAID policies not only maintain strong performance but also reduce the number of parameters significantly. In some cases, they even improve the original deep RL policy's performance.
This is a big step towards more transparent and auditable AI systems, letting engineers understand exactly why an agent makes a particular decision. It moves us closer to deploying truly robust AI solutions in critical systems.
