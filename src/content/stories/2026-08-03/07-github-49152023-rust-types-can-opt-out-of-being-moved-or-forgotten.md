---
title: Rust types can opt out of being moved or forgotten
source: github
url: https://github.com/rust-lang/rust-project-goals/blob/main/src/2026/move-trait.md
date: '2026-08-03'
tags:
- catchup
- forget-trait
- github
- guaranteed-destructors
- immobile-types
- move-trait
- rust-language
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49152023'
comments: https://news.ycombinator.com/item?id=49152023
why_read: This document explains a proposed change to Rust's type system, introducing
  traits to allow types to opt out of being moved or forgotten. Readers will learn
  how this enables advanced features like async drop and pin-by-default, enhancing
  control over memory and resource management.
authors:
- lcnr
- jackh726
---

Rust's core assumption that all types can be moved (relocated in memory) and forgotten (via `mem::forget`) is slated for a fundamental rethink. A new project goal proposes introducing explicit `Move` and `Forget` traits, allowing types to opt out of these operations.

This is a profound shift, akin to the `Sized` hierarchy work. It unlocks powerful new capabilities like truly `Pin`-by-default types, safer `async drop` implementations, and more robust `scoped spawn` patterns. For systems engineers, this means even finer-grained control over resource management and memory safety.

The motivation stems from the complexities of async and low-level programming where current assumptions can lead to subtle bugs or force awkward workarounds. By making these capabilities explicit, Rust further solidifies its position as a language for robust, high-performance systems.

This is a must-read for anyone serious about Rust's future and advanced systems programming.
