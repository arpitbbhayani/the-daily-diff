---
title: MCP hosts enforce conflicting rules beyond the base specification
source: hn
url: https://pournasserian.com/writing/what-ai-hosts-require-of-an-mcp-server
date: '2026-10-10'
tags:
- catchup
- hn
- host-compatibility
- mcp-specification
- model-context-protocol
- schema-validation
- tool-naming-constraints
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50034182'
comments: https://news.ycombinator.com/item?id=50034182
why_read: Read this to understand how different host platforms impose contradictory
  requirements on MCP servers beyond the base standard. You will learn the practical
  compatibility constraints across Claude, ChatGPT, and command-line developer tools.
authors:
- pournasserian
---

Building a Model Context Protocol server that strictly adheres to the official specification does not guarantee that it will actually run. A deep audit across eight prominent hosts reveals a fragmented landscape of conflicting, undocumented constraints that break compliance in unexpected ways.

For instance, the base specification allows tool names up to 128 characters, yet Claude directories and Kiro cap them at 64, while Gemini CLI silently truncates identifiers past 63 characters. Similarly, character validation diverges wildly across clients: some hosts allow periods and hyphens, whereas others reject them outright during initialization. Tool annotations remain optional in the formal standard, but both Claude and ChatGPT will reject servers that omit them.

Nearly half of these rules can be caught through static schema analysis, but runtime rejections often hinge on subjective host evaluations of descriptions and prompt injection safeguards.

If you are developing tool servers for widespread deployment, do not rely solely on the official specification. Validate your tool metadata against host-specific rule sets early to prevent runtime rejections.
