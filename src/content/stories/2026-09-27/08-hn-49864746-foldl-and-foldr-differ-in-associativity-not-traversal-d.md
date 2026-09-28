---
title: Foldl and foldr differ in associativity not traversal direction
source: hn
url: https://blog.haskell.org/foldl-and-foldr/
date: '2026-09-27'
tags:
- associativity
- catchup
- evaluation-order
- foldl
- foldr
- hn
- list-traversal
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49864746'
comments: https://news.ycombinator.com/item?id=49864746
why_read: Read this to build a precise mental model of how fold functions actually
  execute. You will learn why list folds differ by expression associativity rather
  than the direction of list traversal.
authors:
- Alexis King
image: /infographics/08-hn-49864746.jpg
---

A common misconception about foldl and foldr is that they traverse lists from opposite directions. In reality, both foldl and foldr traverse sequences in the exact same left-to-right order. The critical difference lies entirely in their grouping associativity and evaluation strategy.

In strict evaluation, foldl accumulates intermediate values inside out, constructing left-nested expressions that immediately collapse. In lazy evaluation, unforced intermediate thunks accumulate linearly, quickly leading to catastrophic stack overflows and memory leaks unless strict accumulators like foldl' are used.

Conversely, foldr constructs right-associated call chains. Because it evaluates outside in, it allows short-circuiting operators like logical AND or infinite stream consumers to terminate early without traversing the remainder of the collection.

Understanding these distinct evaluation mechanics is essential for writing high-performance backend pipelines and preventing silent memory leaks in production runtime systems.
