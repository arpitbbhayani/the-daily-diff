---
authors:
- Lucas Carlson
comments: https://news.ycombinator.com/item?id=49683962
date: '2026-09-13'
depth_score: 8
hn_id: '49683962'
image: /infographics/42-hn-49683962.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- atomicity
- catchup
- distributed-lock
- hn
- lease
- race-condition
- redis
- timeout
title: A lease with a timeout is not a true distributed lock
url: https://lucascarlson.net/2026/09/09/a-lease-with-a-timeout-is-not-a-lock/
utility_score: 9
why_read: This article provides a concrete, real-world example of how common 'locking'
  mechanisms using leases with timeouts can fail in distributed systems. Readers will
  learn about subtle race conditions and the importance of atomic operations when
  designing robust distributed systems.
---

Implementing distributed locks often seems straightforward, but hidden race conditions can plague systems for months. This article precisely breaks down why a "lease with a timeout" is not a true lock, even with atomic operations like Redis NX.

The author walks through a real-world bug – duplicate onboarding emails – and four progressively "better" but still flawed fixes. You will see how gaps between GET and SET, non-atomic operations, and client-side failures can lead to either data duplication or missing messages.

The critical insight is that true locking requires the entire operation to be atomic, not just parts of it. This is an invaluable read for any senior engineer working on scalable, fault-tolerant distributed systems. It teaches you to spot the subtle flaws in common concurrency patterns, ensuring your systems are truly robust.