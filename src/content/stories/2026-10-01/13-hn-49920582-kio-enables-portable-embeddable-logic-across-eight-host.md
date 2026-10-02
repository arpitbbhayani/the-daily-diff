---
title: Kio enables portable embeddable logic across eight host languages
source: hn
url: https://jdevuyst.github.io/kio/
date: '2026-10-01'
tags:
- catchup
- cross-language-interop
- embeddable-languages
- hn
- static-typing
- transpilation
- typed-interfaces
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49920582'
comments: https://news.ycombinator.com/item?id=49920582
why_read: Read this to understand how Kio compiles portable, statically typed component
  logic directly into multiple host targets without requiring an ambient runtime.
  You will learn how explicit host contracts decouple core algorithms from host-specific
  capabilities and effects.
authors:
- jdevuyst
image: /infographics/13-hn-49920582.jpg
---

Most embeddable languages force you to make an unpleasant trade-off. You either bundle a heavy C runtime into your binary or deal with dynamic typing and brittle FFI bridges that are difficult to debug at scale.

Kio takes a completely different architectural approach. It is a statically typed, embeddable language that compiles directly into idiomatic source code across eight host languages, including Rust, JavaScript, and Python. Because it does not ship with an ambient runtime or hidden I/O, the generated code relies entirely on the host language to supply core capabilities like strings and numerics.

Everything in Kio revolves around typed contracts. A package explicitly defines the host types and functions it expects, along with the entry points it exposes. During compilation, the compiler statically verifies these boundaries against the host interface, and a dedicated signature tool automatically flags breaking API changes before they ship.

Eliminating the runtime overhead entirely changes the equation for cross-language business logic. You can write your core domain rules once and link them cleanly anywhere without the usual FFI friction.
