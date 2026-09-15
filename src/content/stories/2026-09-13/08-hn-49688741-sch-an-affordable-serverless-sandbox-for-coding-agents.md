---
title: SCH an affordable serverless sandbox for coding agents in AWS
source: hn
url: https://c-daniele.github.io/en/posts/2026-09-07-close-the-lid-serverless-coding-harness/
date: '2026-09-13'
tags:
- aws
- catchup
- coding-agents
- harness
- hn
- runtime
- sandboxing
- serverless
- state-management
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49688741'
comments: https://news.ycombinator.com/item?id=49688741
why_read: This post introduces SCH, a serverless coding harness on AWS, offering an
  affordable and secure sandbox for running coding agents unattended. Readers will
  learn how to build such a system and understand critical concepts like state, harness,
  and runtime in agent development.
authors:
- cd4n1
---

Building robust and affordable AI coding agents often hits a wall with runtime costs and state management. This article introduces SCH, a serverless coding harness on AWS AgentCore, offering a compelling solution.

The core idea is simple: externalize state from the context window to persistent storage, design a lightweight harness, and leverage serverless runtimes for cost efficiency. The author's personal experience of a branch being ready for review after closing a laptop lid for hours, with only cents spent on compute, highlights the power of this approach.

It delves into practical architecture, discussing how to manage files, git history, and planning documents as externalized state. This is crucial for long-running agentic loops where context windows are ephemeral.

This is not just theory; it is a blueprint for implementing productive, unattended AI agents in a production environment. You will gain actionable insights into building your own cost-effective LLM infrastructure.
