---
title: Reassigning __conditional_annotations__ can crash CPython interpreters with
  lazy annotations
source: hn
url: https://deadlovelll.github.io/2026-08-10-conditional-annotations-set-add-crash/
date: '2026-08-18'
tags:
- __conditional_annotations__
- annotations
- bug
- catchup
- cpython
- hn
- lazy-evaluation
- pep-649
- pep-749
- python-internals
- segfault
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49353279'
comments: https://news.ycombinator.com/item?id=49353279
why_read: This post explores a subtle CPython bug where reassigning `__conditional_annotations__`
  causes a segfault due to lazy annotation evaluation. Readers will learn about the
  internal mechanisms introduced by PEP 649 and PEP 749 for conditional annotations.
authors:
- Timofei Ivankov
---

Discovering a two-line Python program that segfaults the interpreter is rare, but this article uncovers a fascinating memory corruption bug stemming from CPython's new lazy annotation evaluation (PEPs 649 and 749). It is not a syntax error, but a subtle interaction with an internal set used for conditional annotations.

The issue arises when a module-level `__conditional_annotations__` variable, normally an internal set, is reassigned to a different type, like an integer. Later, when the interpreter attempts a `SET_ADD` operation on this integer, it triggers a memory access violation, crashing the process with a SIGBUS or segfault.

This deep dive offers principal-level insight into how Python manages its internal state and how bytecode instructions interact with runtime objects. It is a powerful reminder that even in high-level languages, understanding the underlying C implementation can be crucial for debugging and robust system design.
