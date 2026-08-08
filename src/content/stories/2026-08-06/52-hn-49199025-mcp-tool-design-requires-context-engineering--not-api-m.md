---
authors:
- Roland Huß
comments: https://news.ycombinator.com/item?id=49199025
date: '2026-08-06'
depth_score: 8
hn_id: '49199025'
image: /infographics/52-hn-49199025.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- api-design
- catchup
- context-engineering
- hn
- llms
- mcp-tools
- tool-selection-accuracy
title: MCP tool design requires context engineering, not API mirroring
url: https://ro14nd.de/mcp-tool-design-patterns/
utility_score: 9
why_read: This article explains why directly mirroring existing APIs for LLM-based
  MCP tools causes problems like tool confusion and context bloat. Readers will learn
  that effective MCP tool design is fundamentally a context engineering challenge,
  not an API design problem.
---

When building tools for LLM-based agents, treating them like a traditional API consumer is a critical mistake. LLMs evaluate all tool definitions at once, leading to significant token waste and decreased selection accuracy as the number of tools grows.

This is not an API design problem; it is a context engineering problem. Data from Anthropic and AWS show that tool selection accuracy for models like Claude Haiku 4.5 can drop below 90 percent with just 10-15 tools. Each tool definition consumes valuable context window space, whether it is used or not, distracting the model.

To build effective agents, engineers must optimize tool definitions for clarity and conciseness, focusing on granular, purpose-built tools rather than mirroring broad API endpoints. This approach will improve agent reliability, reduce inference costs, and prevent common failure modes.