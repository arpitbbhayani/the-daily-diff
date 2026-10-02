---
title: Escalating privileges from select to sysadmin using SQL Copilot
source: hn
url: https://embracethered.com/blog/posts/2026/from-select-to-sysadmin-sql-copilot-bluehat-asia/
date: '2026-10-01'
tags:
- catchup
- cve-2026-65669
- hn
- privilege-escalation
- sql-copilot
- sql-server
- ssms
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49925970'
comments: https://news.ycombinator.com/item?id=49925970
why_read: Learn how Microsoft SQL Server Copilot tooling can be probed and manipulated
  to escalate database privileges under CVE-2026-65669.
authors:
- Embrace The Red
---

Microsoft integrated Copilot directly into SQL Server Management Studio to assist with query execution and schema analysis. However, binding an LLM agent directly to database sessions introduces critical privilege boundary vulnerabilities.

The core vulnerability in CVE-2026-65669 stems from how the assistant manages tool contexts. When a user opens an authenticated query window, Copilot inherits access to tools capable of reading database objects, running administrative T-SQL commands, and managing backups under the active user credentials. By exploiting indirect prompt injection through stored data or untrusted inputs, an attacker can coerce the model into calling high-privilege tools without explicit operator consent.

This elevation pattern highlights a widespread issue in agentic architectures. Passing raw database handles directly to generative assistants without strict capability filtering or human verification turns data retrieval into arbitrary administrative execution.

Defending against agent injection requires explicit privilege separation between read tools and mutation commands.
