---
title: Separate authorization from credentials to prevent AI agent prompt injection
source: github
url: https://github.com/yacine-kellib/agent-control-plane
date: '2026-08-17'
tags:
- agent-control-plane
- ai-agents
- authorization
- catchup
- github
- prompt-injection
- security
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49337491'
comments: https://news.ycombinator.com/item?id=49337491
why_read: This text explains how current AI agent authorization methods are vulnerable
  to prompt injection and introduces the Agent Control Plane as a solution to externalize
  authorization decisions, enhancing security.
authors:
- Yacine Kellib
---

A major vulnerability in current AI agent deployments is that the LLM often holds the authorization, making it susceptible to prompt injection. The Agent Control Plane (ACP) project introduces a radical yet necessary paradigm: the LLM proposes, it never authorizes.

ACP shifts the authorization decision for agent actions outside the model, beyond the reach of prompt injection. This means even if an LLM is compromised, it cannot execute malicious commands because a separate, secure control plane makes the final call.

This is a blueprint for building truly secure AI agents. The project includes specifications, Dafny proofs, and a reference implementation. Engineers deploying agents in production environments will find this essential for preventing critical security breaches.
