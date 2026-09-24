---
authors:
- Anurup
comments: https://news.ycombinator.com/item?id=49803321
date: '2026-09-22'
depth_score: 8
hn_id: '49803321'
image: /infographics/16-hn-49803321.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- fixed-model-parameters
- hn
- no-replay-training
- sequential-skill-acquisition
- skill-retention
title: One model retains ten skills taught sequentially
url: https://learnerlabs.ai/demos/skills/ten-skills
utility_score: 8
why_read: This text presents an experimental finding that a large language model can
  sequentially learn and retain ten diverse skills without forgetting previously acquired
  ones. Readers will understand how continuous learning without catastrophic forgetting
  is achievable in certain model architectures.
---

Catastrophic forgetting is one of the biggest roadblocks to building truly adaptable AI agents. Learner Labs just dropped a demo for their 1.14B Learner 1.0 model showcasing remarkable continual learning capabilities.

They taught the model ten *unrelated* skills sequentially, one training example at a time, with no replay. The impressive part? The model retained *every* acquired skill and its base capabilities held constant. This is huge for real-world agent deployments.

Imagine agents that can continuously learn new tasks without needing to be retrained from scratch or losing prior knowledge. This demonstration, hinting at a new architecture, moves us closer to that reality. It is a critical step for practical, evolving AI.