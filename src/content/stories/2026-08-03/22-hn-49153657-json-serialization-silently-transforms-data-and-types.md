---
title: JSON serialization silently transforms data and types
source: hn
url: https://blog.gaborkoos.com/posts/2026-08-03-Your-JSON-Is-Lying-to-You/
date: '2026-08-03'
tags:
- catchup
- data-integrity
- hn
- javascript-quirks
- json-serialization
- number-precision-loss
- type-coercion
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49153657'
comments: https://news.ycombinator.com/item?id=49153657
why_read: This article demonstrates how JSON serialization in JavaScript can silently
  corrupt or transform data and types, leading to unexpected behavior. Readers will
  learn about these common pitfalls and the underlying reasons due to JSON's limited
  grammar.
authors:
- alvis
---

Are you relying on JSON serialization in JavaScript without fully understanding its quirks? The common assumption that `JSON.stringify` and `JSON.parse` perfectly round-trip your data can lead to nasty surprises and subtle bugs that are hard to debug.

The article exposes several critical issues. For instance, large integers can silently lose precision, `undefined` values simply disappear, `Date` objects become strings, and `NaN` is converted to `null`. These are not error conditions; they are standard behaviors that can cause silent data corruption or unexpected application states if you are not aware of them.

Understanding these specific transformations is vital for any engineer working with data contracts and APIs. It underscores the importance of explicit data validation and careful consideration of type handling, especially when designing robust distributed systems that exchange data across different programming environments. Do not let JSON lie to you.
