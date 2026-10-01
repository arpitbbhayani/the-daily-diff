---
title: Pretraining language models on volunteer hardware using GitHub Actions
source: github
url: https://github.com/commonsense-ai/coop
date: '2026-09-30'
tags:
- catchup
- diloco
- distributed-training
- github
- github-actions
- pseudo-gradients
- volunteer-computing
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49913428'
comments: https://news.ycombinator.com/item?id=49913428
why_read: Learn how to coordinate distributed language model pretraining without centralized
  servers using asynchronous pseudo-gradient updates. This project offers a concrete
  blueprint for running DiLoCo aggregation over volunteer hardware and free developer
  tiers.
authors:
- simonpure
---

Distributed pretraining usually demands tightly coupled GPU clusters with expensive InfiniBand interconnects. The Coop project takes the opposite approach by orchestrating distributed training over commodity consumer hardware with zero dedicated server infrastructure.

Using the DiLoCo (Distributed Low-Communication) optimization algorithm, volunteer workers execute local training steps on machines ranging from Apple Silicon to standard CPUs. Workers commit their computed pseudo-gradients as Pull Requests against Hugging Face repositories. A stateless GitHub Actions cron job then aggregates these gradient updates periodically, applying staleness weighting to resolve race conditions.

The framework successfully completed a 15M parameter proof of concept and is currently pretraining a 145M parameter model from scratch on FineWeb-Edu entirely on donated compute.

Asynchronous federated training can work surprisingly well when the communication schedule is decoupled from every gradient step.
