---
title: Discrete-Token Adaptation of Frozen MLLMs Enables Efficient Robot Navigation
source: arxiv
url: http://arxiv.org/abs/2607.06882v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.RO
- data-efficient-ai
- discrete-token-adaptation
- low-rank-adaptation
- multimodal-large-language-models
- visual-robot-navigation
- zero-shot-transfer
arxiv_id: '2607.06882'
categories: cs.RO, cs.AI
why_read: This paper demonstrates how adapting frozen Multimodal Large Language Models
  with discrete tokens offers a data-efficient and deployable solution for visual
  robot navigation. You will learn about a novel approach that challenges traditional
  complex training methods, achieving strong performance with significantly less data.
authors:
- Peter Bohm
- Saimunur Rahman
- Abdelwahed Khamis
- Sagun Man Singh Shrestha
- Chris McCool
- Peyman Moghadam
---

Building visual navigation policies for robots usually demands massive datasets and dedicated visual encoders. But what if a frozen MLLM could do the heavy lifting with minimal training?
GemNav shows exactly this. It adapts a frozen Multimodal Large Language Model using Low-Rank Adaptation on just the language tower, without auxiliary visual encoders or continuous regression heads.
Trained on a tiny 8.7-hour corpus (three orders of magnitude smaller than rivals), it transfers zero-shot to four physically distinct unseen environments, stopping within 0.25-0.42m of the goal across 20 real-world trials.
This demonstrates a data-efficient, deployable alternative for foundation model robot navigation, highlighting the power of adapting MLLMs for real-world agentic tasks.
