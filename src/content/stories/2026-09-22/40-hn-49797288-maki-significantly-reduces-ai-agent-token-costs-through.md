---
title: Maki significantly reduces AI agent token costs through smart indexing
source: hn
url: https://maki.sh/
date: '2026-09-22'
tags:
- ai-agents
- catchup
- code-parsing
- context-management
- hn
- structured-information
- token-efficiency
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49797288'
comments: https://news.ycombinator.com/item?id=49797288
why_read: This text details how the maki system optimizes AI agent performance and
  reduces token costs. Readers will learn about maki's innovative features like intelligent
  indexing and context compaction for efficient information processing.
authors:
- abc42
---

The secret to a truly efficient AI agent is not just a powerful model, it is ruthless context management. 'Maki', an AI coding assistant, exemplifies this with several brilliant token-saving strategies.

Instead of feeding the entire codebase, Maki parses files into concise 'skeletons' using tree-sitter, showing only imports, type definitions, and function signatures. This cuts token usage by eliminating irrelevant code from the prompt, improving focus.

Another smart move is dynamic tool loading: instead of stuffing all tool definitions into context, Maki hides them behind a search tool. It only loads what the model requests, significantly trimming prompt size. Combined with sandboxed execution and adaptive model tiering (Haiku for grep, Opus for architecture), this system offers unparalleled efficiency.

For engineers building production LLM applications, these techniques are a goldmine. It teaches that optimizing the *flow* and *structure* of information to the model is paramount for both performance and cost-effectiveness. It is context engineering at its finest.
