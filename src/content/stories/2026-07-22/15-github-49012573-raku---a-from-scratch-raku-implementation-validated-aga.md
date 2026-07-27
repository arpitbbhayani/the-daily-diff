---
authors:
- ash
comments: https://news.ycombinator.com/item?id=49012573
date: '2026-07-22'
depth_score: 9
hn_id: '49012573'
image: /infographics/15-hn-49012573.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: github
tags:
- catchup
- compiler
- cpp17
- github
- interpreter
- programming-language-implementation
- raku-language
- roast-spec-suite
- unicode
- webassembly
title: Raku++ a from-scratch Raku implementation validated against Roast
url: https://github.com/ash/rakupp
utility_score: 7
why_read: This text details Raku++, a new Raku language interpreter and compiler written
  from scratch in C++17. Readers will gain insight into the technical implementation
  of a modern programming language and its validation against a comprehensive test
  suite, highlighting specific language features supported.
---

A new Raku compiler, Raku++, just hit v1.0.0, and it is a full, from-scratch implementation in C++17. This project did not fork an existing compiler; it built everything from the ground up: a hand-written lexer, parser, and tree-walking evaluator. This includes handling Raku's advanced features like classes, roles, grammars, multi-dispatch, and Unicode-correct strings.

What is truly impressive is its spec compliance. It passes over 90 percent of the official Raku test suite (Roast), covering close to 200,000 individual tests. On top of that, it can compile Raku programs to standalone native binaries and even runs in the browser via WebAssembly without any server.

For those interested in the deep engineering behind programming languages and compilers, this project offers significant insights into architectural choices and robust implementation for complex language features. It is a masterclass in system-level programming and language runtime design.