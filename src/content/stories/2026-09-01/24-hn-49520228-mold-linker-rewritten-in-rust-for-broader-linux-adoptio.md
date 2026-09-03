---
title: Mold linker rewritten in Rust for broader Linux adoption
source: hn
url: https://twitter.com/rui314/status/2094677980857680052
date: '2026-09-01'
tags:
- catchup
- embedded-development
- hn
- linker-script
- linux-distros
- mold-linker
- rust
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49520228'
comments: https://news.ycombinator.com/item?id=49520228
why_read: This post announces mold 3.0, a significant rewrite in Rust with full linker
  script support, enabling it to replace GNU ld for all use cases, including kernels
  and embedded programs. Readers will understand the technical advancements and strategic
  goal for mold's adoption as the default linker in Linux distributions.
authors:
- Rui Ueyama
---

The `mold` linker, already a game-changer for build speeds, is getting a massive upgrade: a complete rewrite in Rust. This is not just a language port; `mold 3.0` aims to deliver full linker script support.

This means `mold` will soon be capable of linking anything `GNU ld` can, including operating system kernels and embedded programs. Imagine the impact on build times and developer workflows for complex projects.

This move underscores a significant commitment to improving core developer tooling, making it faster, safer, and more universally applicable. For any engineer dealing with substantial C/C++ codebases or system-level development, this is a pivotal development.
