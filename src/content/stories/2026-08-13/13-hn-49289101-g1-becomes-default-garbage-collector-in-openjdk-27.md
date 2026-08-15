---
title: G1 Becomes Default Garbage Collector in OpenJDK 27
source: hn
url: https://tschatzl.github.io/2026/08/10/jdk27-g1-serial-parallel-gc-changes.html
date: '2026-08-13'
tags:
- catchup
- default-gc
- g1-gc
- garbage-collection
- hn
- hotspot-vm
- openjdk-27
- stw-collectors
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49289101'
comments: https://news.ycombinator.com/item?id=49289101
why_read: This article provides a concise overview of the most impactful changes to
  OpenJDK 27's stop-the-world garbage collectors, focusing on G1 becoming the default
  and significant internal refactorings. Readers will understand the motivations behind
  these crucial updates.
authors:
- 0x54MUR41
---

OpenJDK 27 introduces significant changes to its garbage collectors, most notably making G1 the default across all environments. This is not a minor update; it reflects years of G1's maturity and performance closing in on other collectors, simplifying operational choices for Java applications.

Beyond the default change, the update includes substantial internal refactorings, such as replacing `volatile` with `Atomic<T>` for cross-thread shared variables, enhancing correctness and robustness. There are also deep cleanups in G1's state machine, tackling very old code.

Crucially, these changes also lay the groundwork for future features like JEP 401: Value Objects (Preview). Understanding these GC internals is vital for senior engineers to optimize Java application performance, debug memory, and effectively leverage upcoming JDK capabilities.
