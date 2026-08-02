---
authors:
- zozo123-IB-IL2
comments: https://news.ycombinator.com/item?id=49111656
date: '2026-07-30'
depth_score: 7
hn_id: '49111656'
image: /infographics/128-hn-49111656-wasted-cycles-pinpoints-machine-stalls-to-optimize-agen.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- agent-loop
- catchup
- ci
- github-actions
- hn
- machine-stalls
- profiling
- workflow-optimization
title: Wasted Cycles pinpoints machine stalls to optimize agent loop efficiency
url: https://zozo123.github.io/wasted-cycles/
utility_score: 9
why_read: This text introduces Wasted Cycles, a profiler that helps identify and fix
  machine stalls blocking agent work and CI workflows. Readers will learn how to gain
  insights into system performance and optimize execution time.
---

Building AI coding agents is one thing, but making them perform efficiently is another. Many developers struggle to pinpoint why their agents are slow or stuck, often attributing it to the LLM itself when the problem lies elsewhere.

"Wasted Cycles" is a new local wall-clock profiler specifically designed for AI agent workflows. It helps you identify precisely where machine time is being blocked, whether by builds, tests, CI, containers, or even sub-agents.

This tool allows you to differentiate between active agent work, actual machine stalls, and human wait time. By shining a light on these hidden bottlenecks, you can optimize your agent's performance, ensuring it spends less time waiting and more time doing.