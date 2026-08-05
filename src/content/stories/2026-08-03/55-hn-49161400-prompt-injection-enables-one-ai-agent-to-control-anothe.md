---
title: Prompt injection enables one AI agent to control another
source: hn
url: https://www.theregister.com/security/2026/08/03/google-dev-kit-spurs-first-ever-agent-on-agent-violence/5282496
date: '2026-08-03'
tags:
- agent-exploitation
- ai-agents
- catchup
- hn
- prompt-injection
- supply-chain-security
- vulnerability
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49161400'
comments: https://news.ycombinator.com/item?id=49161400
why_read: Read this to understand the first real-world agent-to-agent exploitation
  method discovered in Google's AI Agent Development Kit. It highlights new attack
  surfaces and the risks of AI agents in production and CI/CD workflows.
authors:
- Jessica Lyons
- Dan Lisichkin
---

A new breed of security exploit has emerged: "agent-on-agent violence." Researchers found a vulnerability in Google's Agent Development Kit for Python where a lower-privileged AI agent could compromise a higher-privileged one.

The attack vector involved prompt injection hidden within poisoned pull requests. This allowed one agent to exert control over another, opening up pathways for supply chain compromise within AI-driven CI/CD workflows. It is a stark reminder that traditional security models do not fully account for intelligent agents.

This highlights the urgent need to reconsider trust boundaries and interaction protocols in multi-agent systems. If your pipelines involve AI agents reviewing code, this kind of sophisticated prompt injection needs to be a core part of your threat modeling. The security landscape for AI is evolving rapidly.
