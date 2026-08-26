---
authors:
- 0xkato
comments: https://news.ycombinator.com/item?id=49426433
date: '2026-08-24'
depth_score: 9
hn_id: '49426433'
image: /infographics/05-hn-49426433.jpg
interest_score: 9
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- codex-ai
- hn
- llm-context
- request-size
- system-instructions
- token-count
- tooling
title: Codex sends substantial hidden data with simple user prompts
url: https://www.0xkato.xyz/what-codex-actually-sends-to-the-model/
utility_score: 9
why_read: Read this to understand the hidden bulk of data Codex sends to its language
  model, far exceeding the user's simple prompt. It reveals how system instructions,
  tools, and context significantly inflate token counts, impacting cost and privacy.
---

Have you ever wondered what an AI coding assistant *really* sends to the model when you give it a simple prompt? The answer is likely far more complex, and much larger, than you expect.

A fascinating empirical analysis of Codex reveals that a 16-character prompt translated into a request of over 42,000 bytes, consuming around 9,435 tokens. The user's actual input? A mere 0.3 percent. The vast majority was internal instructions, tool definitions, permissions, skill metadata, and environmental context.

This insight is critical for anyone building or optimizing LLM-powered agents. Understanding this hidden token overhead is paramount for effective prompt engineering, managing API costs, and designing efficient context management strategies like history compaction. It underscores that optimizing LLM usage is less about your prompt and more about the surrounding framework.