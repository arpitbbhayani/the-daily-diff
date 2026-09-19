---
title: GraphQL-over-MCP tools are more token-efficient and cost-effective
source: github
url: https://github.com/apollographql/graphql-mcp-benchmarks/blob/main/WRITEUP.md
date: '2026-09-17'
tags:
- agentic-tasks
- catchup
- federation
- field-selection
- github
- graphql
- inference-costs
- mcp-tools
- rest-api
- schema-language
- token-efficiency
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49741162'
comments: https://news.ycombinator.com/item?id=49741162
why_read: This writeup demonstrates why GraphQL-backed MCP tools achieve greater token
  efficiency and lower inference costs for agentic tasks compared to REST APIs. Readers
  will learn about the key mechanisms that contribute to GraphQL's superior performance
  in these benchmarks.
authors:
- jdauriemma
---

Most agent frameworks fail not because the underlying model is weak, but because the harness feeds it the wrong context at the wrong time. This benchmark suite proves GraphQL-backed tools are significantly more token-efficient for AI agents compared to REST APIs.

Why the efficiency gap? GraphQL's default field selection, strong schema type language, and server-side join capabilities reduce the cognitive load and token count for LLMs. This is not just theoretical; it translates directly to lower inference costs and better task success.

If you are building LLM-backed agents, rethinking your API strategy to leverage GraphQL could be a game-changer for cost and performance.
