---
title: AI agents accelerate by perceiving tools as code
source: hn
url: https://www.blacksmith.sh/blog/code-smith-code-mode
date: '2026-09-02'
tags:
- ai-agents
- catchup
- code-mode
- coding-agent
- hn
- tool-calling
- typescript
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49537705'
comments: https://news.ycombinator.com/item?id=49537705
why_read: Read this to understand how representing AI agent tools as code, rather
  than JSON, can significantly enhance their speed and performance. It explains Blacksmith's
  'code mode' and its benefits in leveraging pre-trained model knowledge.
authors:
- Mark Hetherington
---

Many AI agent frameworks struggle with context window bloat, especially when agents need access to numerous tools. Blacksmith's "code mode" presents an ingenious solution to this problem for coding agents.

Instead of stuffing the agent's context with verbose JSON tool definitions, "code mode" exposes tools as simple TypeScript interfaces. The agent then dynamically searches for the tools it needs and interacts with them via a single execute command within a sandbox.

This approach drastically reduces token usage, but more importantly, it leverages the LLM's deep training on billions of lines of code. It helps agents focus on the task at hand by providing only relevant context, making them faster and more effective. It is a fantastic example of context engineering for agent performance.
