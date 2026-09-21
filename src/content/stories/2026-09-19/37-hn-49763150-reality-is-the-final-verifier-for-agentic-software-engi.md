---
authors:
- Alexander Krentsel
- Shubham Agarwal
- Mert Cemri
- Shu Liu
- Sidharth Sankhe
- Ziming Mao
- Matei Zaharia
- Ion Stoica
comments: https://news.ycombinator.com/item?id=49763150
date: '2026-09-19'
depth_score: 8
hn_id: '49763150'
image: /infographics/37-hn-49763150.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agentic-software-engineering
- assurance-revision-loop
- catchup
- hallucination
- hn
- model-gap
- requirement-gap
- reward-hacking
- verification-gaps
title: Reality is the final verifier for agentic software engineering
url: https://arxiv.org/abs/2609.12039
utility_score: 8
why_read: Read this to understand the fundamental limitations of agentic software
  engineering verification, specifically the requirement and model gaps. It introduces
  an assurance-revision loop that leverages deployment evidence to continuously improve
  agent behavior, addressing issues like reward hacking and hallucination.
---

Building reliable AI agents in production is harder than it looks. This paper from Matei Zaharia and Ion Stoica unpacks why, introducing a critical 'two-gap framework' that senior engineers need to grasp.

The core idea? Failures stem not just from model issues, but from 'requirement gaps' (stakeholder intent vs. formal requirements) and 'model gaps' (deployment environment vs. its approximation). Think of reward hacking or hallucination through this lens.

They propose an assurance-revision loop: continuously narrowing these gaps with real-world deployment evidence. It is a pragmatic shift from closing uncloseable gaps to continuous improvement, turning agentic development into a resource-allocation problem for human judgment and compute. This is essential reading for anyone trying to ship robust agents.