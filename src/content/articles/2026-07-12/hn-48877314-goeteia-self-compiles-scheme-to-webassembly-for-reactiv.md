---
title: Goeteia Self-Compiles Scheme to WebAssembly for Reactive Web Pages
source: hn
url: https://goeteia.dev
date: '2026-07-12'
tags:
- catchup
- goeteia
- hn
- hygienic-macros
- reactive-web
- scheme
- self-hosting
- webassembly
- webgl
score: 131
hn_id: '48877314'
comments: https://news.ycombinator.com/item?id=48877314
why_read: Understand how Goeteia functions as a self-compiling Scheme-to-WebAssembly
  system entirely in the browser. You'll learn about its core features like Wasm GC
  objects, hygienic macros, and its reactive web stack.
authors:
- guenchi
author: guenchi
---

Imagine a web page that compiles itself, entirely in the browser, with a compiler written in the same language it compiles. Goeteia does exactly that, leveraging pure Scheme and WebAssembly to create a remarkably efficient web programming tool. This is a fascinating look into the future of self-hosting systems.

The compiler, a mere 38 KB gzipped, runs client-side, recompiling source in approximately 15 milliseconds. This showcases a powerful approach to delivering interactive, customizable development environments directly within a web page. The project also boasts native WebAssembly GC objects, eliminating the need for a JavaScript shadow heap.

Furthermore, Goeteia implements full hygienic macros and real closures with efficient tail calls, demonstrating how advanced language features can translate into high-performance web applications. This kind of deep technical dive is invaluable for engineers pushing the boundaries of what is possible on the web platform.

Explore the elegance of self-hosting functional web development.
