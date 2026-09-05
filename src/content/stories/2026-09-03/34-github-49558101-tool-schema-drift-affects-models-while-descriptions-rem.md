---
title: Tool schema drift affects models while descriptions remain unchanged
source: github
url: https://github.com/GautamTalksDev/mcp-pin/blob/main/docs/findings/2026-09-03-schema-drift.md
date: '2026-09-03'
tags:
- ai-models
- api-schema
- catchup
- github
- human-review
- schema-drift
- tool-definitions
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49558101'
comments: https://news.ycombinator.com/item?id=49558101
why_read: This analysis reveals a critical discrepancy where underlying tool schemas
  change without visible updates in their descriptions. Readers will learn how this
  'schema drift' can significantly impact AI model behavior and expose a major blind
  spot in human review processes.
authors:
- Gautam Khosla
---

A subtle but critical problem in LLM agent development is schema drift in tool definitions. This report reveals that many underlying tool schemas can change without any updates to their human-readable descriptions.

This creates a dangerous mismatch: a human reviewing a tool's description sees no change, but the LLM, which also parses the schema, interprets a completely different specification. This can lead to unpredictable agent behavior and system failures that are incredibly difficult to debug.

The implications are clear for engineering practices around AI agent reliability. You must ensure your tool descriptions and their underlying schemas are tightly synchronized and versioned. What you show the human should exactly match what the model sees.

Guard against silent schema changes; they are agent killers.
