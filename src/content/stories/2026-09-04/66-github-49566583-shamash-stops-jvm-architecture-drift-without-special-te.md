---
title: Shamash stops JVM architecture drift without special test code
source: github
url: https://github.com/aalsanie/shamash
date: '2026-09-04'
tags:
- architecture-violations
- catchup
- ci
- dependency-cycles
- github
- java
- jvm-architecture-drift
- kotlin
- static-analysis
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49566583'
comments: https://news.ycombinator.com/item?id=49566583
why_read: Readers will learn about Shamash, a tool that automatically scans Java/Kotlin
  applications for architecture violations and dependency cycles. It helps prevent
  architectural drift in CI without requiring architecture-test code.
authors:
- aalsanie
---

Stop architecture drift dead in its tracks. Shamash is a JVM tool that scans compiled Java and Kotlin code, baselining existing architecture violations and blocking new ones directly in your CI pipeline.

What makes it stand out? It works without any architecture-test code or configuration. This means you can enforce critical architectural constraints, like preventing dependency cycles, with minimal setup and overhead. It is a game-changer for maintaining large, complex codebases.

This is pure gold for engineering practices and sustainable system design.
