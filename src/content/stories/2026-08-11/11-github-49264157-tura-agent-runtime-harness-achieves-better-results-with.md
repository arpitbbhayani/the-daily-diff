---
title: Tura agent runtime harness achieves better results with fewer tokens
source: github
url: https://github.com/Tura-AI/tura
date: '2026-08-11'
tags:
- agent-runtime
- catchup
- command-graph
- deterministic-execution
- github
- react-architecture
- token-efficiency
- tura
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49264157'
comments: https://news.ycombinator.com/item?id=49264157
why_read: This text introduces Tura, an open-source agent runtime that significantly
  reduces token usage and improves performance by optimizing agent execution through
  a command graph, offering an alternative to multi-turn ReAct architectures.
authors:
- turaainet
---

The typical ReAct agent workflow can be a token guzzler, requiring multiple model round trips for a single task. A new open-source runtime harness, Tura, significantly cuts LLM turns and token usage by transforming these multi-step processes into a single, deterministic command graph.

Instead of the model re-entering after every tool result, repeatedly carrying a growing context, Tura executes the entire workflow in one turn. This translates to performance improvements and a substantial token-budget advantage, evidenced by cutting turns by 77.5 percent across DeepSWE v1.1 tasks.

This approach offers a tangible architectural shift for building more efficient and cost-effective AI agents. It changes how you think about agent orchestration and context management.
