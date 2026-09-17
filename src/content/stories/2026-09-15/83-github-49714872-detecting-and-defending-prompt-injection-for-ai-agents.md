---
title: Detecting and defending prompt injection for AI agents
source: github
url: https://github.com/StackOneHQ/defender/
date: '2026-09-15'
tags:
- ai-agents
- catchup
- cpu-only
- github
- llm-security
- low-latency
- open-source
- prompt-injection
- tool-calling
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49714872'
comments: https://news.ycombinator.com/item?id=49714872
why_read: This describes an open-source solution for detecting and defending against
  prompt injection attacks in AI agents that use tool calls. Readers will learn about
  a low-latency, CPU-only system that sanitizes tool results before they reach the
  LLM.
authors:
- Hiskias
---

Prompt injection remains one of the most insidious threats to AI agent reliability, especially when agents interact with external tools. This new open-source project, Defender, offers a lightweight, CPU-only solution with impressive performance.

It works by intercepting tool results - such as emails or documents - and performs sentence-level sanitization, returning a cleaned copy and an allow/block verdict. With sub-10ms latency and a small memory footprint, it is designed for real-time production use.

This is a crucial piece of infrastructure for any team deploying agents. It closes a significant security gap, making your AI applications more robust and trustworthy against adversarial inputs.
