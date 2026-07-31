---
authors:
- vertias3u
comments: https://news.ycombinator.com/item?id=49096412
date: '2026-07-29'
depth_score: 7
hn_id: '49096412'
image: /infographics/117-hn-49096412-passcontrol-secures-ai-agent-api-keys-using-cryptograph.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-agents
- api-keys
- catchup
- cryptographic-identity
- hn
- security-boundary
- work-visa
title: PassControl secures AI agent API keys using cryptographic identity
url: https://passcontrol.vertias.eu
utility_score: 9
why_read: This text explains how PassControl provides a security boundary for AI agents,
  preventing them from directly holding real API keys. Readers will learn about its
  mechanism of using cryptographic identity and a work-visa system to inject vaulted
  provider keys securely.
---

A major security vulnerability with AI agents is their direct access to sensitive API keys. PassControl tackles this head-on with an agent credential gateway, ensuring your agents never hold the actual keys.

This system gives agents cryptographic identity through an Ed25519 passport, signing challenges locally without ever sending private keys over the wire. Instead, a short-lived 'work-visa' carries identity and policy into a gateway that verifies every request.

The gateway enforces scope, budget, and injects the vaulted provider key only after successful checks, proxying the request and streaming the response. This creates a critical security boundary, keeping your provider secrets safe while giving agents regulated access. This is a must-have pattern for anyone building production AI agent systems.