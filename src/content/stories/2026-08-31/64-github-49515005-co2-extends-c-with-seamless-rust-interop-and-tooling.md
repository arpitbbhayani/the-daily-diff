---
title: CO2 Extends C with Seamless Rust Interop and Tooling
source: github
url: https://github.com/hkalbasi/co2
date: '2026-08-31'
tags:
- c-programming
- cargo-build-system
- catchup
- co2-language
- github
- interoperability
- no-ffi
- rust-programming
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49515005'
comments: https://news.ycombinator.com/item?id=49515005
why_read: This describes CO2, a language enabling seamless Rust ecosystem and tooling
  integration for C projects. Readers will learn how to leverage Cargo and Rust dependencies
  in C without FFI or code rewriting.
authors:
- hkalbasi
---

Seamlessly integrating C and Rust has been a long-standing challenge, often involving complex FFI layers and separate build systems. CO2 (oxidized C) introduces a groundbreaking approach by making C backward compatible with Rust, allowing direct, FFI-free access to the Rust ecosystem.

Imagine using Cargo as your C build system, adding Rust dependencies with `cargo add`, and running `cargo test` on your C code, all without rewriting it in Rust. This project offers a truly unified development experience, bringing Rust's safety and modern tooling benefits to existing C codebases.

This is not just an academic exercise; it is a game-changer for systems engineers. It simplifies the migration path for legacy C projects, enables the adoption of safer Rust libraries, and streamlines the development workflow for performance-critical applications. This project fundamentally changes how C and Rust can coexist and thrive together.
