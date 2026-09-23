---
title: Jev flags dangerous tool calls but lacks full security for agentic executions
source: hn
url: https://www.southbridge.ai/blog/jev-watching-the-agents
date: '2026-09-21'
tags:
- agentic-execution
- ai-security
- catchup
- hazard-detection
- hn
- model-monitoring
- tool-call-classification
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49783694'
comments: https://news.ycombinator.com/item?id=49783694
why_read: This analysis demonstrates the effectiveness and limitations of the Jev
  tool-call classifier in identifying dangerous model operations. Readers will gain
  insight into the challenges of securing agentic executions through model monitoring.
authors:
- tosh
---

Securing AI agents is not a trivial task, and simply trusting their output is a recipe for disaster. This article demonstrates a robust mechanism for agent safety by deploying a fast "System One" AI model, Jev, to act as a supervisor.

This supervisor classifies and flags potentially dangerous tool calls made by agentic systems in real time. Empirical data from 220,000 real tool calls showed Jev flagged 3,814 hazardous actions, catching critical issues like 'scope escape' and 'credential exposure' with high confidence.

This approach provides a vital safety layer, moving beyond reactive monitoring to proactive interception of harmful agent behaviors. It also gives concrete insights into the types of security vulnerabilities prevalent in autonomous AI systems.

Understanding this architecture is essential for any engineer building or deploying agentic AI in production environments.
