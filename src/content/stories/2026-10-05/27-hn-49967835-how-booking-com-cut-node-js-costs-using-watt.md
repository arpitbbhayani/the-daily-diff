---
title: How Booking.com cut Node.js costs using Watt
source: hn
url: https://adventures.nodeland.dev/archive/how-bookingcom-cut-nodejs-costs-by-38-with-watt/
date: '2026-10-05'
tags:
- catchup
- hn
- node-js
- pm2
- so-reuseport
- watt
- worker-threads
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49967835'
comments: https://news.ycombinator.com/item?id=49967835
why_read: Read this to understand how replacing IPC process clustering with worker
  threads and kernel socket reuse can significantly cut compute costs and latency.
authors:
- ejboy
---

Scaling Node.js services typically relies on process managers like PM2, but traditional cluster architectures introduce hidden IPC overhead and memory bloat. Booking.com reduced compute costs by 38 percent and lowered tail latency across p75 through p99.9 by up to 10 percent without altering application code.

The improvement came from migrating from process clustering to worker threads managed via Watt. Instead of funneling every incoming TCP request through an IPC supervisor hop, individual workers accept incoming connections directly from the Linux kernel using the SO_REUSEPORT socket option.

Eliminating the supervisor hop removes significant context switching under high load. During mixed-workload stress testing, the service sustained 40 to 50 percent more throughput while running on 30 percent fewer Kubernetes pods and using 20 percent less memory per pod.

Revisiting fundamental network socket configurations often unlocks performance gains that application code optimizations cannot match.
