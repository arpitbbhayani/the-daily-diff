---
title: Recording agent traces creates cheaper and faster deterministic workflows
source: github
url: https://github.com/mourad-baazi/hotpath
date: '2026-10-01'
tags:
- ai-agents
- catchup
- github
- llm-optimization
- tool-calling
- workflow-automation
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49922532'
comments: https://news.ycombinator.com/item?id=49922532
why_read: Learn how Hotpath compiles repetitive AI agent runs into deterministic code
  workflows to save time and reduce model inference costs.
authors:
- Mourad Baazi
---

Running frontier models repeatedly over identical sequences of tool calls is expensive, slow, and non-deterministic. Most autonomous agent tasks execute the same core integration steps on every run, yet teams continue to pay full inference costs for predictable execution paths.

Hotpath introduces a trace and compile pattern for agent architectures. It records an agent during its initial task execution and compiles the resulting tool invocations into a deterministic code workflow, reserving LLM calls solely for steps that require contextual judgment.

If environment schemas shift or a tool fails downstream, the runtime falls back to the agent to record a fresh trace and heal itself. This approach turns brittle agent scripts into robust, cost effective backend workflows.
