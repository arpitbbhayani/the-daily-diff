---
arxiv_id: '49310554'
categories: ''
date: '2026-08-15'
depth_score: 8
image: /infographics/24-arxiv-49310554.jpg
interest_score: 8
novelty_score: 8
section: ai
source: arxiv
tags:
- arxiv
- catchup
title: ArXiv Paper
url: https://arxiv.org/abs/49310554
utility_score: 8
why_read: Understand a crucial flaw in evaluating LLM coding agents, specifically
  how command-path failures are hidden by matched scores, and learn about QuoteBench,
  a new benchmark for more accurate agent assessment.
---

Many evaluations of LLM coding agents use "matched execution scores," but this metric can be fundamentally misleading. A new paper on QuoteBench demonstrates that these scores often hide critical failures introduced not by the LLM's generation, but by the serialization, wrapping, and re-parsing within the command execution path.

The authors found that replaying the same LLM reply through a deliberately unescaped parser lowered success by 55.4 to 73.2 percentage points. This means agents might appear capable, but their output is breaking down after generation, due to issues in how the commands are processed by the system.

This research highlights that for effective agent development, we must distinguish between generation errors and execution transport failures. Engineers building agentic systems will find this crucial for designing robust evaluation metrics and understanding true agent capabilities.