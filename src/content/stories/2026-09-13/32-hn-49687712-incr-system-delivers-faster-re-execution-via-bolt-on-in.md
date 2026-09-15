---
title: Incr system delivers faster re-execution via bolt-on incrementalization
source: hn
url: https://www.usenix.org/conference/osdi26/presentation/xie-yizheng
date: '2026-09-13'
tags:
- catchup
- dependency-tracking
- hn
- incr
- incrementalization
- performance-optimization
- re-execution
- shell-programs
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49687712'
comments: https://news.ycombinator.com/item?id=49687712
why_read: This paper introduces Incr, a system that significantly accelerates program
  re-execution in dynamic environments like the Unix shell by automatically incrementalizing
  computation. Readers will learn how Incr uses dependency tracking and optimizations
  to achieve dramatic speedups without requiring developer annotations or code changes.
authors:
- Yizheng Xie
- Evangelos Lamprou
- Jerry Xia
- Nikos Vasilakis
---

Imagine cutting down your shell script re-execution times by over 30x without changing a single line of code. The Incr system, presented at OSDI '26, achieves this by intelligently tracking interdependencies and reusing intermediate results.

This is not just about speed; it is about smarter execution. Incr employs sophisticated effect analysis, even handling non-idempotent computations correctly. This means your development and debugging loops become dramatically faster, making daily work more efficient.

The beauty of this "bolt-on incrementalization" is its seamless integration. No annotations, no manual effort, just pure acceleration. This system truly elevates developer productivity in polyglot environments.
