---
title: Revera provides a single POSIX regex engine for all languages
source: hn
url: https://oneregex.github.io/revera/
date: '2026-09-02'
tags:
- catchup
- cross-language-consistency
- formal-verification
- hn
- posix-regex
- regex-engine
- revera
- security
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49539925'
comments: https://news.ycombinator.com/item?id=49539925
why_read: Learn about Revera, a formally verified POSIX regex engine designed to ensure
  consistent behavior across multiple programming languages. It addresses common inconsistencies
  and security concerns in regular expression usage.
authors:
- jedisct1
---

Regex inconsistencies across languages are a silent killer of productivity and a source of subtle bugs. Revera, a new POSIX.1-2024 extended regular expression engine, offers a groundbreaking solution to this problem.

It is a clean-room implementation, formally verified in Lean 4, and then generated into native libraries for Go, Rust, Zig, C, C++, and TypeScript. This means the same regex pattern will behave identically across all these environments, with guaranteed resource bounds.

This project provides not just a tool, but a paradigm for how critical parsing logic can be developed with mathematical rigor and then safely deployed across diverse polyglot systems, eliminating the "regex dialect" problem once and for all.
