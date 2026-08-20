---
title: Popcorn democratizes fast kernel dispatching for changing model architectures
source: hn
url: https://blog.tilderesearch.com/blog/popcorn
date: '2026-08-18'
tags:
- catchup
- frontier-models
- hn
- kernel-dispatching
- kernel-selection
- model-architecture
- op-inventory
- popcorn
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49353646'
comments: https://news.ycombinator.com/item?id=49353646
why_read: This text introduces Popcorn, a system designed to dynamically select the
  fastest kernel implementation for frontier models with rapidly changing architectures.
  Readers will learn how Popcorn solves the complex problem of kernel dispatching
  in a dynamic environment.
authors:
- Timor Averbuch
- Dhruv Pai
---

The rapidly changing landscape of frontier AI model architectures creates a huge challenge: how do you keep up with optimal kernel implementations when your op inventory is in constant flux? Popcorn, an open-source project, offers a compelling solution.

Popcorn acts as an intelligent dispatcher, sitting between your model code and the underlying GPU kernels. It dynamically routes each API call to the fastest, validated implementation for your specific inputs and hardware, ensuring both speed and correctness. This is a significant leap from traditional approaches that assume a stable set of fused kernels.

For senior engineers building or operating AI infrastructure, this democratized approach to kernel dispatching could unlock substantial performance gains and simplify the management of complex, evolving ML stacks.
