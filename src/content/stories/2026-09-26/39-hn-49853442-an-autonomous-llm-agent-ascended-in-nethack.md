---
title: An autonomous LLM agent ascended in NetHack
source: hn
url: https://kenforthewin.github.io/blog/posts/llm-nethack-ascension/
date: '2026-09-26'
tags:
- autonomous-execution
- balrog-benchmark
- catchup
- hn
- llm-agents
- nethack
- terminal-interface
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49853442'
comments: https://news.ycombinator.com/item?id=49853442
why_read: Learn how an LLM agent solved the long-horizon execution problem in NetHack
  by creating its own harness without human-written code.
authors:
- EvgeniyZh
---

An LLM agent has achieved an ascension in NetHack after 37,140 turns on Hardfought, marking a major milestone in autonomous decision-making.

Previous efforts failed because of state drift. An LLM could accurately describe mechanics, but it would lose track of dungeon state, hallucinate stale map tiles, and fail during complex inventory management. Early manual attempts focused on handcrafting elaborate harnesses to feed the model perfect context.

The winning approach inverted this dynamic by letting the model design and construct its own interaction harness autonomously. Giving the agent control over how it observed and structured game state eliminated the brittle assumptions inherent in human-designed wrappers.

Reliable agentic execution over thousands of turns depends far less on raw model capability and far more on how the observation-action loop adapts to complex environments.
