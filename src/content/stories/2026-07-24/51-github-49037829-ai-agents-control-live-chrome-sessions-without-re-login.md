---
authors:
- vitalysim
comments: https://news.ycombinator.com/item?id=49037829
date: '2026-07-24'
depth_score: 7
hn_id: '49037829'
image: /infographics/51-hn-49037829.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-agents
- catchup
- chrome-automation
- devtools
- github
- model-context-protocol
title: AI agents control live Chrome sessions without re-login
url: https://github.com/vitalysim/browser-bridge
utility_score: 8
why_read: This describes a novel tool, Browser Bridge, that allows AI agents to control
  a real, logged-in Chrome browser. It explains how this approach inherits authenticated
  sessions and enables advanced capabilities like DevTools-grade network capture and
  web-security testing within live contexts.
---

Imagine your AI agent navigating complex web applications, interacting with your logged-in sessions, and even performing security tests – all without needing a separate headless browser or re-authentication. This project, Browser Bridge, enables exactly that for Claude Code and OpenAI Codex.

It works by driving your *real* Chrome instance, inheriting cookies, SSO, and 2FA states. This is a game-changer for agents needing to perform tasks on authenticated sites, offering over 60 tools including DevTools-grade network capture and web-security testing.

This is not just another browser automation tool; it is a powerful bridge for applied AI that tackles a fundamental challenge in agentic web interaction.