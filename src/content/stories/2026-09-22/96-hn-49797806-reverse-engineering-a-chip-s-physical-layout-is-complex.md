---
title: Reverse engineering a chip's physical layout is complex
source: hn
url: https://mooofin.github.io/portfolio/blog/jane-street-asic.html
date: '2026-09-22'
tags:
- asic
- catchup
- chip
- hardware-reversing
- hn
- physical-layout
- reverse-engineering
section: engineering
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 8
hn_id: '49797806'
comments: https://news.ycombinator.com/item?id=49797806
why_read: This post details the unique challenges of reverse-engineering a chip from
  its physical layout, outlining the complex initial steps required to model its behavior
  from raw GDS data.
authors:
- Siddharth
---

Reverse-engineering an ASIC is a masterclass in deep systems understanding, and this blog post delivers an exceptional walkthrough of Jane Street's challenge. It is not about software; it is about recovering wire layouts, modeling gate behavior, and meticulously understanding circuit changes on each clock edge.

This level of detail forces you to think like a hardware designer and a low-level debugger simultaneously. The methodical approach to identifying and correcting mistakes in a vast network of interdependencies is a powerful lesson applicable to any complex system, hardware or software.

The article uses tools like Triton and Miasm, not just to solve a puzzle, but to illustrate the profound challenges of working with raw physical layouts. This experience hones your ability to reason about hidden logic and emergent behavior in intricate systems.

It is a fantastic demonstration of engineering depth, pushing boundaries far beyond typical software problems.
