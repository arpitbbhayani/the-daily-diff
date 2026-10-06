---
title: Autonomous AI agent fleets operate offensive vulnerability discovery rigs
source: hn
url: https://huntback.io/blog/ai-agents-running-offensive-security
date: '2026-10-05'
tags:
- ai-agents
- catchup
- claude-code
- hn
- offensive-security
- penetration-testing
- vulnerability-discovery
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49965635'
comments: https://news.ycombinator.com/item?id=49965635
why_read: Read this to understand the practical architecture of autonomous AI fleets
  orchestrating vulnerability scanning, triage, and exploitation. You will gain insight
  into how LLMs are operationalized with offensive security tools to automate attacks
  at machine speed.
authors:
- noktec
---

Security researchers recently recovered an active offensive infrastructure that demonstrates how multi-agent architectures operate in the wild. The rig, named Brainstorm, orchestrates specialized Claude Code agents to perform end-to-end vulnerability hunting across codebases without human intervention.

The system coordinates distinct agent personas responsible for discovery, source code static analysis, and validation. Instead of relying purely on LLM guesses, the orchestrator connects the agents directly to an out-of-band logger. This verification harness captures DNS, HTTP, and LDAP interactions to validate blind exploits with zero operator involvement.

The harness also implements modular model swapping across Anthropic and Kimi backends. This design demonstrates how production agent systems decouple orchestrator logic from specific LLM providers to maintain operational durability.

Observing autonomous agents run real-world pipelines highlights how quickly multi-agent systems are shifting from experimental prototypes into practical, resilient tooling.
