---
title: Reviewing code changes by structural intent rather than diffs
source: github
url: https://github.com/sshah03/perspica
date: '2026-09-30'
tags:
- ast-analysis
- catchup
- code-review
- coding-agents
- diff-tools
- github
- tree-sitter
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49914005'
comments: https://news.ycombinator.com/item?id=49914005
why_read: Learn how Perspica uses AST parsing via Tree-sitter to separate mechanical
  noise from real logic changes during code review.
authors:
- sshah03
image: /infographics/13-github-49914005.jpg
---

Standard diff tools treat code like unstructured plain text. When an automated coding agent makes a large pull request, reviewing hundreds of lines of mechanical renaming and reformatting obscures the real logic bugs that actually matter.

Perspica takes a compiler-first approach by running tree-sitter across both sides of a git branch locally. Instead of checking lines, it maps abstract syntax tree modifications to isolate structural changes such as signature updates, dead code paths, and broken call sites. The deterministic AST pass runs in under a second without requiring API keys or network requests.

AI summaries can be layered on top, but the fundamental value comes from deterministic AST analysis. This structure filters out noise and flags broken references before you write a single review comment.

Structural semantic diffs are rapidly becoming essential infrastructure for high-throughput code review workflows.
