---
authors:
- Casey Muratori
comments: https://news.ycombinator.com/item?id=49166331
date: '2026-08-04'
depth_score: 8
hn_id: '49166331'
image: /infographics/09-hn-49166331.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- clean-code
- dry-principle
- hn
- performance
- polymorphism
- programming-best-practices
- single-responsibility
- small-functions
title: Many Clean Code Best Practices Create Horrible Performance
url: https://www.computerenhance.com/p/clean-code-horrible-performance
utility_score: 9
why_read: This article demonstrates the significant real-world performance costs incurred
  by blindly following common 'clean code' guidelines, providing objective measurements
  to challenge conventional programming advice.
---

Many of the "clean code" best practices we are taught, like strict adherence to polymorphism over conditional logic or breaking functions into minute pieces, might be doing more harm than good for performance. Casey Muratori makes a compelling case.

He points out that while these principles aim for readability and maintainability, they often introduce overhead that can lead to horrible performance. Think cache misses, increased indirection, and unnecessary function calls adding up rapidly.

This article forces a re-evaluation of how we apply engineering practices. It advocates for an approach where performance is not an afterthought but a first-class citizen, encouraging objective measurement to understand the real-world impact of our architectural choices.