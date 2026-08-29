---
authors:
- Factory Research
- Theo Luan
comments: https://news.ycombinator.com/item?id=49471485
date: '2026-08-27'
depth_score: 8
hn_id: '49471485'
image: /infographics/45-hn-49471485.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- catchup
- coding-agents
- hn
- large-software-tasks
- programbench
- self-supervision
title: Agents autonomously define criteria to complete large software tasks
url: https://factory.com/news/what-it-takes-for-coding-agents-to-complete-large-software-tasks
utility_score: 8
why_read: This article explores how coding agents can complete large software tasks
  by creating their own success criteria. Readers will learn about the challenges
  and mechanisms of agent self-supervision in complex software development, specifically
  how models can close the loop on their own.
---

Coding agents are impressive for well-defined, compact tasks, but they often fall short on complex, long-horizon software projects. This research dives into why, offering crucial insights for anyone trying to build truly autonomous agents.

The core issue is how agents validate their own progress. While they excel at solving small, local problems and checking individual sub-tasks, they struggle to "close the loop" on a large project. They build their own piecewise completion criteria, which often do not align with the overall project goal.

Understanding this limitation is vital. It is not just about giving agents more context or larger models, but fundamentally rethinking how they measure success across a protracted development lifecycle. This points to critical areas for future agentic AI research and development.