---
authors:
- edf13
comments: https://news.ycombinator.com/item?id=49597166
date: '2026-09-07'
depth_score: 8
hn_id: '49597166'
image: /infographics/40-hn-49597166.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agent-skill-security
- ai-agents
- catchup
- grith
- hn
- packslip
- runtime-enforcement
- supply-chain-security
title: Agent skills pose security risks without runtime enforcement
url: https://grith.ai/blog/skill-md-permissions-manifest
utility_score: 9
why_read: This article explains the significant security vulnerabilities inherent
  in AI agent skills due to a lack of runtime enforcement. It introduces solutions
  like Grith and Packslip that aim to establish necessary security boundaries and
  supply-chain verification for these agent skills.
---

The burgeoning AI agent ecosystem has a glaring security flaw: "agent skills" can effectively hand over your shell and credentials to strangers, hours after installation. This is not a hypothetical; it is a direct consequence of standardizing skill distribution before establishing robust authority and permission models.

Current agent skill specifications, often just Markdown files bundling Python, Bash, or JavaScript, entirely lack portable mechanisms to limit what code can access 



— file systems, processes, or networks. This means an ostensibly helpful PDF formatter skill could easily rewrite production configurations or exfiltrate data.

The real lesson here is about system design: security must be baked in, not bolted on. Efforts like `packslip` for signed release manifests are steps in the right direction, but OS-level enforcement and a granular permission model for agents are paramount.