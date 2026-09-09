---
title: Model compiler-checked events in Go without native sum types
source: hn
url: https://viviersoft.com/blog/ddd-go-1-sum-types/
date: '2026-09-07'
tags:
- catchup
- compiler-checks
- discriminated-unions
- event-sourcing
- go-lang
- hn
- sum-types
- type-systems
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49600704'
comments: https://news.ycombinator.com/item?id=49600704
why_read: This article explains sum types and their utility, especially in event-sourced
  systems. It demonstrates how to achieve similar compiler-checked event modeling
  in Go despite lacking native sum type support.
authors:
- Valentin Vivier
---

Go's lack of native sum types can make modeling complex domain events tricky, especially in event-sourced architectures. However, this article demonstrates powerful patterns to effectively emulate them, allowing the compiler to check for exhaustive event handling.

This means you can structure your domain events with type safety that ensures every new event variant forces a compile-time check in all relevant switch statements. This prevents runtime errors and significantly improves maintainability for backend Go services.

It is a practical deep dive into elevating your Go code's robustness and architectural clarity.
