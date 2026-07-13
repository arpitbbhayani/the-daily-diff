---
title: Defining Syntactic Criteria for Correct and Reliable Merge Tools
source: arxiv
url: http://arxiv.org/abs/2607.07987v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- category-theory
- cs.SE
- merge-tool-correctness
- structural-merge
- syntactic-criteria
- three-way-merge
arxiv_id: '2607.07987'
categories: cs.SE
why_read: This paper introduces precise syntactic criteria for evaluating three-way
  merge tools, demonstrating why existing tools often produce incorrect results. Readers
  will learn how a new structural merge approach, guided by these criteria, achieves
  higher correctness and reliability.
authors:
- Akira Mori
- Masatomo Hashimoto
---

Three-way merge tools are central to modern software development, yet their results are often accepted without rigorous scrutiny. Do we truly understand what "correct" means for a merge?

This paper introduces precise syntactic criteria: a merge result must be both parsable (syntactically valid) and universal (incorporating all edits from both branches uniquely). These are defined using category theory.

In a large experiment across 43,774 file merge scenarios from 76 Java projects, existing tools like Git's companion merge tool reported numerous incorrect results. The new structural merge tool reported zero.

The findings highlight that many common merge tool outputs are not "correct" by these robust definitions. Structural merge holds promise, even with its current limitations.

Rethink your assumptions about merge correctness and the tools you trust daily.
