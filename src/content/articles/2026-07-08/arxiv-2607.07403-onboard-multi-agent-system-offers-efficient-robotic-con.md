---
title: Onboard Multi-Agent System Offers Efficient Robotic Control
source: arxiv
url: http://arxiv.org/abs/2607.07403v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.MA
- cs.RO
- edge-computing
- hardware-in-the-loop
- long-horizon-planning
- multi-agent-system
- onboard-ai
- orchestration-agent
- robotic-control
- vision-language-models
arxiv_id: '2607.07403'
categories: cs.MA, cs.RO
why_read: This paper presents a novel multi-agent system architecture for onboard
  robotic control, demonstrating a cost-efficient, cloud-independent alternative to
  traditional VLM deployments. It details how specialized agents and an orchestration
  agent mitigate common challenges like context retention and external compute dependence.
authors:
- "Kajetan Rachwa\u0142"
- Maciej Majek
- "Bart\u0142omiej Boczek"
- Jakub Matejczyk
- Dominik Matejkowski
- "Adam D\u0105browski"
- Tim Seyde
- Alexander Amini
- Maria Ganzha
---

Robotic control with Vision Language Models usually means hefty cloud compute, but this paper showcases a multi-agent system (MAS) architecture that runs entirely onboard.

It deploys specialized agents and compact VLMs (3-20B parameters) directly on edge hardware, eliminating cloud dependency and addressing critical challenges in explainability, generalization, and compute.

A novel 'Megamind' orchestration agent also mitigates context retention issues, a common hurdle with smaller models in long-horizon planning.

Validated in a hardware-in-the-loop simulation, this approach performs five distinct task categories in an industrial warehouse. This demonstrates a viable, cost-efficient alternative for real-world robotic applications that demand low latency and high reliability.
