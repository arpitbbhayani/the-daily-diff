---
title: Stonefold provides a deterministic checkpoint for AI agent actions
source: hn
url: https://stonefold.ai/
date: '2026-08-04'
tags:
- ai-agents
- auditing
- catchup
- deterministic-enforcement
- hn
- policy-enforcement
- system-security
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49169158'
comments: https://news.ycombinator.com/item?id=49169158
why_read: This text explains why AI agents should not directly control system actions
  and introduces Stonefold, a deterministic gateway for policy enforcement and auditing.
authors:
- gabert
---

Deploying AI agents with write access to your critical systems like databases or payment processors introduces a significant risk. Agents can be tricked or make mistakes, leading to real-world consequences before any human intervenes. Stonefold addresses this head-on with a deterministic gateway.

This gateway acts as a crucial checkpoint, ensuring that an AI agent's proposed actions are vetted against predefined policies (allow, hold for human, deny) before execution. It provides a layer of safety and auditability, ensuring that even if the LLM-powered agent generates an erroneous or malicious action, the underlying system remains protected.

The core idea is simple: the AI proposes, but a controlled machine disposes. This approach is highly practical for any team moving beyond read-only agents and considering agentic AI for operational tasks, offering a robust pattern for integrating agents responsibly into production environments.
