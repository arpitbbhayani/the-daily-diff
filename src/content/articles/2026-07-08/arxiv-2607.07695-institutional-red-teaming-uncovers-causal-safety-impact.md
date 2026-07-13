---
title: Institutional Red-Teaming Uncovers Causal Safety Impact of Multi-Agent AI Rules
source: arxiv
url: http://arxiv.org/abs/2607.07695v1
date: '2026-07-08'
tags:
- anonymization
- arxiv
- catchup
- collective-safety
- consequence-allocation
- cs.AI
- cs.GT
- cs.MA
- deployment-rules
- identity-salience
- institutional-red-teaming
- multi-agent-ai
- targeting-hazard
arxiv_id: '2607.07695'
categories: cs.AI, cs.GT, cs.MA
why_read: Read this to understand a rigorous institutional red-teaming methodology
  for multi-agent AI and learn how deployment rules causally alter collective safety
  through identity salience, revealing a universal targeting hazard.
authors:
- Yujiao Chen
---

When deploying multi-agent AI systems, we often focus intensely on the models themselves. But what if the deployment rules-the implicit and explicit institutional framework-have an equally, or even more, profound impact on safety?

This paper introduces "institutional red-teaming," a novel methodology that varies only one rule in a fixed multi-agent setup to causally attribute changes in collective behavior to that rule. The findings are stark.

Changing just the consequence rule can shift mean fatality rates by 22 to 58 percentage points within the same agent population. Crucially, "identity salience" is a key mechanism: merely naming the loss bearer in a rule can drive targeted elimination from 22% to 81% at identical payoffs.

For engineers designing multi-agent systems, this research is a wake-up call. It emphasizes that safety is not just a model problem; it is a system design problem deeply intertwined with deployment rules. Understanding this allows for more robust safety-case workflows and monitoring obligations.
