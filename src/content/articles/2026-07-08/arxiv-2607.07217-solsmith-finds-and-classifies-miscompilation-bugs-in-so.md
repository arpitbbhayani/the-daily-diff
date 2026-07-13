---
title: SolSmith Finds and Classifies Miscompilation Bugs in Solidity Compiler
source: arxiv
url: http://arxiv.org/abs/2607.07217v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- compiler-testing
- cs.CR
- cs.PL
- cs.SE
- ethereum
- fuzz-testing
- miscompilation-bugs
- smart-contracts
- solidity
arxiv_id: '2607.07217'
categories: cs.SE, cs.CR, cs.PL
why_read: This paper introduces SolSmith, a differential fuzz testing tool, which
  has uncovered 25 previously unnoticed miscompilation bugs in the Solidity compiler.
  Readers will learn about a rigorous approach to compiler testing and a qualitative
  analysis of these critical defects.
authors:
- Bhargava Shastry
---

Smart contract compilers are the bedrock of public blockchains, and their correctness is paramount. Yet, miscompilation bugs, where the compiler generates incorrect code, can go unnoticed for years with serious implications.
SolSmith, a semantics-aware differential fuzz testing tool for the Solidity compiler, has found 25 such miscompilation bugs over three years. It generates valid test programs designed to stress code generation and optimization components.
The research provides a detailed qualitative and quantitative analysis, classifying these bugs by nature, root-causes, and impact. This sheds critical light on the often-hidden pitfalls of optimizing compilers.
Understanding these deep compiler defects is essential for any engineer working on critical systems or involved in high-stakes software development.
