---
authors:
- suarezc
comments: https://news.ycombinator.com/item?id=49347614
date: '2026-08-18'
depth_score: 8
hn_id: '49347614'
image: /infographics/65-github-49347614.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- agent-effects
- authorization
- catchup
- cermet
- github
- granular-permissions
- local-authority
- security
title: Cermet authorizes agent effects with granular, local authority
url: https://github.com/suarezc/cermet
utility_score: 9
why_read: Readers will learn about Cermet, a system that grants granular, local authority
  for agent actions, rather than broad credential access. It demonstrates a method
  for authorizing specific effects like 'refund this charge up to $50' with decisions
  logged locally.
---

Giving AI agents direct access to credentials is a security time bomb; the solution lies in disaggregating authority.

Cermet introduces a novel local authority broker that authorizes specific "agent effects" like refunding a charge or pushing a branch, rather than granting broad credential access or API permissions. Agents ask for a typed effect, and Cermet decides based on declarative policies you define.

This system ensures agents never hold sensitive credentials directly, executing allowed actions on their behalf. Every decision is immutably logged in a hash-chained receipt, providing a robust audit trail and accountability.

This approach solves a critical security and control challenge for production AI agent deployments. It provides a blueprint for fine-grained authorization, enabling agents to be powerful without being dangerous.

Secure agent interactions are about granting specific actions, not handing over keys.