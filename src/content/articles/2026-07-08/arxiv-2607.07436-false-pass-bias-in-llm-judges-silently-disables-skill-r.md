---
title: False-Pass Bias in LLM Judges Silently Disables Skill Retirement
source: arxiv
url: http://arxiv.org/abs/2607.07436v1
date: '2026-07-08'
tags:
- arxiv
- biased-judges
- catchup
- corrupted-reward-analysis
- cs.AI
- cs.CL
- cs.CR
- curator-mechanism-failure
- defect-injection-audit
- false-pass-bias
- llm-judges
- self-evolving-agents
- skill-retirement
arxiv_id: '2607.07436'
categories: cs.AI, cs.CL, cs.CR
why_read: This text reveals how false-pass bias in LLM judges can silently disable
  the skill retirement mechanism in self-evolving agents, a critical behavioral safety
  failure. Readers will understand the universal nature of this problem and a proposed
  audit to detect it.
authors:
- Xing Zhang
- Yanwei Cui
- Guanghui Wang
- Ziyuan Li
- Wei Qiu
- Bing Zhu
- Peiyang He
---

Self-evolving AI agents are designed to improve by retiring bad skills, but what happens when the judge evaluating these skills is biased? This can lead to a silent, catastrophic failure mode.

Traditional skill retirement mechanisms assume an unbiased reward system. However, when LLM judges are used for reference-free tasks, they can introduce 'false-pass' bias, where failures are incorrectly marked as passes.

This bias does not just add noise; it effectively switches off the agent's ability to retire bad skills. The agent accumulates detrimental abilities, yet aggregate metrics remain stable, masking the underlying issue.

The consequence is a universal mechanism failure that only near-zero-false-pass verifier-like graders can avoid. This means your self-evolving agent could be getting worse without any clear warning signs.

Auditing your LLM judges for bias is not just good practice; it is essential to prevent your agents from silently degrading their capabilities.
