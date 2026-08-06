---
title: cMCP enforces confidential MCP tool policy inside a TEE
source: github
url: https://github.com/agentrust-io/cmcp
date: '2026-08-04'
tags:
- catchup
- confidential-computing
- github
- mcp-gateway
- policy-enforcement
- trusted-execution-environment
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49172545'
comments: https://news.ycombinator.com/item?id=49172545
why_read: This describes cMCP, a confidential gateway that enforces MCP tool policy
  within a Trusted Execution Environment. Readers will learn how it provides hardware-attested
  security for agent-governed tool calls.
authors:
- mosiddi
---

Enforcing granular policy on AI agent tool calls is a major challenge, especially when you need guarantees that the agent cannot subvert the rules. Traditional methods often fall short, leaving gaps in trust and control.

cMCP presents an elegant and robust solution: it enforces Model Context Protocol (MCP) tool policy *inside a Trusted Execution Environment (TEE)*. This means the policy enforcement happens in a hardware-attested, isolated environment, making it virtually impossible for the agent itself to reach or tamper with the rules.

This project directly addresses critical security and reliability concerns for AI agent developers. By using TEEs for tool call governance, you gain verifiable control and even get signed receipts for policy decisions, significantly enhancing the trustworthiness of your agentic systems.
