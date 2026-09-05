---
title: TDQS scores tool definition quality for AI agent communication
source: hn
url: https://tdqs.dev
date: '2026-09-03'
tags:
- agent-communication
- catchup
- evaluation-rubric
- hn
- mcp-tools
- quality-metrics
- tool-definition-quality-score
- tool-descriptions
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49553343'
comments: https://news.ycombinator.com/item?id=49553343
why_read: This text introduces TDQS, a specification for scoring the quality of tool
  definitions for AI agents. Readers will learn how a systematic, multi-dimensional
  approach can evaluate and improve how well agents understand and utilize tools,
  leading to more reliable AI systems.
authors:
- punkpeye
---

Building robust AI agents often fails not because of the LLM itself, but due to poorly defined tools. The Tool Definition Quality Score (TDQS) offers a novel, open specification to systematically grade how effectively your agent tools are described.

TDQS assesses tool definitions across six weighted dimensions, combining deterministic code analysis with model-based judging. This approach moves beyond subjective descriptions, providing a concrete, verifiable score that can be integrated into CI/CD pipelines.

This is a critical step for serious agent development. You can gate releases on tool quality, ensuring that every tool speaks clearly and unambiguously to the agent. It is about engineering better interfaces for AI systems.
