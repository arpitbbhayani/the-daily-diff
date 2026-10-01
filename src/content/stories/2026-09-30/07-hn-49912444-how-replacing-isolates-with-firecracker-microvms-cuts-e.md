---
title: How replacing isolates with Firecracker microVMs cuts edge latency
source: hn
url: https://www.netlify.com/blog/edge-functions-firecracker-microvms/
date: '2026-09-30'
tags:
- catchup
- edge-functions
- firecracker
- hn
- microvms
- unikraft
- v8-isolates
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49912444'
comments: https://news.ycombinator.com/item?id=49912444
why_read: Learn how Netlify rebuilt its edge computing architecture with Firecracker
  MicroVMs to achieve five times lower execution latency.
authors:
- jbott
image: /infographics/07-hn-49912444.jpg
---

Running billions of edge functions per day typically forces a difficult architectural trade-off between the isolation of virtual machines and the sub-millisecond cold starts of JavaScript isolates.

Netlify recently re-architected their edge runtime away from hosted V8 isolate services to dedicated Firecracker MicroVMs with Unikraft running directly inside their edge network. The new architecture achieves warm invocation latencies of roughly 5 to 6 milliseconds at the median, delivering a 5x speedup over the previous platform.

Moving isolation boundaries down into lightweight virtualization lets edge platforms execute complex native runtimes without sacrificing boot speed or multi-tenant security guarantees.
