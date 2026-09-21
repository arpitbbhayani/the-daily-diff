---
title: AgentMeasure uncovers widespread billing bugs in AI agent usage tools
source: github
url: https://github.com/roy-tong/AgentMeasure
date: '2026-09-19'
tags:
- ai-agents
- billing-bugs
- catchup
- conformance-testing
- github
- measurement-infrastructure
- token-accounting
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49764767'
comments: https://news.ycombinator.com/item?id=49764767
why_read: This project reveals significant challenges in measuring AI agent usage.
  Read it to understand the prevalence of billing bugs and the importance of open
  measurement infrastructure for ensuring accurate token accounting in AI agent systems.
authors:
- Roy Tong
---

Are you building AI agents? You need to precisely measure LLM token usage. AgentMeasure is an open measurement infrastructure project that uncovered over 45 billing bugs across 124 tools, leading to 19 upstream fixes.

This is not just about cost saving; it is about system reliability and trust. Imagine an agent silently consuming tokens beyond its budget due to misattribution. AgentMeasure provides conformance fixtures to ensure token accounting is verifiable in your CI/CD pipelines, marking usage as PASS, FAIL, or UNPROVABLE.

This project offers a foundational approach to managing the operational complexity of AI agents. It gives you the health checks and settlement statements necessary for robust and accountable applied AI systems. It is time to get serious about agent economics.
