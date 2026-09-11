---
title: Mouse achieves leading coding agent performance with verification loops
source: hn
url: https://mouse.dev/blog/verification-loops/
date: '2026-09-09'
tags:
- catchup
- coding-agents
- frontierharness-benchmark
- hn
- mouse-harness
- opencode
- verification-loops
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49632357'
comments: https://news.ycombinator.com/item?id=49632357
why_read: This explains how the Mouse coding agent achieved top performance on the
  FrontierHarness benchmark. Readers will learn about the deterministic verification
  loop and its steps that significantly improved agent reliability and task completion.
authors:
- Aeroi
---

If you are building AI agents, especially coding agents, you know how challenging it can be to get them to reliably converge on a solution. A team running production coding agents found a game-changing pattern: the "verification loop."

By enforcing a fixed, deterministic sequence of steps after every agent turn – checking repo status, running build/test/lint commands, and even blocking deleted tests – they took their OpenCode-based agent from last place to first on the challenging FrontierHarness benchmark. The agent passed 25 out of 30 tasks after this change.

This is a powerful lesson in agentic AI. It shows that robust engineering practices, specifically structured verification, can have a more profound impact on agent performance than simply swapping out the underlying LLM. The agent is not just trying harder; it is being guided to confirm its work systematically.

This approach provides a concrete blueprint for improving the reliability and success rate of your own AI agents.
