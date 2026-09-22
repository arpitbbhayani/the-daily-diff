---
title: Chief of Staff pattern improves AI coding agent reliability
source: hn
url: https://asyncdot.com/blog/chief-of-staff-pattern-orchestrating-claude-code-sessions/
date: '2026-09-20'
tags:
- agent-reliability
- ai-coding
- catchup
- chief-of-staff-pattern
- claude-code-agents
- durable-state
- hn
- orchestration
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49772806'
comments: https://news.ycombinator.com/item?id=49772806
why_read: This article introduces the Chief of Staff pattern for orchestrating AI
  coding agents. Readers will learn how separating orchestration from execution, utilizing
  durable state, and verifying agent claims can significantly improve the reliability
  of long-running AI coding tasks.
authors:
- Mithushan Jalangan
---

Building reliable, long-running AI agents is less about stronger models and more about robust orchestration. The "Chief of Staff Pattern" offers a solution by separating agent orchestration from execution, addressing critical issues like ephemeral context and unreliable self-reports that often plague complex AI coding tasks. 

This pattern emphasizes an external, durable task board to maintain state across sessions, ensuring continuity even if an agent's context is lost or a session fails. By treating every agent report as mere evidence rather than instruction and re-running commands for verification, you gain a vital layer of reliability.

This approach helps overcome the inherent limitations of current LLMs in long-horizon tasks, allowing engineers to build more resilient and trustworthy agentic systems that deliver consistent results.
