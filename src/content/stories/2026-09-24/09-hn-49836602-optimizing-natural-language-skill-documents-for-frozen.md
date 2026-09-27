---
title: Optimizing natural-language skill documents for frozen language agents
source: hn
url: https://microsoft.github.io/SkillOpt/
date: '2026-09-24'
tags:
- agent-skills
- catchup
- frozen-agents
- hn
- prompt-optimization
- self-evolving-agents
- skillopt
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49836602'
comments: https://news.ycombinator.com/item?id=49836602
why_read: Understand how to improve frozen language agent performance by treating
  natural-language skill documents as optimizable external state instead of fine-tuning
  model weights.
authors:
- DaveFr
image: /infographics/09-hn-49836602.jpg
---

Fine-tuning model weights is often unnecessary when trying to improve agent task performance. Instead of altering underlying parameters or manually tweaking prompts, SkillOpt treats natural-language skill instructions as external state that can be systematically learned through execution feedback.

The framework runs a frozen language agent across scored task minibatches. When failures occur, an optimizer model inspects execution trajectories, formulates targeted text modifications, and evaluates candidate edits against held-out validation gates. The agent retains the skill document only when measurable accuracy improves.

This closed-loop procedure isolates behavioral refinement from core weights. Engineers can version, inspect, and reuse these evolved text artifacts across entirely different model backends without incurring heavy training overhead.

Treating agent skills as modular external state makes reasoning architectures both auditable and adaptable.
