---
title: astcount measures code complexity for agent-guided refactoring
source: github
url: https://github.com/wokalski/astcount
date: '2026-08-27'
tags:
- agent-guided
- astcount
- catchup
- code-complexity
- github
- refactoring
- syntax-tree
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49470209'
comments: https://news.ycombinator.com/item?id=49470209
why_read: This describes a tool, astcount, that quantifies code complexity using syntax
  trees, designed to facilitate automated refactoring. Readers will learn how a structural
  measure of code can be applied in agent-guided code improvement workflows.
authors:
- wokalski
---

How do you objectively measure code complexity for automated refactoring? `astcount` offers a polyglot solution built on Tree-sitter syntax trees. It moves beyond lines of code to quantify structural complexity, ignoring superficial elements like whitespace.

The real power comes from its integration with AI agents. `astcount` provides specific "skills" for tools like Codex, enabling prompts for `$astcount-refactor-interactive` or `$astcount-refactor-loop`. This means AI agents can use this complexity metric to intelligently propose and execute refactoring strategies.

This is a significant step towards more effective engineering practices and developer productivity, turning code quality measurement into an actionable input for autonomous AI.
