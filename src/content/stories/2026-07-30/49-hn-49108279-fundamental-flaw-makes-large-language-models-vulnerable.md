---
authors:
- Charles Ye
- Jasmine Cui
comments: https://news.ycombinator.com/item?id=49108279
date: '2026-07-30'
depth_score: 8
hn_id: '49108279'
image: /infographics/49-hn-49108279.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- hn
- large-language-models
- model-attacks
- red-teaming
- security-vulnerability
- unsolvable-problem
title: Fundamental flaw makes large language models vulnerable to attack
url: https://www.technologyreview.com/2026/07/30/1140927/a-fundamental-flaw-leaves-llms-vulnerable-to-attack/
utility_score: 8
why_read: This article explains why large language models may be fundamentally impossible
  to secure against certain types of attacks. It highlights a critical, unfixable
  flaw in LLM architecture and the limitations of current defense mechanisms like
  red-teaming.
---

A new paper presented at ICML suggests a fundamental flaw makes Large Language Models inherently impossible to fully secure against attacks. This is not about a patchable bug; it is about how LLMs fundamentally identify and process instructions.

The researchers argue that current red-teaming approaches are akin to giving a model a list of "don'ts" 
 an exhaustive list is simply unfeasible. This flaw allowed them to extract sensitive information, like instructions for synthesizing cocaine, from popular LLMs, despite existing guardrails.

For senior engineers building with AI, this has profound implications. It means relying solely on post-hoc safety filters is insufficient. System design must account for an irreducible risk, prompting a rethink of how we deploy LLMs in sensitive or high-stakes environments. You cannot patch away a design principle.