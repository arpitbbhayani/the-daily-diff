---
title: Compiling GHC Core to execute Haskell on GraalVM
source: hn
url: https://comonad.com/reader/2026/turbo-haskell/
date: '2026-09-30'
tags:
- catchup
- ghc-core
- graalvm
- hn
- jit-compilation
- polyglot-ffi
- sulong
- truffle
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49908742'
comments: https://news.ycombinator.com/item?id=49908742
why_read: Learn how the experimental THC compiler leverages Truffle and GraalVM to
  JIT-compile GHC Core and enable zero-copy polyglot interoperability with languages
  like Python and JavaScript.
authors:
- carbolymer
image: /infographics/14-hn-49908742.jpg
---

Running typed functional languages on the Java Virtual Machine has historically suffered from severe performance penalties and impedance mismatches. A new compiler project called Turbo Haskell demonstrates how to bypass traditional GHC runtime limitations by targeting Truffle and GraalVM directly.

The system allows GHC to parse, typecheck, and optimize code down to GHC Core, and then immediately hands execution over to a custom Truffle-based Just-In-Time compiler. It fully supports complex language features such as Template Haskell and Linear Haskell while providing zero-copy foreign function interfaces to Python, Ruby, and JavaScript.

By integrating LLVM execution through native-mode Sulong, developers can link C and C++ libraries without leaving the managed ecosystem. You can execute pandoc or even compile GHC itself under this runtime.

Polyglot virtual machines can eliminate the operational friction of deploying pure functional languages into existing enterprise backends.
