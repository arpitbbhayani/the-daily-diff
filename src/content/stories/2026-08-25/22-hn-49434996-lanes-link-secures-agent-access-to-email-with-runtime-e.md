---
title: Lanes Link secures agent access to email with runtime enforcement
source: hn
url: https://lanes.sh/use-cases/scoped-account-access-for-agents
date: '2026-08-25'
tags:
- agent-access
- audit-trail
- capability-based-security
- catchup
- deny-by-default
- hn
- runtime-enforcement
- security
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49434996'
comments: https://news.ycombinator.com/item?id=49434996
why_read: This text describes a novel approach to securing AI agent access to sensitive
  services like email. Readers will learn how Lanes Link enhances security by enforcing
  granular, capability-based access control and maintaining an audit trail, moving
  beyond reliance on model prompts.
authors:
- s-xyz
---

Granting AI agents access to your digital life needs far more precision than typical OAuth scopes allow. A new approach, Lanes Link, introduces runtime-enforced, capability-based permissions specifically for agents, addressing a critical security gap.

Instead of a blanket 'read my email,' you can define 'gmail.search = allow' while 'gmail.send = deny,' enforced at the endpoint. This deny-by-default, policy-tightens-inward model, coupled with tamper-evident audit trails, fundamentally changes how we can build secure and auditable agentic systems.

This is a significant step forward for system design in the age of AI. It moves beyond asking an agent to 'please not misuse' a broad permission to genuinely enforcing it, providing a blueprint for trustworthy agent interactions with your accounts and data.
