---
title: Why code generation from formal specifications is impractical
source: hn
url: https://buttondown.com/hillelwayne/archive/what-if-the-spec-doesnt-match-the-code/
date: '2026-10-04'
tags:
- catchup
- formal-methods
- hn
- pluscal
- program-extraction
- refinement
- specification-drift
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49954953'
comments: https://news.ycombinator.com/item?id=49954953
why_read: Understand why synchronizing formal specifications with implementation code
  via extraction or refinement is prohibitively expensive, and why high-level specs
  remain valuable regardless.
authors:
- gavinhoward
---

Many software engineers assume that formal specifications like TLA+ or PlusCal are only useful if they can directly compile down into production code. When they discover that code extraction is rare, they often dismiss formal methods entirely.

Extractable specifications force you to lower your abstraction level. The moment your spec includes connection pools, queue serialization, and database persistence, it loses the concise clarity that makes modeling concurrency possible in the first place. You trade high-level mathematical verification for low-level boilerplate.

The real power of formal modeling is isolating edge cases in concurrency and distributed state machines before writing a single line of code. Verifying the design independently and bridging the gap through property-based tests delivers vastly better leverage than trying to maintain fully refined proofs.

A specification should help you find race conditions in your system architecture, not replace your compiler.
