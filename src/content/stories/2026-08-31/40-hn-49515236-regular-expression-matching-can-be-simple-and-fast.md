---
title: Regular expression matching can be simple and fast
source: hn
url: https://swtch.com/~rsc/regexp/regexp1.html
date: '2026-08-31'
tags:
- catchup
- hn
- matching
- performance
- regular-expression
- thompson-nfa
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49515236'
comments: https://news.ycombinator.com/item?id=49515236
why_read: Read this to understand why certain popular regular expression engines are
  incredibly slow for some patterns and discover a significantly faster alternative
  approach.
authors:
- Russ Cox
---

Many popular programming languages, including Java, Perl, Python, and Ruby, utilize regular expression engines that can be shockingly slow. This is not a slight against the languages, but rather a consequence of the backtracking algorithm they often employ.

Russ Cox's seminal article exposes why a seemingly simple regex like a?{n}a{n} against a{n} can take exponential time in these languages, turning a 29-character string into a minute-long operation, and a 100-character string into a trillion-year wait.

The solution lies in understanding the non-deterministic finite automaton (NFA) approach. Unlike backtracking, which can re-evaluate choices, NFA engines process the string linearly, offering dramatically superior performance in such pathological cases. This is a crucial lesson in algorithmic efficiency that every senior engineer should grasp.
