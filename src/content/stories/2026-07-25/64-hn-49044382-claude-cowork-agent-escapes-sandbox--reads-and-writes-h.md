---
authors:
- _orcaman_
comments: https://news.ycombinator.com/item?id=49044382
date: '2026-07-25'
depth_score: 9
hn_id: '49044382'
image: /infographics/64-hn-49044382.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- claude-cowork
- hn
- host-filesystem-access
- sandbox-escape
- security-vulnerability
- virtual-machine
title: Claude Cowork agent escapes sandbox, reads and writes host files
url: https://accomplish.ai/blog/sharedroot-escaping-claude-cowork-sandbox/
utility_score: 8
why_read: This article details a critical security vulnerability found in Claude Cowork
  where an AI agent escaped its VM sandbox to access the host filesystem. Readers
  will learn about the mechanisms of this escape and the importance of robust isolation
  in agent execution environments.
---

A local VM sandbox escape in Claude Cowork (CVE-2026-46331) allowed an AI agent to break out and access the host Mac's filesystem. This vulnerability highlights the extreme challenges of securing AI agent execution environments, even with careful design.

The exploit chain reveals how seemingly minor details, like a read-write shared host filesystem mounted such that only guest-root could access it, could lead to a full escape through a series of privilege escalations within the VM.

For anyone designing or deploying AI agents, this is a critical case study in system security. It underscores that untrusted input is the *main case* for agents, and a robust isolation boundary is the only thing protecting sensitive credentials. The lesson is clear: security in depth and a skeptical eye on every layer of abstraction are paramount.