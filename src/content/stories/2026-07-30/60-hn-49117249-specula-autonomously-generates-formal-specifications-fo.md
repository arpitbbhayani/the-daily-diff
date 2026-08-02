---
authors:
- Qian Cheng
- Saad Mohammad Rafid Pial
- Ruize Tang
- Yiming Su
- Emilie Ma
- Finn Hackett
- Ivan Beschastnikh
- Yu Huang
- Tianyin Xu
comments: https://news.ycombinator.com/item?id=49117249
date: '2026-07-30'
depth_score: 8
hn_id: '49117249'
image: /infographics/60-hn-49117249.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- autonomous-agents
- bug-finding
- catchup
- formal-specifications
- hn
- large-language-models
- model-checking
- specula
- system-code
- tla+
title: Specula autonomously generates formal specifications for system code model
  checking
url: https://arxiv.org/abs/2607.25333
utility_score: 7
why_read: This paper introduces Specula, an autonomous agentic system for generating
  high-quality formal specifications to model check complex system code. Readers will
  learn how Specula overcomes traditional formal methods barriers and LLM limitations
  to effectively find deep bugs.
---

Scaling formal verification for complex system code has always been a bottleneck. Now, there is Specula, an autonomous agentic system that uses large language models to generate high-quality TLA+ formal specifications.

This system does not just create specs; it iteratively refines them through self-evolving loops, mitigating common LLM issues like reward hacking and hallucinations. Specula has already found 249 bugs in open-source projects, demonstrating its practical utility in a domain traditionally requiring immense human expertise.

This is a significant step forward for applied AI in software engineering, offering a blueprint for how agentic systems can tackle some of our hardest system design and verification challenges.