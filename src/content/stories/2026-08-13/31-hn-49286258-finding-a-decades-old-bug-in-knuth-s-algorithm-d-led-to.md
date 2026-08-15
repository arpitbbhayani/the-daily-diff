---
title: Finding a Decades-Old Bug in Knuth's Algorithm D Led to a New Theorem
source: hn
url: https://kolja.rs/algorithm-d/
date: '2026-08-13'
tags:
- algorithm-d
- bug-discovery
- catchup
- hn
- knuth
- llvm
- long-division
- multiprecision-arithmetic
- theorem-proving
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49286258'
comments: https://news.ycombinator.com/item?id=49286258
why_read: This post details the discovery of a decades-old bug in Knuth's famous Algorithm
  D for long division, leading to a new theorem. Readers will learn about deep algorithmic
  analysis, bug hunting in foundational code, and modern long division implementations,
  including an issue found in LLVM.
authors:
- "Novak Kalu\u0111erovi\u0107"
- Kolja
---

A decades-old bug has been uncovered in Knuth's Algorithm D for long division, a cornerstone from "The Art of Computer Programming." This is not merely an academic curiosity; the author's deep dive led to a new theorem correcting the algorithm and even highlighted a related "bug" in LLVM's implementation.

This discovery is a profound reminder that even the most fundamental and seemingly settled algorithms can harbor subtle flaws for decades. It underscores the critical importance of rigorous mathematical analysis and proof in low-level systems.

For senior engineers, this article offers a masterclass in algorithm correctness and numerical precision, showing how a single edge case can ripple through foundational software. You will gain a new appreciation for the hidden complexities in the bedrock of computing.
