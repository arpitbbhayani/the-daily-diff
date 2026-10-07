---
title: Extra Headroom cuts Claude Code token usage by a third
source: hn
url: https://extraheadroom.com/blog/claude-code-savings-real-usage
date: '2026-10-06'
tags:
- catchup
- claude-code
- cost-reduction
- hn
- local-proxy
- prompt-caching
- token-compression
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49978145'
comments: https://news.ycombinator.com/item?id=49978145
why_read: Learn how running a reversible, content-aware local proxy significantly
  reduces LLM input and output token costs without breaking prompt caching. It offers
  concrete production metrics and mechanistic insights into context compression for
  developer tools.
authors:
- Garm Lucassen
---

Large language model coding agents create enormous context bloat by repeatedly appending raw tool results, compiler traces, and file reads. Production data collected from 183 developers running Claude Code revealed that a content-aware local proxy reduced input tokens by 34 percent and output tokens by 33 percent over one week.

Across ten billion baseline tokens, the proxy eliminated 3.5 billion input tokens and saved over 27,000 dollars at standard API rates. The mechanism intercepts outgoing requests, identifies non-critical content like repetitive build logs or verbose JSON payloads, and compresses them before dispatch. The full context remains cached locally on disk, enabling the model to retrieve specific raw lines through a tool call only when needed.

Crucially, the architecture preserves existing prompt cache boundaries so provider cache hit rates do not degrade. Output volume was simultaneously reduced by instructing the model toward concise responses, which lowers generation latency alongside token spend.

Managing context as an evictable cache rather than an append-only log is an essential optimization pattern for production agent harnesses.
