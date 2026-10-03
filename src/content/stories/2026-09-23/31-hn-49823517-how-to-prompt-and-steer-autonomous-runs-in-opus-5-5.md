---
title: How to prompt and steer autonomous runs in Opus 5.5
source: hn
url: https://claude.dev/blog/getting-the-most-out-of-opus-5-5/
date: '2026-09-23'
tags:
- autonomous-coding
- catchup
- claude-code
- hn
- multi-step-work
- opus-5-5
- prompt-engineering
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49823517'
comments: https://news.ycombinator.com/item?id=49823517
why_read: Learn how to effectively prompt, direct, and verify long-running multi-step
  tasks when working with Opus 5.5 in Claude and Claude Code.
authors:
- Addy Osmani
---

Steering long-running autonomous coding agents requires fundamentally different prompting techniques than single-turn conversational models.

When working with models that feature built-in reasoning loops, traditional prompt boilerplate like 'think step by step' or 'think carefully' actually degrades task efficiency. The most reliable pattern for autonomous multi-hour code migrations is defining explicit completion criteria rather than micromanaging the path taken.

By framing requests around clear verification gates, such as requiring every endpoint migration to delete deprecated clients and pass full test suites, the harness knows exactly when to stop without stalling for intermediate approvals. Limiting interruptions exclusively to unexplainable test failures allows the agent to navigate complex refactoring tasks autonomously.

Optimizing agentic harnesses comes down to setting explicit invariants and letting the reasoning model manage its own internal execution steps.
