---
title: Bespoke Nimble improves decision making using contrastive data curation for
  Jev
source: hn
url: https://twitter.com/madiator/status/2100990591215783946
date: '2026-09-18'
tags:
- bespoke-nimble
- catchup
- constrained-decoding
- contrastive-data-curation
- hn
- jev
- lora-finetuning
- negative-data-generation
- open-data
- open-model
- synthetic-data
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49757009'
comments: https://news.ycombinator.com/item?id=49757009
why_read: This post introduces Bespoke Nimble, an open-source model and recipe for
  Jev, detailing a novel contrastive data curation technique that significantly improves
  model discrimination and decision-making capabilities.
authors:
- Mahesh Sathiamoorthy
---

Introducing Bespoke Nimble offers a deep dive into building efficient, open-source LLMs. Their "contrastive data curation" recipe is a game-changer, generating negative data by slightly changing facts to push models toward better discrimination and decision-making.

This approach means training data does not require probabilities and makes models more robust without traditional distillation. When combined with LoRA finetuning on Qwen3.5-9B and parallel constrained decoding, the results are significant: a boost from 66 percent to 90 percent on curated evaluation, with impressive inference speed.

These practical techniques for data curation, training, and serving are immediately applicable for engineers building custom AI agents and models.
