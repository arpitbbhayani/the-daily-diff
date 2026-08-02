---
authors:
- Thomeras
comments: https://news.ycombinator.com/item?id=49111859
date: '2026-07-30'
depth_score: 8
hn_id: '49111859'
image: /infographics/126-github-49111859-agent-detective-names-culprit-in-multi-agent-systems-ev.jpg
interest_score: 8
novelty_score: 7
section: ai
source: github
tags:
- blame-analysis
- catchup
- evaluation-framework
- github
- multi-agent-systems
- opentelemetry
- trace-analysis
title: Agent Detective Names Culprit in Multi-Agent Systems Evaluation Framework
url: https://github.com/Thomeras/agent_detective
utility_score: 9
why_read: This describes Agent Detective, an evaluation framework for multi-agent
  systems. You will learn how it uses OpenTelemetry traces to reconstruct execution
  graphs and pinpoint the origin of quality breaks, helping to diagnose failures efficiently.
---

Debugging complex multi-agent systems is notoriously difficult, but Agent Detective offers a compelling solution. This open-source evaluation framework ingests standard OpenTelemetry traces, reconstructs the execution graph, and then applies blame analysis to pinpoint exactly where an agent's performance broke down. It is a game-changer for understanding why your agents fail.

What makes this truly powerful is its OTEL-native approach. If your agents are already instrumented with OpenInference or OpenLLMetry, Agent Detective works out of the box with no code changes. This means you can integrate sophisticated evaluation and debugging into your existing LLM infrastructure and applied AI projects immediately.

You will gain critical insights into agent behavior, identify the root causes of failures, and improve the reliability of your agentic workflows. This tool provides practical, actionable diagnostics for production-ready multi-agent systems.