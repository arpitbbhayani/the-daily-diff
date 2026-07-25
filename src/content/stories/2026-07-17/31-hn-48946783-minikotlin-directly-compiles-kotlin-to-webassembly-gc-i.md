---
authors:
- frizlab
comments: https://news.ycombinator.com/item?id=48946783
date: '2026-07-17'
hn_id: '48946783'
image: /infographics/31-hn-48946783.jpg
interest_score: 8
section: engineering
source: hn
tags:
- bytecode-generation
- catchup
- compiler
- hn
- in-browser-execution
- kotlin
- self-contained
- webassembly-gc
title: minikotlin Directly Compiles Kotlin to WebAssembly GC In-Browser
url: https://minikotlin.run
why_read: This post introduces minikotlin, a novel Kotlin compiler that runs entirely
  in a browser tab. Readers will learn how a self-contained compiler can directly
  generate WebAssembly GC bytecode from Kotlin without external dependencies.
---

Imagine a Kotlin compiler, written in C, that runs entirely in your browser tab and generates WebAssembly GC bytecode by hand. That is exactly what Minikotlin achieves, without relying on JVM, LLVM, Binaryen, or Gradle.

This is an incredible feat of low-level systems engineering. It highlights how deep understanding of language runtimes and target architectures can lead to extremely compact and efficient solutions, challenging the reliance on large toolchains.

For engineers interested in compilers, WebAssembly, or pushing the boundaries of in-browser execution, this project offers concrete insights into performance optimization from first principles.