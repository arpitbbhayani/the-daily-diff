---
title: GEFS crash-safe snapshotting filesystem port to OpenBSD in early preview
source: hn
url: https://marc.info/?l=openbsd-tech&m=178948744271633&w=2
date: '2026-09-15'
tags:
- catchup
- copy-on-write
- crash-safe
- filesystem
- gefs
- hn
- openbsd
- porting
- snapshotting
section: databases
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49715590'
comments: https://news.ycombinator.com/item?id=49715590
why_read: This post offers an early glimpse into the ongoing effort to port GEFS,
  a new crash-safe and snapshotting filesystem, to OpenBSD. Readers will understand
  its current state, key features, and the primary technical hurdles remaining in
  its development.
authors:
- ori
---

A new crash-safe, snapshotting, copy-on-write file system named GEFS, originally from Plan 9, is now being ported to OpenBSD. This is not just a casual project, but a deep dive into core storage concepts.

It tackles fundamental challenges like consistency protocols and ensuring correct write ordering, which are absolutely crucial for any reliable data system. Understanding these low-level file system guarantees is vital for designing robust database systems.

This offers a unique perspective on storage engine design from a Plan 9 philosophy, providing concrete technical insights into how data persistence and recovery are truly engineered at the kernel level.
