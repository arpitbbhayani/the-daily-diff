---
authors:
- Thomeras
comments: https://news.ycombinator.com/item?id=49100935
date: '2026-07-29'
depth_score: 7
hn_id: '49100935'
image: /infographics/94-github-49100935.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- evaluation-framework
- execution-tracing
- github
- multi-agent-systems
- opentelemetry
- root-cause-analysis
title: Evaluation framework for multi-agent systems names the culprit
url: https://github.com/Thomeras/agent_detective
utility_score: 9
why_read: Read this to understand how to evaluate multi-agent systems and pinpoint
  failure origins. It explains an OTEL-native framework for tracing execution and
  identifying where quality breaks.
---

Debugging multi-agent systems can feel like finding a needle in a haystack, especially when failures cascade through complex pipelines. Agent Detective offers a compelling solution.

This framework ingests standard OpenTelemetry traces, automatically reconstructs the agent execution graph, and then performs a blame analysis to pinpoint the exact agent that introduced an error. This is not just about error logging; it is about root cause identification in a dynamic, multi-component AI system.

By using existing OpenTelemetry instrumentation, it integrates seamlessly into modern observability stacks. This approach is a game-changer for anyone building or maintaining complex AI agentic workflows, moving from reactive debugging to proactive failure isolation.