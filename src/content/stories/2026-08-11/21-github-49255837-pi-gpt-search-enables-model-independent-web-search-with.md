---
title: Pi-GPT-Search Enables Model-Independent Web Search with Zero GPT Costs
source: github
url: https://github.com/mateusdcc/pi-gpt-search
date: '2026-08-11'
tags:
- catchup
- github
- model-independent
- openai-codex
- pi-gpt-search
- web-search
- zero-gpt-tokens
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49255837'
comments: https://news.ycombinator.com/item?id=49255837
why_read: This tool enables any Pi model to perform real-time web searches by reusing
  OpenAI Codex's infrastructure without consuming GPT tokens or requiring LLM inference
  turns. Readers will learn how to integrate cost-effective and model-independent
  web retrieval into their Pi applications.
authors:
- mateusdcc
---

Giving your LLM real-time web access usually means a hefty token bill or complex RAG setups. This project shows how to bypass that, enabling any model (Claude, local, OpenRouter) to use OpenAI Codex's web retrieval infrastructure without burning a single GPT token.

This is not just an API wrapper; it is an impressive feat of reverse engineering. The core insight is leveraging a proprietary, optimized web search endpoint that was likely designed to feed a model, making it available as a standalone, model-independent tool.

The implications for applied AI and agentic systems are huge. You can equip your agents with robust, real-time information access at effectively zero inference cost, which is a game-changer for reducing operational expenses and improving agent performance. This is smart context engineering at its best.
