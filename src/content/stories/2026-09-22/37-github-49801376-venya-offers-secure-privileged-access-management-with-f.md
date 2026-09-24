---
title: Venya offers secure privileged access management with FIDO2 and LLMs
source: github
url: https://github.com/tabith-llc/venya
date: '2026-09-22'
tags:
- ai-agents
- catchup
- fido2-authentication
- github
- infrastructure-security
- llm-operations
- model-context-protocol
- privileged-access-management
- remote-executors
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49801376'
comments: https://news.ycombinator.com/item?id=49801376
why_read: This introduces Venya, a platform that provides secure privileged access
  management using FIDO2, remote executor sandboxes, and LLM-driven operations. It's
  valuable for learning how AI agents can securely manage remote infrastructure.
authors:
- tabith
---

Building AI agents that interact with real systems? The security challenge of secret management is real: how do agents use credentials without directly accessing them? Venya introduces a compelling solution.

This platform allows AI agents to execute privileged commands on remote infrastructure using stored credentials, but critically, the agents themselves never see the secrets. It leverages FIDO2 authentication and remote executor sandboxes, wrapping LLM-driven operations with a Model Context Protocol.

This is not just an incremental improvement; it is a foundational piece for building truly robust and secure agentic systems. If you are deploying agents into production, understanding this architecture is crucial for preventing critical security vulnerabilities and enabling safe automation.
