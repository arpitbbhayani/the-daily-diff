---
title: Claude Code and Codex fail on completely different protocol features
source: hn
url: https://m3.sineframe.com/blog/claude-code-vs-codex-mcp
date: '2026-10-10'
tags:
- catchup
- claude-code
- codex
- hn
- input-schema
- mcp
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50033782'
comments: https://news.ycombinator.com/item?id=50033782
why_read: Read this to understand specific compatibility quirks and failure modes
  between Claude Code and Codex when handling Model Context Protocol features. You
  will learn which schema patterns and response structures break each agent harness.
authors:
- stag
---

Building a Model Context Protocol server does not guarantee that different AI agents will invoke it reliably. Testing Claude Code and Codex against ten standard MCP server features revealed that half of the features worked on one runtime while failing completely on the other.

The failure patterns were mutually exclusive and deeply disruptive. Claude Code quietly ignored any tool with an argument named with array brackets, and it completely dropped structured tool results when text was also present. Meanwhile, Codex failed on schemas exceeding fourteen kilobytes with required nested fields, and it dropped tools that were registered after runtime tool-list updates.

Neither runtime surfaced an informative error when these failures occurred. The harness simply dropped the tool or hallucinated invalid arguments, leaving the underlying agent blind.

Standardizing the protocol is useless if client harnesses silently mutate or swallow tool definitions.
