---
title: Chelis provides type-checked numerical computing for supervised agents
source: github
url: https://github.com/Chelis-Lang/chelis
date: '2026-10-07'
tags:
- catchup
- formal-verification
- github
- numerical-computing
- tensor-types
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49993063'
comments: https://news.ycombinator.com/item?id=49993063
why_read: Learn how Chelis enforces dimension and precision checking to prevent silent
  broadcasting bugs in agent-written numerical code.
authors:
- jeffreysmith
---

LLM coding agents write believable numerical code that fails silently due to implicit tensor broadcasting. A shape mismatch between a weight vector and a return vector often generates a dimensionally incorrect matrix rather than raising an immediate runtime exception.

Chelis addresses this architectural failure mode by baking named dimensions, scalar precisions, and formal proof stacks directly into the programming language. Instead of relying on post-hoc runtime assertions, the compiler verifies dimensional invariants and tensor properties before execution. When an automated agent attempts to compose incompatible matrix operations, the type checker rejects the generated program deterministically.

This shifts the burden of verification from downstream integration tests to automated static analysis that agents can query iteratively. The compiler provides explicit proofs that make agentic synthesis safer while keeping generated kernels transparent for human review.

Designing domain specific languages around formal verification represents the most practical path toward dependable autonomous code generation.
