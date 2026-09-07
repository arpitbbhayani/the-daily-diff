---
title: Benzi queries code with compiler parsing for fast answers
source: github
url: https://github.com/oooscoos/Benzi
date: '2026-09-05'
tags:
- ai-coding-agent
- catchup
- code-intelligence
- code-query
- compiler
- constant-time-resolution
- github
- tree-sitter
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49579769'
comments: https://news.ycombinator.com/item?id=49579769
why_read: This text introduces Benzi, an AI coding agent that uses compiler parsing
  and a queryable code map to provide fast, precise answers, differentiating itself
  from context window-based models. Readers will learn about a new paradigm for code
  intelligence infrastructure that emphasizes deep, structural understanding over
  surface-level text analysis.
authors:
- Variant Technologies
---

The prevailing challenge for AI coding agents is effective code understanding. Most approaches simply dump massive codebases into context windows, leading to models getting lost in noise. Benzi proposes a radical shift: instead of "reading" code, it "queries" it.

This innovative infrastructure uses a real compiler, built on `tree-sitter`, to parse every project file into a precise, queryable map. This map captures every symbol, call edge, reference, and class inheritance chain, enabling the AI agent to answer code-related questions in O(1) time.

This moves beyond mere embeddings or semantic search, offering a true architectural breakthrough for AI-native code intelligence. For anyone building developer tools or striving for more accurate AI agents, Benzi's approach to structural code understanding is a must-explore paradigm.
