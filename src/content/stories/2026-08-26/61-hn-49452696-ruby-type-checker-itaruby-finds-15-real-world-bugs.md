---
title: Ruby type checker itaruby finds 15 real-world bugs
source: hn
url: https://aryrabelo.com/en/itaruby/
date: '2026-08-26'
tags:
- bug-finding
- catchup
- hn
- language-server
- ruby-type-checker
- rust
- salsa-engine
- static-analysis
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49452696'
comments: https://news.ycombinator.com/item?id=49452696
why_read: This document showcases itaruby, a new inference-first Ruby type checker
  built in Rust. Readers will learn about its proven ability to find real-world bugs
  in major Ruby projects and its technical design.
authors:
- Ary Rabelo
---

A new Ruby type checker, `itaruby`, built in Rust, has already identified 15 verified bugs in major projects like Discourse, Rails, and Shopify's ruby-lsp. This tool is inference-first, meaning it does not require explicit type declarations.

The checker's speed and accuracy are impressive, built on an incremental recomputation engine similar to rust-analyzer. Within just hours of its initial commit, it proved its worth by catching real-world issues across diverse Ruby applications.

This demonstrates a significant leap for Ruby developer productivity and code quality. Engineers can learn from its design, particularly the blend of Rust for performance and an inference-first approach for minimal friction, to apply similar principles in their own tooling efforts.

Proactive bug detection just got a powerful new ally in the Ruby ecosystem.
