---
title: Adversarial World Modeling Solves Robust Planner Learning as a Min-Max Game
source: arxiv
url: http://arxiv.org/abs/2607.10630v1
date: '2026-07-12'
tags:
- adversarial-training
- adversarial-world-modeling
- arxiv
- catchup
- cs.AI
- cs.RO
- min-max-game
- motion-planning
- multi-agent-self-play
arxiv_id: '2607.10630'
categories: cs.RO, cs.AI
why_read: This text introduces Adversarial World Modeling (AWM), a framework that
  uses multi-agent self-play and a min-max game formulation to make autonomous vehicle
  motion planners robust. You will learn how AWM generates transferable adversarial
  interactions to improve performance in safety-critical, long-tail scenarios.
authors:
- Tong Nie
- Yuewen Mei
- Junlin He
- Yihong Tang
- Jian Sun
- Wei Ma
---

Autonomous vehicle motion planning in dense, unpredictable traffic is incredibly challenging. What if your own world model could train itself to be more robust by fighting against an adversarial version of itself?

This paper introduces Adversarial World Modeling (AWM), a multi-agent self-play framework. It casts robust planner learning as a min-max game, where the planner's predictive world model is converted into a role-conditioned adversary.

The adversary learns to generate sparse, scene-adaptive attack coalitions, pushing the ego planner to optimize a regret-aware robust response. This goes beyond external scenario generators or heuristic perturbations.

AWM yields a robust planner with competitive closed-loop performance in both nominal and highly interactive long-tail scenarios. This is a significant step towards safer and more reliable self-driving systems.

Self-play training is proving to be a powerful paradigm for complex AI tasks.
