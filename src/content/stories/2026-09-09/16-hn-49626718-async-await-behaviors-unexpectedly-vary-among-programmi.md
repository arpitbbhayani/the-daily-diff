---
authors:
- Gavin Gray
comments: https://news.ycombinator.com/item?id=49626718
date: '2026-09-09'
depth_score: 8
hn_id: '49626718'
image: /infographics/16-hn-49626718.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- async-await
- catchup
- concurrency
- hn
- language-semantics
- runtime-behavior
title: Async/Await behaviors unexpectedly vary among programming languages
url: https://cel.cs.brown.edu/blog/design-space-async-await/
utility_score: 8
why_read: This text reveals that async/await semantics differ significantly across
  programming languages, challenging common assumptions about their consistency. Readers
  will learn the unexpected variability in how various runtimes execute seemingly
  simple async programs.
---

You might think you know async/await, but this deep dive reveals just how different its semantics are across languages like Python, Rust, and Swift. Even a simple fire-and-forget logging task produces four distinct outputs across seven runtimes.

The paper uncovers crucial design dimensions causing these divergences, from task scheduling to cancellation and error handling. This is not just theoretical; these subtleties directly impact program correctness and portability in concurrent systems.

Understanding these underlying differences is essential for senior engineers. It helps in debugging tricky concurrency bugs and designing robust, cross-language systems. This knowledge will change how you approach concurrent programming.