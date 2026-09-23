---
title: Software design should make it easier to prove agents wrong
source: hn
url: https://www.rafael.md/writing/building-software-that-can-prove-agents-wrong
date: '2026-09-21'
tags:
- application-design
- catchup
- coding-agents
- error-detection
- hn
- verification
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49793343'
comments: https://news.ycombinator.com/item?id=49793343
why_read: This article reveals that effective agent verification hinges on application
  design that exposes errors, not just happy paths. Readers will learn how product
  architecture dictates an agent's ability to detect mistakes and achieve robust verification.
authors:
- "Rafael C\xE2mara"
---

Most AI agent workflows fail not because the agent is incapable, but because the software it is interacting with is not designed for robust verification. The problem is not just making the agent click buttons; it is about making the application expose its internal state and potential failure modes to the agent.

This fundamentally shifts agent verification from a workflow design problem to an application design problem. You need to build your product in a way that allows an agent to prove its actions have not introduced subtle bugs, like double charges or inconsistent states, rather than just confirming a happy path UI message.

Designing for agent verifiability means intentionally structuring your application to reveal crucial information and enable deeper, more reliable testing by AI, a critical step for building truly dependable agentic systems.
