---
title: Kit streamlines coding agents with a single-tool runtime
source: github
url: https://github.com/speakeasy-api/kit
date: '2026-09-02'
tags:
- agent-client-protocol
- catchup
- coding-agent-runtime
- github
- orchestration
- runlet
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49537801'
comments: https://news.ycombinator.com/item?id=49537801
why_read: This text introduces Kit, a coding agent runtime designed for efficiency.
  Readers will learn how Kit simplifies agent interactions by providing a single tool
  and an Agent Client Protocol (ACP) for faster and cheaper operations.
authors:
- danielkov
---

Building AI agents often means a flurry of back-and-forth between the LLM and its tools, racking up tokens and latency. Kit, an open-source coding agent runtime, tackles this head-on with a clever design shift.

Instead of exposing many individual tools, Kit gives the model one powerful `compose` tool that accepts a short program written in Runlet. This means an agent can express a complex sequence of operations, like fetching code, analyzing it, and proposing a fix, all within a single model round trip.

This design significantly cuts token usage and latency, making agents faster and more cost-effective. It is a brilliant example of how better context engineering and tool abstraction can lead to dramatically more capable AI systems. Kit helps engineers move beyond simple tool calls to truly orchestrate complex agentic workflows.
