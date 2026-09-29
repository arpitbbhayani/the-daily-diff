---
title: Automated browser exploration finds frontend bugs without test suites
source: github
url: https://github.com/awss1i/assay
date: '2026-09-28'
tags:
- browser-automation
- catchup
- coding-agents
- frontend-testing
- github
- ui-debugging
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49880278'
comments: https://news.ycombinator.com/item?id=49880278
why_read: Learn how Assay tests web controls in Chromium to deterministically catch
  and explain UI bugs without writing tests or calling LLMs. It provides a reliable
  feedback loop for developers and automated coding agents.
authors:
- awss1i
---

Automated frontend testing usually forces a trade-off between brittle hand-written integration suites and non-deterministic LLM-driven browser testers. Assay takes a different approach by running headless Chromium, discovering every interactive control on the page, and systematically exercising them without writing a single test or making an LLM call.

The tool detects regressions and state anomalies directly, such as delayed UI reactions where an action only registers on the second click, and deduplicates related failures automatically. It also ships with agent harness plugins for Claude Code and DeepSeek, providing an instant deterministic feedback loop after code generation.

Adding deterministic, zero-config verification to your local development and agent workflows catches simple UI state regressions before they reach staging.
