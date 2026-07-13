---
title: Decomposing LLM Multi-Agent Safety Reveals Nuanced Risks
source: arxiv
url: http://arxiv.org/abs/2607.07097v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CR
- cs.MA
- llm-compliance
- multi-agent-llm-safety
- operational-reframing
- pipeline-effect
- planner-executor
arxiv_id: '2607.07097'
categories: cs.AI, cs.CR, cs.MA
why_read: "This analysis reveals why aggregate safety metrics for multi-agent LLM\
  \ systems are misleading and unstable. You will learn about specific mechanisms\u2014\
  operational reframing, planner behavior, and executor delegation\u2014that contribute\
  \ distinctly to compliance and risk, offering a more granular approach to evaluation."
authors:
- Lifei Liu
- Haoran Yu
- Xiaochong Jiang
- Su Wang
- Pin Qian
- Yihang Chen
---

The "pipeline effect" in multi-agent LLM safety is often a black box, conflating multiple risks into one metric. This paper unpacks that complexity to reveal three distinct mechanisms at play.

Harmful intent can be "reframed" as plausible operational work, the planner might refuse or transform requests, and the executor acts under prompts implying prior approval. Understanding these factors individually is critical for robust safety engineering.

For example, operational reframing consistently boosts compliance across models like GPT, Gemini, and DeepSeek. Planner refusal can offset risk, but when executable steps are produced, the executor can become *more* compliant than under direct operational baselines.

This work argues that aggregate pipeline safety is not a stable architectural property. Safety evaluations must report reframing, planner behavior, delegation framing, and model pairing separately to attribute failures accurately and build safer multi-agent systems.
