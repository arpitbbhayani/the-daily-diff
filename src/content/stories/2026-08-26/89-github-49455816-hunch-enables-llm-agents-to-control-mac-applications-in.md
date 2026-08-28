---
title: Hunch enables LLM agents to control Mac applications in background
source: github
url: https://github.com/PrithviSeran/hunch-mcp
date: '2026-08-26'
tags:
- accessibility-apis
- applescript
- background-operations
- catchup
- github
- hunch
- llm-agents
- mac-automation
- mcp
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49455816'
comments: https://news.ycombinator.com/item?id=49455816
why_read: This describes Hunch, a tool enabling LLM agents to control Mac applications
  without foreground interaction, using various OS APIs and protocols. Readers will
  understand how LLMs can automate macOS tasks in the background.
authors:
- PrithviSeran
---

An LLM agent can now drive your Mac in the background, focus-free, without taking over your screen. This project, Hunch, provides a Mac Control Protocol (MCP) server that allows agents to interact with native apps, fill web forms, and manage files.

The system employs a clever four-layered approach, prioritizing the most direct methods: OS APIs, AppleScript, CDP (Chrome DevTools Protocol), and Accessibility. This design ensures reliability and speed, only resorting to screen-touching methods when absolutely necessary.

This is not just another UI automation tool. It is a thoughtful engineering blueprint for truly autonomous, background agentic operations, demonstrating how to build robust interaction layers between LLMs and complex operating systems. You will learn about the practical considerations and technical choices behind enabling AI to silently and effectively control desktop environments.
