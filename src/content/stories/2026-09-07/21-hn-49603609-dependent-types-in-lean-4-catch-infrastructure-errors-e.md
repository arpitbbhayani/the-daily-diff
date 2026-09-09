---
title: Dependent Types in Lean 4 Catch Infrastructure Errors Early
source: hn
url: https://ngrislain.github.io/blog/2026-9-6-like-terraform-but-in-lean-4/
date: '2026-09-07'
tags:
- catchup
- compile-time-checks
- dependent-types
- hn
- infrastructure-as-code
- lean-4
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49603609'
comments: https://news.ycombinator.com/item?id=49603609
why_read: Readers will learn how dependent types in Lean 4 can be leveraged for infrastructure-as-code
  to catch errors at compile time, improving development efficiency and reliability.
authors:
- NGrislain
---

Imagine an infrastructure-as-code system that virtually eliminates runtime deployment errors. This article showcases an experiment with Lean 4, leveraging its dependent types to catch common infrastructure mistakes, like deploying to a non-existent region, directly at compile time.

This is a significant shift from traditional IaC tools where such errors are often only discovered during a costly 'apply' operation. The compiler becomes a powerful guardian, ensuring correctness before any changes hit your cloud accounts.

The author also highlights Lean's unique advantage for AI-assisted development: "it compiles" carries real information, creating a tight, precise, and machine-checkable feedback loop. This insight into language design for AI agents is critical for building more reliable systems.
