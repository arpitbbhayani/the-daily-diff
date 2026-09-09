---
title: Benzi is an AI coding agent that queries code, not reads it
source: github
url: https://github.com/oooscoos/Benzi
date: '2026-09-07'
tags:
- ai-coding-agent
- catchup
- code-intelligence
- compiler
- github
- query-map
- symbol-resolution
- tree-sitter
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49599867'
comments: https://news.ycombinator.com/item?id=49599867
why_read: This text introduces Benzi, an AI coding agent that provides code intelligence
  by parsing projects with a real compiler into a queryable map. Readers will learn
  how this approach offers precise, fast answers compared to traditional context window
  methods.
authors:
- Variant Technologies
---

The biggest bottleneck for many AI coding agents is not the LLM's raw intelligence, but its inability to precisely understand the codebase. Benzi introduces a game-changing approach: it does not just read code, it queries it.

This project uses a real compiler, built on tree-sitter, to parse every file into a queryable map. This means every symbol, call edge, reference, and class inheritance is understood and mapped before the agent even begins its work. The result? O(1) answers to complex code questions.

Instead of stuffing massive context windows or relying on fuzzy embeddings, Benzi provides agents with a structured, compiler-verified understanding of the code. This radically improves an agent's reasoning capabilities and reduces "hallucinations" about the codebase.

This is true AI-native code intelligence, offering a blueprint for building more reliable and powerful AI development tools.
