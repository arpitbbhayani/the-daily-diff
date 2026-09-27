---
title: Assigning agents their own identities improves company AI adoption
source: hn
url: https://toppingdesign.com/writing/agents-are-reports/
date: '2026-09-25'
tags:
- ai-agents
- api-key-sprawl
- catchup
- hn
- identity-management
- permissions
- principal-identity
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49848358'
comments: https://news.ycombinator.com/item?id=49848358
why_read: Understand common pitfalls in enterprise AI adoption and learn a structured
  approach for managing AI agents by assigning them unique identities and permission
  levels, similar to human employees.
authors:
- Topper Bowers
---

Managing AI agents in an enterprise without proper governance quickly leads to "AI slop," API key sprawl, and security nightmares. This calls for treating each agent as a direct report with its own identity and strict access controls.

Companies adopting AI often face duplicated effort and uncontrolled token budgets, because no standard pattern exists for securely connecting agents to internal systems. Agents need their own principals in your identity system, with access levels explicitly defined and often restricted below their human owner.

Establishing clear identity and access management for agents is not just about security; it is about building a scalable, manageable, and auditable AI infrastructure. This prevents secrets from "landing in the context window" and ensures responsible deployment.

Effective agent management is foundational for enterprise AI success.
