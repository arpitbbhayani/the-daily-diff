---
title: Agent-chaperone acts as a calibrated firewall for AI agent tools
source: github
url: https://github.com/agent-chaperone/agent-chaperone
date: '2026-09-21'
tags:
- ai-agent
- catchup
- firewall
- github
- observability
- policy-file
- proxy
- screening
- shadow-mode
- tool-calls
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49789538'
comments: https://news.ycombinator.com/item?id=49789538
why_read: This describes a tool to ensure the safe and controlled execution of AI
  agent tool calls. Readers will learn about a configurable firewall that offers probabilistic
  decision-making and comprehensive logging, enabling users to define policies and
  observe agent behavior.
authors:
- sepehrsafari
---

Deploying AI agents reliably in production means confronting their unpredictability, especially around tool use. Agent Chaperone tackles this head-on, acting as an essential firewall for agent tool calls and their results.

This open-source project provides a crucial layer of control, screening outgoing tool calls *before* they execute and incoming results *before* the agent processes them. It operates based on configurable policy files, allowing engineers to define probability thresholds for acceptable actions, rather than relying on brittle prompt engineering.

What is particularly clever is its "shadow mode" feature. You can deploy it to log all decisions without blocking anything, allowing you to fine-tune policies based on real-world agent behavior before enforcing them. This provides invaluable feedback for building safer, more predictable agentic systems. This is not just a a nice-to-have; it is a critical component for anyone serious about production-grade AI agents.
