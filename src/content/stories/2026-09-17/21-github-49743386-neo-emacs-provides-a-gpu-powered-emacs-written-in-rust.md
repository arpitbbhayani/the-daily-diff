---
title: NEO Emacs provides a GPU-powered Emacs written in Rust for modern features
source: github
url: https://github.com/eval-exec/neomacs
date: '2026-09-17'
tags:
- catchup
- concurrent-gc
- emacs
- emacs-compatibility
- github
- gpu
- multi-threading
- rust
section: engineering
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49743386'
comments: https://news.ycombinator.com/item?id=49743386
why_read: Read this to understand the ambitious vision for NEO Emacs, a project rewriting
  Emacs in Rust for GPU acceleration and modern features while maintaining full compatibility.
  It outlines goals for 10x performance, modern display, and multi-threading.
authors:
- Eval Exec
---

Rewriting a decades-old, foundational tool like Emacs is no small feat, but Neo Emacs aims to achieve a 10x performance boost by moving to Rust, GPU acceleration, and a new display engine. This is not just a port; it is a full modernization effort addressing fundamental limitations of its C-based predecessor.

The project promises multi-threaded Elisp execution with zero-pause concurrent garbage collection, a significant leap from the single-threaded nature of traditional Emacs. For engineers, this showcases how deep architectural changes can unlock new levels of performance and responsiveness even for highly complex, extensible applications.

It is an excellent case study in system redesign, highlighting trade-offs and benefits of adopting modern languages and hardware for legacy software. You gain insights into how a team tackles such an ambitious undertaking, keeping 100 percent compatibility with existing ecosystems.
