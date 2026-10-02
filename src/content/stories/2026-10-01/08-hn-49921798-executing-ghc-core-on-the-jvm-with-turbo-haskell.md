---
title: Executing GHC Core on the JVM with Turbo Haskell
source: hn
url: https://comonad.com/reader/2026/turbo-haskell/
date: '2026-10-01'
tags:
- catchup
- ghc-core
- graalvm
- hn
- jit-compilation
- polyglot-ffi
- truffle
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49921798'
comments: https://news.ycombinator.com/item?id=49921798
why_read: Understand how Turbo Haskell leverages GraalVM and Truffle to bring JIT
  compilation, Native Image AOT, and zero-copy polyglot FFI to standard Haskell programs.
authors:
- pjmlp
image: /infographics/08-hn-49921798.jpg
---

Running Haskell on top of the Java Virtual Machine has historically introduced performance hurdles and runtime friction. A new compiler project named THC tackles this by implementing GHC prim-ops and running GHC Core directly on Truffle and GraalVM.

Instead of re-implementing the frontend, GHC continues to handle parsing, typechecking, desugaring, and Core optimization passes. THC takes the optimized Core output and executes it through a specialized runtime on Truffle, supporting both Just-In-Time compilation and Ahead-Of-Time compilation via GraalVM Native Image.

One compelling feature of this architecture is polyglot foreign function interfaces. THC enables zero-copy conversions between Data.Text and Truffle strings across Python, Ruby, R, and JavaScript. This architecture makes it practical to call native libraries or machine learning packages from Haskell without serialization overhead.

Bridging mature functional compiler intermediate representations with modern multi-language virtual machine runtimes opens interesting design possibilities for high-performance backend systems.
