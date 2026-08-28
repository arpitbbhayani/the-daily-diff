---
authors:
- lichtenberger
comments: https://news.ycombinator.com/item?id=49445884
date: '2026-08-26'
depth_score: 8
hn_id: '49445884'
image: /infographics/16-hn-49445884.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- flattening
- hn
- jvm-optimization
- representation-conversion
- value-classes
title: Value Classes Aren't Always Faster, Need Compiler Sympathy
url: https://johan-sjolen.github.io/post/compiler-sympathy/compiler-sympathy/
utility_score: 8
why_read: This post explains that value classes are not always a performance improvement
  and details the JVM's current capabilities and limitations. Readers will gain a
  nuanced understanding of when and how to use value classes effectively for optimization.
---

Java's Project Valhalla promises significant performance gains with value classes, primarily through memory flattening and scalarization. However, this deep dive reveals that blindly adopting them can paradoxically lead to performance regressions if the compiler lacks "sympathy."

The JVM sometimes must convert between flattened and reference representations, incurring overheads. For instance, generic virtual calls often necessitate materialization, negating expected benefits. Understanding when these conversions occur is key to leveraging Valhalla effectively.

This article provides concrete examples and a mental model for reasoning about value class performance. It equips you with the knowledge to write code that truly benefits from these new features, rather than hindering optimization.