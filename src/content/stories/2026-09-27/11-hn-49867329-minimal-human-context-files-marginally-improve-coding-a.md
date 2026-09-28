---
title: Minimal human context files marginally improve coding agent performance
source: hn
url: https://gethrbr.com/blog/is-agents-md-useful
date: '2026-09-27'
tags:
- agents-md
- benchmarking
- catchup
- coding-agents
- context-files
- hn
- inference-cost
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49867329'
comments: https://news.ycombinator.com/item?id=49867329
why_read: Read this to understand the empirical trade-offs of using context files
  like AGENTS.md with coding agents. You will learn why concise, human-written instructions
  for non-standard workflows matter more than broad repository overviews.
authors:
- shoustak
---

Adding an AGENTS.md or CLAUDE.md file to your repository might not deliver the productivity boost you expect. Multiple recent benchmark studies evaluating coding agents like Claude Code and Codex across hundreds of real-world tasks found that developer-written context files only increased task success rates by around two percentage points. Generated context files actually nudged success rates downward.

The trade-off is clear: including these context files increased inference costs by roughly 20 percent on average. Furthermore, standard sections like repository architecture overviews failed to help agents locate relevant files.

Context files only show clear value when they communicate non-standard internal commands, bespoke APIs, or obscure gotchas that an agent cannot discover by inspecting the codebase. When configuring agent harnesses, keep context files minimal and strip generic boilerplate.
