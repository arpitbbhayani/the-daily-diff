---
title: Slash-tokens optimizes LLM usage and estimates costs before API calls
source: github
url: https://github.com/Wolfe-Jam/slash-tokens
date: '2026-08-25'
tags:
- api-intercept
- catchup
- context-engineering
- github
- llm-cost-estimation
- token-optimization
- wasm
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49441725'
comments: https://news.ycombinator.com/item?id=49441725
why_read: This tool optimizes LLM token usage and provides pre-call cost estimation,
  helping context engineers manage expenses and understand resource consumption in
  their applications.
authors:
- wolfejam
---

Managing LLM costs can be tricky, especially when token usage explodes with complex prompts or agents. A new open-source tool, Slash-tokens, offers a compelling solution: it estimates LLM token costs *before* your API call even leaves your machine.

This 4.8 KB WASM-based utility runs in sub-millisecond time with zero dependencies, making it incredibly lightweight. It works by intercepting fetch() requests to major LLM providers like Anthropic, OpenAI, xAI, and Google, providing real-time feedback on token counts and estimated cost.

This pre-call check is a game-changer for engineers building with LLMs. It empowers you to proactively optimize prompts, understand cost implications, and debug unexpected token usage without waiting for bill surprises. It exemplifies smart LLM infrastructure development, focusing on efficiency and immediate feedback.
