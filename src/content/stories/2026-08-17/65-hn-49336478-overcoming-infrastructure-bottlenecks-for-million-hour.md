---
authors:
- Dyna Robotics
comments: https://news.ycombinator.com/item?id=49336478
date: '2026-08-17'
depth_score: 8
hn_id: '49336478'
image: /infographics/65-hn-49336478.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- bottleneck-optimization
- catchup
- data-infrastructure
- dyna-2
- episode-storage
- hn
- large-scale-training
- robotics-foundation-model
title: Overcoming infrastructure bottlenecks for million-hour robotics model training
url: https://www.dyna.co/research/dyna-2-infrastructure
utility_score: 8
why_read: This text details the unique challenges and solutions for training a robotics
  foundation model at an unprecedented million-hour scale. Readers will learn how
  to identify and overcome data and training infrastructure bottlenecks that arise
  with massive datasets, moving beyond typical focus on models alone.
---

Training state-of-the-art AI models often hits a wall not because of compute, but because of data infrastructure. Dyna's journey to train their Dyna-2 robotics model on over one million hours of egocentric video highlights this perfectly.

They explicitly pivoted their focus from models to infrastructure, tackling bottlenecks in storage formats, ingestion pipelines, and training manifests. More compute was not the fix; optimized data handling was. For instance, they achieved 68 percent smaller episode storage and 2.9x faster sample reads through tuned compression.

This article is a goldmine for engineers scaling any large-scale ML system. It teaches you how to identify and solve the real bottlenecks when dealing with data at unprecedented scales, offering concrete examples of infrastructure engineering in action.