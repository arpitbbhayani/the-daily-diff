---
title: Granular management of LLM tools saves context window tokens
source: hn
url: https://www.designshippers.com/work/context-budget.html
date: '2026-08-08'
tags:
- api-tools
- catchup
- hn
- llm-context-window
- token-cost
- tool-management
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49224868'
comments: https://news.ycombinator.com/item?id=49224868
why_read: This article reveals how extensive tool definitions waste large language
  model context window tokens and introduces a novel 'budgeting window' approach to
  granularly manage and prune unused tools, significantly improving token efficiency.
authors:
- krm01
---

LLM agents are drowning in context bloat, not because of conversation history, but from tool definitions. A budgeting tool reveals that simply defining available tools can consume nearly 50 percent of a 200,000 token window before any actual work begins. This makes multi-tool agents prohibitively expensive and inefficient. 

The core issue is that current configurations often prune at the 'server' level, disabling entire sets of tools even when only one or two are frequently used. The real gain comes from granular, tool-level control: enabling just the specific API endpoints an agent needs, not the entire service. 

This simple shift transforms an unworkable context budget into something practical, greatly improving agent performance and cost efficiency. It is not about using fewer tools, but about using them smarter.
