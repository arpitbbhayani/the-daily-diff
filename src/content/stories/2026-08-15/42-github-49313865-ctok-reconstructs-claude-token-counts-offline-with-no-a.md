---
title: ctok Reconstructs Claude Token Counts Offline with No API
source: github
url: https://github.com/sanderland/ctok
date: '2026-08-15'
tags:
- catchup
- claude-tokenizer
- github
- large-language-models
- offline-processing
- token-counting
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49313865'
comments: https://news.ycombinator.com/item?id=49313865
why_read: Read this to learn about ctok, an unofficial tool that allows offline reconstruction
  of Claude's token counts without API calls. It provides a way to estimate token
  usage locally for LLM development.
authors:
- sanderland
---

Working with LLMs means constantly battling token limits and costs. For Claude models, getting accurate token counts often means hitting the API, but "Ctok" changes that entirely. This open-source project successfully reconstructs Claude's tokenizer, allowing you to get precise token counts offline, without any API calls or network access.

This is a huge win for anyone building LLM applications. Imagine precisely managing your token budgets, optimizing prompts, and even running local development and testing without incurring API costs or waiting on network latency. It makes working with Claude far more efficient and predictable.

The depth of this reconstruction, targeting token *counts* through techniques like minimum-cost tiling, is an impressive feat of reverse-engineering and algorithmic insight. This tool is not just convenient; it is an essential piece of infrastructure for serious LLM engineering.
