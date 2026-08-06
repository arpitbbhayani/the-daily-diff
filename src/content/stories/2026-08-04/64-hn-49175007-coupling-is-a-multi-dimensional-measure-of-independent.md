---
title: Coupling is a multi-dimensional measure of independent variability
source: hn
url: https://www.enterpriseintegrationpatterns.com/ramblings/coupling_facets.html
date: '2026-08-04'
tags:
- catchup
- coupling
- distributed-architectures
- enterprise-integration-patterns
- hn
- independent-variability
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49175007'
comments: https://news.ycombinator.com/item?id=49175007
why_read: Readers will learn that coupling is a complex, multi-dimensional concept,
  not binary. They will gain a clearer understanding of coupling as the independent
  variability of connected systems, moving beyond simplistic views.
authors:
- Gregor Hohpe
---

Coupling is often simplified to a binary concept, but this excellent piece reveals its intricate, multi-dimensional nature, a crucial insight for any architect building distributed systems. It challenges the common wisdom by dissecting coupling into various forms beyond mere dependency.

Understanding these different facets is critical. For instance, implicit coupling via shared databases or event schemas creates hidden dependencies that undermine independent variability, leading to unexpected failures or deployment complexities. This distinction helps you proactively identify and mitigate these architectural risks.

This article provides a refined vocabulary and framework for analyzing architectural trade-offs. It helps you articulate why certain design choices lead to robust, scalable systems while others create intractable problems, ultimately enhancing your design judgment.
