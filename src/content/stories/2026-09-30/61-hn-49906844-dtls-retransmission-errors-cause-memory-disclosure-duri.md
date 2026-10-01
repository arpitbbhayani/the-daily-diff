---
title: Dtls retransmission errors cause memory disclosure during suspended writes
source: hn
url: https://openssl-library.org/news/secadv/20260929.txt
date: '2026-09-30'
tags:
- buffer-offset
- catchup
- cve-2026-84782
- dtls
- hn
- openssl
- out-of-bounds-read
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49906844'
comments: https://news.ycombinator.com/item?id=49906844
why_read: Understand how improper state handling during suspended DTLS handshake writes
  can lead to out-of-bounds reads and memory leaks. This advisory explains the mechanics
  behind CVE-2026-84782 and its security impact.
authors:
- joshcsimmons
---

A critical DTLS vulnerability in OpenSSL (CVE-2026-84782) highlights the subtle concurrency dangers in asynchronous networking stacks when buffer offsets are shared across state machines.

The flaw occurs when a fragmented handshake write operation suspends after returning WANT_WRITE because the underlying transport is blocked. If an independent retransmission timer fires while that write is suspended, the retransmit logic reuses the exact same internal buffer tracking without rewinding the position offset to zero. This causes the retransmitted message to read leftover bytes from the in-flight packet, leaking uninitialized heap memory or crashing when reading past allocated boundaries.

Even if the retransmission completes, it overwrites shared bookkeeping state needed by the original write. Handling partial writes across transport suspensions requires strict separation between in-flight state tracking and retransmission queues.
