---
title: Six controls limit blast radius across three agent attack surfaces
source: hn
url: https://blog.gitguardian.com/ai-agent-security-six-controls/
date: '2026-10-10'
tags:
- access-control
- ai-agent-security
- catchup
- credential-theft
- hn
- prompt-injection
- sandboxing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50033190'
comments: https://news.ycombinator.com/item?id=50033190
why_read: Learn how AI agents expose host, identity, and context surfaces, and discover
  six pragmatic controls to limit blast radius when prompt injections occur.
authors:
- guedou
---

Prompt injection is not an application bug that you can patch out of an AI agent. In nine documented production incidents, malicious instructions in emails, support tickets, and web pages successfully overrode agent context to steal credentials.

The critical vulnerability is not that the model got tricked, but that the runtime execution harness allowed the agent to touch credentials outside its immediate task. Attackers do not care about manipulating the conversation itself. They want the AWS keys, API tokens, or session cookies accessible in the execution environment.

Stopping these exploits requires treating the agent like an untrusted multi-tenant process. You must sandbox the execution environment, lock the agent out of its own configuration files, scan the workspace for exposed secrets before invocation, and enforce strictly scoped ephemeral credentials.

Assume your agent will be injected, and build guardrails around what the host permits it to touch.
