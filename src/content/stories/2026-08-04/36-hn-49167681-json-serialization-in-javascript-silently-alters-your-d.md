---
authors:
- birdculture
comments: https://news.ycombinator.com/item?id=49167681
date: '2026-08-04'
depth_score: 7
hn_id: '49167681'
image: /infographics/36-hn-49167681.jpg
interest_score: 8
novelty_score: 6
section: engineering
source: hn
tags:
- catchup
- data-integrity
- hn
- javascript
- json
- number-precision
- serialization
- type-conversion
title: JSON serialization in JavaScript silently alters your data
url: https://blog.gaborkoos.com/posts/2026-08-03-Your-JSON-Is-Lying-to-You/
utility_score: 9
why_read: This article demonstrates how JSON serialization in JavaScript can silently
  modify data, altering numbers, dropping properties, and changing types. Readers
  will learn about these unexpected behaviors and their implications for data integrity.
---

Ever debugged a subtle data corruption bug with JSON? Your JSON.stringify might be quietly lying to you. This article dives into critical JavaScript serialization pitfalls that every senior engineer must know.

Did you know large integers can lose precision, undefined properties disappear, and NaN becomes null? These are not errors; they are by design according to the JSON standard and JavaScript's handling of numbers, yet they are frequent sources of insidious bugs in distributed systems.

Understanding these quirks is not academic; it is essential for data integrity across APIs. Prevent silent data loss and ensure your serialized data matches your expectations.