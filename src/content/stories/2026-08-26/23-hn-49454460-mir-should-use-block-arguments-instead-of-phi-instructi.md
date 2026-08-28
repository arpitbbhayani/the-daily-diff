---
title: MIR should use block arguments instead of PHI instructions
source: hn
url: https://discourse.llvm.org/t/rfc-change-mir-to-use-block-arguments-instead-of-phis/91657
date: '2026-08-26'
tags:
- amdgpu
- block-arguments
- catchup
- hn
- llvm
- mir
- phi-instructions
- register-allocation
- ssa-dataflow
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 7
hn_id: '49454460'
comments: https://news.ycombinator.com/item?id=49454460
why_read: This RFC proposes a change in MIR to use block arguments instead of PHI
  instructions. Reading it explains how this change simplifies register allocation
  infrastructure, particularly for AMDGPU.
authors:
- arsenm
---

LLVM is considering a significant architectural shift in its Machine IR (MIR), proposing to move from PHI instructions to block arguments for SSA dataflow representation. This change is not merely cosmetic; it directly addresses challenges in register allocation, particularly for AMDGPU.

The current PHI-based approach can complicate register assignment. By adopting block arguments, similar to MLIR, the proposal aims to simplify how values are passed between basic blocks, streamlining the entire code generation process. This could lead to more efficient and robust compiler optimizations.

Understanding such low-level compiler design choices is crucial for senior engineers, even if you are not a compiler developer. It provides insight into the fundamentals of how high-level code translates to efficient machine instructions and impacts hardware performance. This is core computer science applied at scale. Always keep an eye on how these foundational layers evolve.
