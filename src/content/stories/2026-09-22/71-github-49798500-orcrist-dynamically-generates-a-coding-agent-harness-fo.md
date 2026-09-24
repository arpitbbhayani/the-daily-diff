---
title: Orcrist dynamically generates a coding agent harness for each task
source: github
url: https://github.com/simone20a/Orcrist
date: '2026-09-22'
tags:
- catchup
- desktop-coding-agent
- dynamic-harness
- finite-state-machine
- github
- model-authoring
- per-task-artifact
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49798500'
comments: https://news.ycombinator.com/item?id=49798500
why_read: This describes a novel approach to coding agents where the control loop
  (harness) is generated dynamically per task by a separate model. Reading it provides
  insight into advanced AI agent architectures, particularly how to make agents more
  adaptable and robust by separating the "how-to-do" from the "what-to-do".
authors:
- simone20a
---

Most AI agent frameworks utilize a static "harness" or control loop that defines how the agent operates, handles tools, and manages tasks. What if that harness itself was dynamically generated for every single task?

Orcrist, a new desktop coding agent, takes this novel approach. A stronger meta-model writes the agent's task-specific harness as a finite state machine, allowing the core execution logic to be fully customized and inspectable before any code is touched.

This design fundamentally enhances robustness and flexibility. Engineers can review and correct the agent's intended workflow for a specific task, leading to more predictable outcomes and easier debugging compared to opaque, fixed loops.

Moving the harness from static code to a dynamically generated artifact shifts the paradigm for agent design, offering a path towards agents that are not just smarter, but also more reliable and adaptable to diverse, complex tasks.
