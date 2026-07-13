---
title: Concrete Executable Information Boosts AI Program Repair Success
source: arxiv
url: http://arxiv.org/abs/2607.07593v1
date: '2026-07-08'
tags:
- arxiv
- automated-program-repair
- bug-reports
- catchup
- cs.SE
- llm-agents
- localization-info
- repair-success
- reproduction-scripts
- structural-changes
- swe-bench
arxiv_id: '2607.07593'
categories: cs.SE
why_read: This analysis reveals which bug report features are most crucial for the
  success of LLM-based automated program repair agents. Readers will learn that concrete,
  executable information and localization cues are vital, while traditional human-centric
  elements may hinder AI repair success.
authors:
- Lara Khatib
- Noble Saji Mathews
- Meiyappan Nagappan
- Pengyu Nie
- Thomas Zimmermann
---

The quality of your bug reports directly impacts an AI agent's ability to fix code. This research reveals that for LLM-based automated program repair (APR) agents, concrete, executable, and well-localized information is paramount.

Traditional bug report elements like natural language descriptions, long reports, and detailed steps to reproduce, often valued by human engineers, actually correlate with lower success rates for AI agents.

Instead, elements like fix suggestions, reproduction scripts, repository source code, and fault localization information are strongly associated with higher repair likelihood. For instance, models like Qwen search more widely with missing info, while Gemma commits early to a plausible patch.

A good bug report for an agent is not identical to one for a human; agents need precise, actionable data to operate effectively.

Focus on providing crisp, actionable details to empower your coding agents.
