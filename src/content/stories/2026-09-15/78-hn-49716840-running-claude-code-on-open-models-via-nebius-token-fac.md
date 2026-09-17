---
authors:
- AbdulMajed Raja
comments: https://news.ycombinator.com/item?id=49716840
date: '2026-09-15'
depth_score: 8
hn_id: '49716840'
image: /infographics/78-hn-49716840.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-agents
- api-relay
- catchup
- claude-code
- docker
- hn
- nebius-token-factory
- open-models
- python
title: Running Claude Code on open models via Nebius Token Factory
url: https://dev.nebius.com/cookbook/claude-code-token-factory-relay
utility_score: 9
why_read: This guide demonstrates how to run Anthropic's Claude Code using open models
  from Nebius Token Factory via a local Python relay, enabling cost-effective, headless
  coding tasks with real tool use.
---

Integrating open-source LLMs into your existing AI agent workflows does not have to be a hack. This guide presents a clean, production-minded blueprint for a Python relay application.

The core idea is an API translation layer. It teaches you how to map Anthropic Messages API calls to an OpenAI-compatible endpoint like Nebius Token Factory, allowing tools like Claude Code to leverage models such as Kimi K2.7 Code.

You get a full breakdown: handling system messages, flattening content blocks, mapping `max_tokens` and `temperature`, and transforming `tool_use` into OpenAI function tools. It even covers Dockerization and testing, all using only the Python standard library.

This is a highly actionable blueprint for expanding your AI agent capabilities with open models, without touching your existing client configurations. A must-read for practical LLM infrastructure engineering.