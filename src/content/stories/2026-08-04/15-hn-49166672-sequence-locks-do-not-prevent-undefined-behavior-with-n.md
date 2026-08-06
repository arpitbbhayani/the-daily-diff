---
title: Sequence locks do not prevent undefined behavior with non-atomic data
source: hn
url: https://ekxide.io/blog/byte-wise-atomic-wrapper-to-prevent-ub/
date: '2026-08-04'
tags:
- atomic-operations
- c++
- catchup
- data-races
- hn
- lock-free
- rust
- sequence-lock
- undefined-behavior
section: systems
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49166672'
comments: https://news.ycombinator.com/item?id=49166672
why_read: This text explains a critical flaw in implementing sequence locks in languages
  like Rust and C++, where copying non-atomic data still leads to undefined behavior
  even if a data race is detected. Readers will understand why sequence locks alone
  are insufficient for preventing data races without decomposing data into individually
  atomic parts.
authors:
- Marika Lehmann
---

Even experienced concurrent programmers can fall into a trap with sequence locks: they do not actually prevent undefined behavior. While a sequence lock might detect a data race and prompt a retry, the act of copying the non-atomic data itself, even if discarded, triggers undefined behavior in languages like Rust and C++.

This is a critical, often overlooked detail in multithreaded programming, especially in high-reliability or safety-critical systems. The standard advice about sequence locks misses this subtle point, leaving applications vulnerable to elusive bugs.

Enter `iceoryx2's ByteAtomic`. This approach ensures that even individual bytes are read or written atomically, finally making sequence locks truly safe and preventing undefined behavior at the lowest level. This is a must-read if you are wrestling with safe, lock-free concurrency.
