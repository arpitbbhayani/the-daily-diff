---
title: Deterministic code checks enforce agent guardrails more reliably than prompts
source: github
url: https://github.com/ulukaya/pawl
date: '2026-10-07'
tags:
- agent-harnesses
- ai-agents
- catchup
- claude-code
- deterministic-verification
- github
- guardrails
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49993085'
comments: https://news.ycombinator.com/item?id=49993085
why_read: Learn how deterministic programmatic gates prevent recurring agent errors
  far more reliably than system prompt instructions. It offers a lightweight, zero-dependency
  approach to managing coding agent workflows.
authors:
- ulukaya
---

Prompting an AI coding agent to avoid running destructive commands like recursive file deletions works until the context window fills up. When prompts drift, probabilistic instruction following inevitably fails.

Pawl solves this by replacing conversational warnings with deterministic runtime gates. Implemented directly in standard library Python without invoking secondary model calls, it hooks into agent execution harnesses to intercept destructive filesystem commands, path traversals, and unapproved mutations.

Read-only checks execute cleanly with zero prompt expansion, while dangerous invocations are blocked by pure code validation. This gives developers complete execution safety while keeping harness token overhead under 150 tokens.

Enforce system boundaries with deterministic code contracts instead of polite system instructions.
