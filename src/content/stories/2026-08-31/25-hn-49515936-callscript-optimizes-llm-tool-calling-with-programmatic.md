---
authors:
- handfuloflight
comments: https://news.ycombinator.com/item?id=49515936
date: '2026-08-31'
depth_score: 8
hn_id: '49515936'
image: /infographics/25-hn-49515936.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- callscript
- catchup
- code-mode
- hn
- json-plan
- llm-orchestration
- llm-tool-calling
title: CallScript optimizes LLM tool calling with programmatic plan generation
url: https://www.callscript.dev/
utility_score: 8
why_read: This text introduces CallScript, a novel approach to LLM tool calling that
  improves efficiency and control. Readers will learn how CallScript's 'code mode'
  generates declarative JSON plans from a subset of JavaScript, addressing the limitations
  of traditional direct tool-call chains.
---

The promise of LLM agents often collides with the reality of non-determinism, high token costs, and security risks from arbitrary code execution. CallScript proposes an elegant solution: 'Code Mode, without the sandbox.'

Instead of direct execution, LLMs write a subset of JavaScript. This code is then parsed into a deterministic JSON plan. This plan can be reviewed, stored, and resumed, giving engineers unprecedented control and auditability over agent actions. It solves the issue where agents get distracted by excessive tool output or generate inefficient, chained calls.

This shift from 'execute what the LLM says' to 'plan what the LLM proposes' is a game-changer for building reliable and cost-effective multi-step agentic workflows. It leverages the LLM's programming capabilities while mitigating the inherent risks of arbitrary code execution in production environments.