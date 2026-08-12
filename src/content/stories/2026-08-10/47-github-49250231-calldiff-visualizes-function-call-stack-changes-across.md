---
title: Calldiff visualizes function call stack changes across Git commits
source: github
url: https://github.com/tanishqkancharla/calldiff
date: '2026-08-10'
tags:
- agentic-review
- calldiff
- catchup
- code-review
- function-call-stack
- git-diff
- github
- tree-sitter
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49250231'
comments: https://news.ycombinator.com/item?id=49250231
why_read: This tool helps developers and AI agents understand how code changes affect
  function call flows. It reveals structural changes in call stacks that line-by-line
  diffs might miss, aiding in code review across 22 languages.
authors:
- Tanishq Kancharla
---

Tired of `git diff` making complex refactors or agent-generated code changes impossible to follow? Imagine seeing the actual call stack changes.

Calldiff is a new CLI tool that creates diffs specifically for function call stacks across Git commits, supporting 22 languages through AST-based parsing. This is a game changer for understanding how architectural dependencies shift.

It highlights which callees appear, disappear, or move under an entrypoint. For those working with AI agents that rewrite code, this tool becomes indispensable for reviewing structural transformations that line-by-line diffs simply cannot capture.

This is not just another diff tool; it is a fundamental upgrade to how engineers perceive and validate deep code modifications, significantly boosting productivity and code quality in complex systems.
