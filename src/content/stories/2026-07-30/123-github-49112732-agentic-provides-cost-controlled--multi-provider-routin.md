---
authors:
- Maor Bril
comments: https://news.ycombinator.com/item?id=49112732
date: '2026-07-30'
depth_score: 7
hn_id: '49112732'
image: /infographics/123-github-49112732-agentic-provides-cost-controlled--multi-provider-routin.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- agentic
- catchup
- claude-code
- cost-tracking
- github
- llm-gateway
- llm-routing
title: Agentic Provides Cost-Controlled, Multi-Provider Routing for Claude Code
url: https://github.com/MaorBril/agentic
utility_score: 9
why_read: This text introduces agentic, a tool that enhances Claude Code by enabling
  multi-provider LLM routing and precise cost tracking. Readers will learn how to
  overcome Claude Code's provider limitations and manage LLM expenses through a flexible
  gateway.
---

You are building with Claude Code but need more flexibility: what if you want to use OpenAI, xAI, or even local Ollama models? And how do you track and manage your LLM spend across different providers? `agentic` is the open-source solution you need.

This tool wraps the Claude Code TUI, acting as a local gateway. It transparently routes your requests to various LLM providers based on budgets and LLM-triaged tier routing. This means you can run the same Claude-like sessions with different backend models, ensuring cost efficiency and avoiding vendor lock-in without changing your workflow.

This is a critical piece of infrastructure for any engineer building applied AI agents. It provides the control and visibility necessary to manage complex multi-provider LLM deployments effectively.