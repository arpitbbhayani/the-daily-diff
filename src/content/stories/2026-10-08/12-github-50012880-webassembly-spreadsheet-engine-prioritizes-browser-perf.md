---
title: WebAssembly spreadsheet engine prioritizes browser performance over Excel compatibility
source: github
url: https://github.com/podraven/titan-engine
date: '2026-10-08'
tags:
- catchup
- github
- memory-allocation
- rust
- serialization
- spreadsheet-engine
- webassembly
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50012880'
comments: https://news.ycombinator.com/item?id=50012880
why_read: Read this to understand how a Rust-based WebAssembly engine avoids serialization
  bottlenecks and memory allocation overhead when recalculating large spreadsheets
  in the browser.
authors:
- podraven
---

Spreadsheet calculation engines in web browsers frequently stall because repeated object allocations and JSON serialization choke the JavaScript garbage collector.

Titan Engine tackles this performance wall by implementing a headless spreadsheet computation core entirely in Rust and compiling it to WebAssembly. Instead of continuously marshalling cell updates and abstract syntax trees across the bridge, the engine keeps the formula graph in native WASM memory.

A TypeScript wrapper abstracts raw WebAssembly pointers behind clean A1 cell notations and an event subscription layer. Large calculation graphs can recalculate dependencies without degrading browser frame rates, avoiding the serialization tax that makes typical web calculation engines feel sluggish.

Pushing core data structures directly into WebAssembly memory layouts remains one of the most effective strategies for heavy client compute.
