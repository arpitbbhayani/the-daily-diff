---
title: Simplicity is a prerequisite for reliable systems
source: github
url: https://github.com/matthiasn/talk-transcripts/blob/master/Hickey_Rich/SimpleMadeEasy.md
date: '2026-09-04'
tags:
- catchup
- dijkstra
- github
- reliability
- simplicity
- system-design
section: engineering
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49562522'
comments: https://news.ycombinator.com/item?id=49562522
why_read: This talk distinguishes 'simple' from 'easy' and argues that simplicity
  is fundamental for building reliable systems. It provides a framework for understanding
  and advocating for true simplicity in engineering and design.
authors:
- Rich Hickey
---

Rich Hickey's "Simple Made Easy" talk remains one of the most impactful discussions on software design philosophy. It is not just about writing less code, but about fundamentally re-evaluating what makes a system maintainable and robust.

Hickey rigorously distinguishes "simple" from "easy." Simple means "single braid" or "unentangled" – components are distinct and have clear boundaries, making them easier to reason about and change. Easy means "at hand" or "familiar," which can often lead to complex, entangled systems because familiar patterns are not always simple ones.

The core takeaway is that designing for true simplicity, even if initially less "easy," yields immense long-term benefits in terms of reliability and evolvability. This framework helps you identify hidden complexities in your systems and make deliberate choices to untangle them.

This is not just theory; it is a practical mental model that senior engineers can apply daily to shape better architectures and foster more effective engineering practices.
