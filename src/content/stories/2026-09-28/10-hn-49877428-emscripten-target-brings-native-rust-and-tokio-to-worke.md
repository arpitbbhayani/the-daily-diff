---
title: Emscripten target brings native Rust and Tokio to Workers
source: hn
url: https://blog.cloudflare.com/rust-workers-emscripten-target/
date: '2026-09-28'
tags:
- catchup
- cloudflare-workers
- emscripten
- hn
- rust
- tokio
- wasm-bindgen
- webassembly
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49877428'
comments: https://news.ycombinator.com/item?id=49877428
why_read: Learn how the Emscripten target for wasm-bindgen enables native Rust and
  Tokio-based applications to run directly on Cloudflare Workers. It explains how
  virtualized platform features like sockets and timers expand WebAssembly compatibility.
authors:
- torutofu
image: /infographics/10-hn-49877428.jpg
---

Running complex, asynchronous Rust applications in serverless edge environments has long been constrained by WebAssembly target limitations. Cloudflare has announced experimental support for the Emscripten compilation target (wasm32-unknown-emscripten) within wasm-bindgen for Cloudflare Workers.

This integration allows native Tokio applications and networking crates to compile and execute directly on the V8-based runtime. By utilizing Emscripten to bridge native system calls into Web Platform APIs, platform features like timers, file operations, and raw sockets are fully virtualized.

To prove the concept, the team compiled and ran a complete, native Rust Minecraft server inside a Cloudflare Durable Object, serving real TCP ingress connections managed by Tokio.

This development significantly reduces the porting friction for complex backend libraries moving to serverless WebAssembly edge environments.
