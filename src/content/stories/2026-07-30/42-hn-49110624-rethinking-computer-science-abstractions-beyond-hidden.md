---
authors:
- tosh
comments: https://news.ycombinator.com/item?id=49110624
date: '2026-07-30'
depth_score: 8
hn_id: '49110624'
image: /infographics/42-hn-49110624.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- abi
- abstractions
- catchup
- debuggers
- hn
- information-hiding
- language-implementation
- programming-infrastructure
title: Rethinking Computer Science Abstractions Beyond Hidden Implementations
url: https://www.humprog.org/~stephen/blog/research/recovering-abstraction.html
utility_score: 7
why_read: This post challenges the traditional view of abstractions in computer science,
  particularly in language implementation, where details are typically hidden. Readers
  will learn about alternative models, such as ABIs and debuggers, that intentionally
  expose implementation choices and their benefits.
---

Abstractions are core to computer science, but we often only think about them one way: hiding the messy details of implementation behind a clean interface. This traditional "existential" approach, where internal mechanisms are fully concealed, can sometimes limit flexibility and introspection in complex systems.

This blog challenges that convention, proposing a concept of "reversing abstractions." It highlights how existing concepts like Application Binary Interfaces (ABIs) and debuggers already opt out of strict hiding, instead exposing internal conventions or meta-level details to enable interoperability and deep inspection.

Thinking about systems not just as impenetrable black boxes but as layers with selectively permeable boundaries can lead to more robust, maintainable, and debuggable architectures. This is a powerful thought experiment for any senior engineer designing new infrastructure, encouraging a design philosophy that embraces transparency where it truly adds value.