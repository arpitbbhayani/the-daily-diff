---
title: Monitoring and inspecting live coding agent sessions
source: github
url: https://github.com/markwylde/all-your-agents
date: '2026-09-22'
tags:
- api
- catchup
- cli
- coding-agents
- compatibility
- event-driven
- github
- session-management
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49799267'
comments: https://news.ycombinator.com/item?id=49799267
why_read: This text introduces 'all-your-agents', a tool for managing and inspecting
  live coding agent sessions. Readers will learn about its event-driven API and specific
  compatibility considerations for various AI coding agents like Claude, Grok, and
  Codex.
authors:
- markwylde
---

Developing and debugging AI agents often feels like working in a black box. The "all-your-agents" project on GitHub changes that by offering an event-driven, harness-neutral API and CLI to watch and inspect live coding-agent sessions. 

This tool provides crucial visibility into how your agents are actually behaving, what tools they are using, and the state of their sessions, regardless of whether you are using Claude, Grok, or Codex. For example, it tracks how Grok handles tool calls and error messages, or how Codex persists approval requests. 

For any senior engineer building multi-agent systems or working with LLM infrastructure, this is an indispensable utility. It helps you understand agent quirks, identify bottlenecks, and ultimately build more reliable and predictable AI-powered workflows.
