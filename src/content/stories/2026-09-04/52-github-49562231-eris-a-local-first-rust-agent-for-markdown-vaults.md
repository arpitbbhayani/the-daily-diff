---
title: Eris A Local-First Rust Agent for Markdown Vaults
source: github
url: https://github.com/janpauldahlke/eris
date: '2026-09-04'
tags:
- catchup
- github
- grammar-enforced-tools
- llm
- local-first
- markdown
- obsidian-compatible
- privacy
- rust
- semantic-memory
- vault-agent
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49562231'
comments: https://news.ycombinator.com/item?id=49562231
why_read: This text describes Eris, a local-first vault agent built in Rust, that
  integrates a local LLM with Markdown notes. Readers will learn about an approach
  to personal knowledge management that emphasizes data sovereignty, local processing,
  and grammar-enforced tool calls.
authors:
- janpauldahlke
---

The future of AI agents does not have to be cloud-dependent. ERIS, a local-first vault agent written in Rust, demonstrates a powerful paradigm: running an LLM (via llama.cpp) entirely on your machine, with your Markdown notes as its memory.

What truly stands out is its "grammar-enforced tool calls." Instead of relying on complex function-calling APIs, ERIS uses a GBNF grammar to structurally enforce JSON protocol for tool interactions. This ensures robust and predictable agent behavior, enhancing reliability and control.

This project is a blueprint for building privacy-sovereign AI agents. You will gain insights into tiered semantic memory, local LLM integration, and a practical approach to agentic systems that prioritize user control and data privacy.
