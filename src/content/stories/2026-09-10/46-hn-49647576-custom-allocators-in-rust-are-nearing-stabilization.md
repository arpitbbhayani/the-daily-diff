---
title: Custom allocators in Rust are nearing stabilization
source: hn
url: https://cetra3.github.io/blog/state-of-allocators-2026-part-2/
date: '2026-09-10'
tags:
- allocator-trait
- api-stabilization
- box-new-in
- catchup
- custom-allocators
- hn
- rust
- vec-new-in
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49647576'
comments: https://news.ycombinator.com/item?id=49647576
why_read: This article provides an update on the stabilization efforts for custom
  allocators in Rust, detailing the current API surface for the Allocator trait and
  its integration with Vec and Box.
authors:
- fanf2
---

Rust engineers, the wait for stable custom allocators is finally nearing its end! This detailed update breaks down the current state, showcasing the `Allocator` trait and its integration with core types like `Vec` and `Box`. 

The post dives into the `unsafe trait Allocator` and its associated methods, explaining the critical `allocate` and `deallocate` functions. It highlights how `Box::new_in` and `Vec::new_in` enable developers to plug in their own memory strategies. This is not just theoretical; it opens doors for significant performance gains and resource control in high-performance applications. 

You will learn about the precise API surface and the implications for building more efficient and specialized Rust systems. This is a must-read for anyone doing serious systems programming in Rust.
