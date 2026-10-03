---
title: Loopjacking hijacks human approvals by altering pending agent tasks
source: hn
url: https://adithyanak.com/loopjacking-in-a2a-implementations/
date: '2026-09-23'
tags:
- agent-security
- authorization
- catchup
- hn
- human-in-the-loop
- langgraph
- loopjacking
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49820349'
comments: https://news.ycombinator.com/item?id=49820349
why_read: Read this to understand how architectural flaws in agent-to-agent workflows
  permit loopjacking attacks. You will learn why human approvals must bind directly
  to exact tool calls rather than generic task containers.
authors:
- akoffsec
image: /infographics/01-hn-49820349.jpg
---

Human-in-the-loop safeguards in agent systems suffer from a severe architectural flaw: task identifiers are often bound to mutable conversation state rather than deterministic payload hashes. Security research on agent-to-agent architectures demonstrates that an attacker can modify a pending tool call between the human approval request and the final sink execution.

In a documented vulnerability named Loopjacking, an approver reviewed an interrupt for an initial wire transfer of 20 units. Before approval was finalized, a secondary maker agent updated the shared task thread via the server route, replacing the target call with a 2,000 unit transfer to an attacker account. Because the server tracked approval against the overarching Task ID rather than the exact payload hash, the mock ledger executed the malicious transfer under the human authority.

Binding authorization to a conversational session or task context provides zero integrity guarantees.

When designing agent platforms with human approval gates, you must cryptographically bind approvals to an immutable hash of the tool name and arguments before invoking any execution sink.
