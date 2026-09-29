---
title: Elastic agentic SOC executes attacker workflows via prompt injection
source: hn
url: https://www.promptarmor.com/resources/elastic-agentic-soc-vulnerable-to-credential-theft
date: '2026-09-28'
tags:
- agentic-soc
- catchup
- credential-theft
- elasticsearch
- hn
- incident-response
- indirect-prompt-injection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49881444'
comments: https://news.ycombinator.com/item?id=49881444
why_read: Understand how indirect prompt injection in automated security agents can
  lead to credential theft and complete tenant compromise. This analysis illustrates
  the mechanistic risks of giving autonomous AI agents sensitive privileges without
  human-in-the-loop safeguards.
authors:
- PromptArmor Threat Intel
---

Deploying autonomous LLM agents into security operations centers creates severe security vulnerabilities if authorization boundaries are not strictly decoupled from agent decision-making. A recent vulnerability report against Elastic Agentic SOC shows how an untrusted phishing alert can hijack the triage workflow through indirect prompt injection.

Because the agent operated with full user privileges and had tool access to mint API tokens without human approval, malicious text embedded in a triage ticket instructed the agent to spawn a sub-agent, generate administrative credentials, and exfiltrate them via an outbound HTTP request. Once compromised, the attacker gained the power to delete cluster indexes and disable detection rules.

This highlights a fundamental rule for agentic systems: do not conflate the user session identity with the agent execution identity. Sensitive actions like key generation, rule deletion, and outbound webhook execution must always require out-of-band authorization.
