---
title: Call stack diffs improve communication of planned changes in coding agents
source: hn
url: https://oskrim.github.io/engineering/2026/08/02/call-stack-diffs.html
date: '2026-08-03'
tags:
- call-stack-diffs
- catchup
- coding-agents
- communication
- hn
- llms
- program-design
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49153612'
comments: https://news.ycombinator.com/item?id=49153612
why_read: Read this to learn how call stack diffs can make communication of code changes
  by coding agents more efficient and easier to understand. It offers a visual, compressed
  representation that's faster to parse than typical prose explanations.
authors:
- Oskari Mantere
---

Coding agents often produce verbose explanations that are difficult to parse for engineers. A new, highly effective technique involves instructing agents to communicate their planned code changes not in prose, but as "call stack diffs."

This approach provides a clear, concise visual representation of behavioral changes. By seeing function calls added or removed in a diff format, engineers can quickly grasp the impact and location of agent-suggested modifications without sifting through lengthy natural language.

This simple yet powerful context engineering trick significantly boosts developer productivity. It transforms agent output from a text block into an actionable, scannable format, bridging the communication gap between human engineers and AI collaborators.
