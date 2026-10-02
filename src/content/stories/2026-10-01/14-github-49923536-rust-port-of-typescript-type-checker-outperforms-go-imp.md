---
title: Rust port of TypeScript type checker outperforms Go implementation
source: github
url: https://github.com/maschwenk/tsrs
date: '2026-10-01'
tags:
- catchup
- compiler-benchmarking
- github
- memory-usage
- rust
- type-checker
- typescript
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49923536'
comments: https://news.ycombinator.com/item?id=49923536
why_read: Read this to examine benchmark data comparing a Rust port of the TypeScript
  type checker against the Go implementation across large codebases. You will see
  performance metrics demonstrating significant speedups and reduced peak memory consumption.
authors:
- maschwenk
---

Porting complex compiler internals across systems languages often exposes fascinating trade-offs in memory layout, concurrency, and lazy evaluation. The tsrs project ports the Go-based TypeScript 7 type checker to Rust, demonstrating significant performance gains across standard benchmark suites.

On Depot CI benchmarks running against projects like VS Code, tsrs achieved a 3.47x speedup in wall-clock time while slashing peak memory consumption from 7.78 GiB down to 3.15 GiB. This represents a 60 percent reduction in peak memory overhead during heavy type checking passes.

The performance improvements stem from combining Profile-Guided Optimization (PGO) with lazy member resolution across worker threads. Rather than eagerly materializing object structures, lazy resolution avoids unnecessary allocations during large AST traversals.

For engineers building developer tooling, this project is a masterclass in low-level memory efficiency and parallel compiler design.
