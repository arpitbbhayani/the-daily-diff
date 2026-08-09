---
title: Zerker Gateway manages agent calls securely through self-hosted infrastructure
source: hn
url: https://zerker.ai/
date: '2026-08-07'
tags:
- api-gateway
- catchup
- hn
- key-management
- oidc-authentication
- self-hosting
- sovereignty
- traffic-guarding
- zerker-gateway
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49211867'
comments: https://news.ycombinator.com/item?id=49211867
why_read: This describes Zerker Gateway, a self-hosted API gateway designed for sovereign
  control over agent traffic. Readers will learn how to implement secure, auditable
  request processing without relinquishing key custody to a third party.
authors:
- nader
---

Building robust AI agent infrastructure requires more than just calling an LLM 
 it needs a sophisticated gateway to manage traffic, security, and usage. Zerker AI Gateway offers an open-source, self-hosted solution that sits directly in front of your agent calls.

This Go-based gateway provides critical features like OIDC authentication, fine-grained access guarding, and invocation recording, ensuring every agent interaction is cataloged and controlled. Crucially, it emphasizes sovereignty by running as a single binary on your infrastructure and never holding your private keys.

This design choice allows you to maintain full control over your AI agent ecosystem, turning raw HTTP or MCP calls into managed, auditable, and chargeable invocations. It is a powerful example of how to implement secure, scalable, and transparent LLM infrastructure in production.
