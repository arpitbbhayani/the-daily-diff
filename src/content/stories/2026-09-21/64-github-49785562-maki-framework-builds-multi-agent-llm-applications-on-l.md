---
title: Maki framework builds multi-agent LLM applications on local models with guardrails
source: github
url: https://github.com/BowlOfData/maki
date: '2026-09-21'
tags:
- ai-framework
- catchup
- github
- guardrails
- local-models
- multi-agent-llm
- ollama
- tool-using-agents
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49785562'
comments: https://news.ycombinator.com/item?id=49785562
why_read: This describes Maki, a Python framework for multi-agent LLM applications.
  You will learn how it enables running agents on local models with built-in guardrails
  and seamless integration of hosted APIs.
authors:
- bowlofdata
---

Building robust multi-agent LLM systems often means juggling local and hosted models, each with their own APIs and deployment headaches. Maki changes this by providing a unified Python framework for both.

It abstracts away the LLM backend, treating Ollama (for local models) and hosted APIs like OpenAI as equals. This means you can prototype with local models and scale to hosted ones (or vice versa) without rewriting agent code.

Crucially, Maki emphasizes guardrails from the start. Requests touching files or the web go through a hardened connector, checking against private and reserved address ranges. This is smart engineering for production-ready agents.

This framework simplifies a complex problem, allowing engineers to focus on agent logic, not infrastructure.
