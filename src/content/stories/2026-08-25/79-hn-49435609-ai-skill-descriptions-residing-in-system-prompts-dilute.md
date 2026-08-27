---
title: AI skill descriptions residing in system prompts dilute other skills
source: hn
url: https://seoagent.com/skill-grader
date: '2026-08-25'
tags:
- ai-skills
- catchup
- hn
- progressive-disclosure
- system-prompt
- token-cost
- trigger-reliability
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49435609'
comments: https://news.ycombinator.com/item?id=49435609
why_read: This text explains how AI skill descriptions impact agent performance by
  consuming context and diluting other skills. Readers will learn a methodology to
  evaluate and optimize skill design for efficiency.
authors:
- aleclindz
---

Is your AI agent performing suboptimally? The problem might not be the LLM, but rather bloated "skills" degrading its performance. A new tool, Skill Grader, helps diagnose this by measuring factors like resident token footprint and description honesty.

Research indicates that every installed skill's description rides in the system prompt, even if unused. Heavy descriptions dilute trigger reliability and waste tokens. The Skill Grader evaluates skills against metrics such as body size, progressive disclosure, and factoring, offering a concrete report card.

For senior engineers working with AI agents, understanding and mitigating this "context degradation" is crucial for efficiency and accuracy. This provides an actionable framework to optimize agent performance by engineering leaner, more focused skills.
