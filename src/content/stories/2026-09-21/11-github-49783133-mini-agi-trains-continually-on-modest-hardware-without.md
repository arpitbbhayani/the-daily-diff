---
authors:
- volotat
comments: https://news.ycombinator.com/item?id=49783133
date: '2026-09-21'
depth_score: 8
hn_id: '49783133'
image: /infographics/11-github-49783133.jpg
interest_score: 8
novelty_score: 9
section: ai
source: github
tags:
- 8gb-vram
- byte-level-language-model
- catastrophic-forgetting
- catchup
- continual-learning
- github
- modest-hardware
title: Mini-AGI trains continually on modest hardware without forgetting
url: https://github.com/volotat/mini-AGI/
utility_score: 8
why_read: This text introduces mini-AGI, a continually learning byte-level language
  model that can be trained from scratch on modest hardware (8GB VRAM). Readers will
  learn how such a model avoids catastrophic forgetting and can be run by almost anyone.
---

Training large language models often demands massive GPU resources, but a new project, Mini-AGI, is challenging that assumption. It demonstrates a continual learning, byte-level language model capable of training from scratch on just 8GB of VRAM.

The innovation lies in its dynamic architecture. The model intelligently assembles its own structure, pages weights from disk onto the GPU as needed, and can even grow or prune its capacity on the fly. This means the model's size is effectively bounded by disk space, not just VRAM.

While currently a "toy-level" experiment, Mini-AGI showcases a powerful paradigm shift. It makes continual learning accessible on modest hardware, opening doors for broader experimentation and personalized AI development without prohibitive cloud costs.