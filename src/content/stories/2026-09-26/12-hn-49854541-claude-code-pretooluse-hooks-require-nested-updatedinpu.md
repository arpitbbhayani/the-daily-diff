---
title: Claude Code preToolUse hooks require nested updatedInput schema
source: hn
url: https://mer.vin/news/why-updatedinput-in-a-pretooluse-hook-doesnt-rewrite-the-command/
date: '2026-09-26'
tags:
- catchup
- claude-code
- hn
- hookspecificoutput
- pretooluse-hook
- schema-validation
- updatedinput
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49854541'
comments: https://news.ycombinator.com/item?id=49854541
why_read: Understand why Claude Code silently discards tool call rewrites when following
  the official documentation examples. You will learn the exact JSON structure required
  to ensure PreToolUse hooks successfully modify bash commands.
authors:
- Mervin Praison
---

When building safety hooks for LLM coding agents, silent schema failures can completely undermine your security boundaries. In Claude Code, intercepting and rewriting tool calls requires a PreToolUse hook, but following the top-level JSON structure shown in standard examples results in silent failure where dangerous bash commands run anyway.

The binary validator requires the updatedInput field to be nested strictly inside hookSpecificOutput. When placed at the top level, the validator marks the unknown key as unrecognized, outputs no runtime errors, and executes the original unmodified command from the model.

Testing hook execution in non-destructive sandbox environments before relying on them for policy enforcement remains essential for building robust agent infrastructure.
