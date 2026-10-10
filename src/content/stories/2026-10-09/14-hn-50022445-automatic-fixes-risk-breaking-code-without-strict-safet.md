---
title: Automatic fixes risk breaking code without strict safety constraints
source: hn
url: https://alint.org/blog/the-automatic-fix-problem-four-questions/
date: '2026-10-09'
tags:
- automatic-fixes
- catchup
- circular-fixes
- hn
- non-idempotence
- rewrite-theory
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50022445'
comments: https://news.ycombinator.com/item?id=50022445
why_read: Read this to understand the hidden mechanics and failure modes of automated
  code fixes, from colliding edits to semantic corruption.
authors:
- aleqs
---

Applying an automated fix is a mutation operation that turns read-only static analysis into an uncontrolled write. Most developers treat linters like Prettier or ESLint as infallible formatters, but compiler and rewrite theory show that automated edits frequently break code semantics.

A safe fix must resolve four distinct hazards: semantic alteration, boundary cut collisions, infinite rewrite loops, and privilege escalation. For example, stripping trailing whitespace appears trivial until it hits Markdown files, where two trailing spaces encode a semantic line break. Similarly, when multiple lint rules target overlapping character offsets, sequential application shifts byte offsets and leads to corrupted AST transformations.

Even mature tools battle non-idempotence and circular fixes where two rules endlessly undo each other until a loop limiter halts execution. Crucially, single-file writes lack transactional integrity across your repository, leaving dependent files in inconsistent states if a process crashes mid-edit.

Before you trust automated code modification in your CI pipeline, ensure your tooling treats source code as a transactional database rather than plain text.
