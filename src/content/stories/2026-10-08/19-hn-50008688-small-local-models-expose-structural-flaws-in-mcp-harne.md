---
title: Small local models expose structural flaws in MCP harnesses
source: hn
url: https://portlandaiworks.com/articles/local-model-harness-for-mcp
date: '2026-10-08'
tags:
- agent-harness
- catchup
- client-instructions
- hn
- local-llms
- model-context-protocol
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50008688'
comments: https://news.ycombinator.com/item?id=50008688
why_read: Understand how popular local model clients silently discard MCP server instructions
  and learn how small models reveal tool-use failure modes.
authors:
- Portland AI Works
---

Local language models often fail on enterprise agent workflows not because the model parameters are small, but because local orchestration clients discard crucial system prompts.

When testing local models against enterprise resource planning tools via the Model Context Protocol, popular chat runtimes were found to strip connect-time server doctrine entirely. They forwarded raw tool signatures while omitting validation rules, terminology definitions, and sequence constraints. Without those instructions, even capable models make erratic schema mutations.

Fixing this discrepancy requires building custom harnesses that treat MCP protocol metadata as first-class context rather than optional decoration. When developing agent infrastructure, you must verify what your client harness actually transmits to the model context window.
