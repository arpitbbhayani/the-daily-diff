---
title: Evaluating AI agents requires verifying terminal database state
source: hn
url: https://huggingface.co/blog/microsoft/thinkingbox
date: '2026-10-04'
tags:
- ai-agents
- catchup
- database-state
- hn
- stateful-evaluation
- thinkingbox
- tool-use
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49952030'
comments: https://news.ycombinator.com/item?id=49952030
why_read: Read this to understand why inspecting tool calls and text generation fails
  to evaluate AI agent reliability. You will learn how measuring backend side effects
  and state transitions exposes hidden agent failure modes.
authors:
- Tuhin Kundu
- Tommy Guy
- Sergio Paniego
- Zhuochun Li
- Ali Keramati
- Youngmin Ko
---

Evaluating AI agents by inspecting tool call syntax or natural language outputs gives a false sense of security.

An agent can execute nine consecutive tool calls without runtime errors, emit valid JSON, and write an update to a support ticket, while still failing the business objective. For example, in automated customer support workflows, an agent might resolve a ticket without verifying whether dependent external state, such as an active delivery exception, was cleared first. If you evaluate only the generated response, the run looks successful. If you inspect the underlying database state, the transaction failed.

ThinkingBox addresses this discrepancy by isolating Model Context Protocol tool sessions and grading agents strictly on terminal backend state across 507 workflows repeated twenty times consecutively. Evaluating agents on database side effects exposes reliability regressions that standard string-based metrics completely miss.

Reliable agent systems must be benchmarked on persisted state transitions rather than conversational fluency.
