---
title: TypeScript Chose Go Over Rust for New Compiler
source: hn
url: https://www.thetrueengineer.com/p/typescript-team-chose-go-over-rust
date: '2026-09-17'
tags:
- borrow-checking
- catchup
- compiler-porting
- garbage-collection
- go-language
- hn
- memory-safety
- rust-language
- typescript-compiler
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49742259'
comments: https://news.ycombinator.com/item?id=49742259
why_read: This article explains the technical reasons behind TypeScript's decision
  to use Go instead of Rust for its new compiler. Readers will learn how existing
  code assumptions about garbage collection influenced the choice over Rust's memory
  safety model.
authors:
- Adlet Balzhanov
---

The TypeScript team's decision to port their compiler to Go instead of Rust is a masterclass in pragmatic engineering tradeoffs. Many expected Rust, but the team's reasoning goes deep into the practicalities of compiler design.

The core of it? The original JavaScript compiler implicitly relied on garbage collection. Porting to Rust would have necessitated a complete rewrite of the memory management logic, a task far more complex than a direct port to a GC language like Go. It was not about one language being “better,” but about maintaining semantic equivalence and stability during a critical transition.

This highlights a crucial lesson for senior engineers: major system changes are not just about raw performance or the latest tech. They are about managing complexity, preserving backward compatibility, and making strategic choices that balance technical purity with practical implementation costs. Sometimes, the “simpler” choice is the more robust one.

Language choice implications run deeper than benchmarks.
