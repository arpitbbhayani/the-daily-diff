---
title: Prompting patterns for optimizing Claude Opus 5.5 workflows
source: hn
url: https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5
date: '2026-09-28'
tags:
- agentic-workflows
- catchup
- claude-opus-5-5
- hn
- model-calibration
- prompt-engineering
- token-efficiency
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49874728'
comments: https://news.ycombinator.com/item?id=49874728
why_read: Read this guide to learn how to calibrate effort and structure prompts for
  Claude Opus 5.5. It helps developers optimize token usage and resolve specific execution
  issues in agentic workflows.
authors:
- Michelangelo11
image: /infographics/01-hn-49874728.jpg
---

Scaling autonomous agent workflows requires precise control over token generation latency and intermediate reasoning budgets. Claude Opus 5.5 introduces distinct operational characteristics that alter how backend engineers should structure system prompts and agent harnesses.

Anthropic highlights several tactical patterns for production systems. For unattended multi-agent execution, orchestrators must explicitly inject time signals into harnesses to prevent agent teams from stalling or running redundant validation turns. In addition, calibrating thinking effort dynamically between triage tasks and deep execution paths yields significant latency and cost savings without degrading completion quality.

Context stuffing remains counterproductive. Explicitly segmenting pasted user artifacts from executable system instructions prevents prompt injection while keeping the reasoning focused on core tool payloads.

Treating context management and thinking tokens as bounded system resources is essential for building reliable agentic architectures.
