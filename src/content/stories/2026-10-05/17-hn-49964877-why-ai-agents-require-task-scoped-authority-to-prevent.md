---
title: Why AI agents require task-scoped authority to prevent leaks
source: hn
url: https://tenuo.ai/blog/give-your-agent-a-valet-key.html
date: '2026-10-05'
tags:
- agentforce
- ai-agents
- catchup
- data-exfiltration
- hn
- salesbleed
- task-scoped-authority
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49964877'
comments: https://news.ycombinator.com/item?id=49964877
why_read: Understand how role-based permissions expose AI agents to data exfiltration
  attacks and why task-scoped authority is necessary to contain prompt injection exploits.
authors:
- Tenuo Engineering
---

Most AI agent security architectures fail because they rely on role-based access control rather than task-scoped authority. When an agent inherits the full permissions of an authenticated user, an indirect prompt injection attack can easily pivot across systems and exfiltrate private data.

Consider the SalesBleed exploit chain disclosed against Salesforce Agentforce. An attacker submitted poisoned lead data through a public contact form. When an internal sales representative asked the agent to summarize recent leads, the model parsed the untrusted input, executed an unauthorized query against customer account records, and leaked sensitive deal sizes through out-of-band DNS lookups embedded in image tags.

Patching URL parsers is only a temporary fix. The foundational issue is excessive ambient authority.

To build resilient multi-agent systems, engineers must implement capability-based authorization. Every tool invocation should carry a short-lived, cryptographically signed token that is restricted strictly to the current step. As execution flows between sub-agents, permissions must attenuate and become narrower, never broader.

Security boundaries must exist at the tool execution layer, not inside the prompt.
