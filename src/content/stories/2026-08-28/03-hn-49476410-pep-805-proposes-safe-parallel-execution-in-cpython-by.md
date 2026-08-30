---
authors:
- Mark Shannon
- Daniele Parmeggiani
comments: https://news.ycombinator.com/item?id=49476410
date: '2026-08-28'
depth_score: 9
hn_id: '49476410'
image: /infographics/03-hn-49476410.jpg
interest_score: 9
novelty_score: 8
section: engineering
source: hn
tags:
- catchup
- cpython
- global-interpreter-lock
- hn
- object-sharing
- parallel-execution
- pep-805
- race-freedom
title: PEP 805 proposes safe parallel execution in CPython by default
url: https://peps.python.org/pep-0805/
utility_score: 9
why_read: This PEP proposes internal changes and a new API for safe, parallel execution
  in CPython, making code race-free by default. Readers will understand how CPython
  plans to achieve parallel execution while preventing race conditions by default,
  and how object sharing is managed.
---

Python's Global Interpreter Lock (GIL) has been a long-standing constraint on true parallelism. Now, PEP 805 proposes a radical shift: safe, parallel execution in CPython by default, building on the optional GIL removal in PEP 703.

The core idea is brilliant: objects are race-free by default. If you want to share mutable values between parallel threads, you must explicitly declare them as safe. This flips the script on traditional concurrency models, aiming for safety by design rather than by careful (and error-prone) manual locking.

This PEP delves into ThreadGroup objects, synchronization primitives, and even the implications for the C API. For any senior engineer building scalable Python systems, understanding this proposal is crucial for future-proofing your architectures and unlocking new levels of performance.