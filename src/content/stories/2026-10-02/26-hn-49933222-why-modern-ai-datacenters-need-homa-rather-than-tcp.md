---
title: Why modern AI datacenters need Homa rather than TCP
source: hn
url: https://www.theregister.com/networks/2026/10/01/stanford-prof-is-beating-the-drum-for-a-new-protocol-to-replace-tcp/5300629
date: '2026-10-02'
tags:
- catchup
- datacenter-networking
- hn
- homa-protocol
- linux-kernel
- tcp
- traffic-congestion
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49933222'
comments: https://news.ycombinator.com/item?id=49933222
why_read: Understand why traditional TCP struggles with emerging AI workloads and
  how the Homa transport protocol provides a drop-in networking alternative.
authors:
- Joab Jackson
---

TCP was engineered for wide-area networks with unreliable links, not modern datacenter environments where microsecond tail latencies dictate overall system throughput. For large AI clusters and distributed databases, standard TCP congestion control and head-of-line blocking frequently cause severe latency spikes under bursty Remote Procedure Call traffic.

John Ousterhout has been advocating for Homa, a clean-slate transport protocol designed specifically for datacenter networks. Rather than managing congestion purely via sender-side throttling and windowing, Homa uses receiver-driven packet scheduling and dynamic priority queues within network switches. Packets from shorter messages receive higher priority, dramatically cutting tail latency for RPCs without sacrificing bandwidth on large payload transfers.

Because Homa operates as an installable Linux kernel module alongside TCP, teams can migrate workloads incrementally. If your distributed architecture suffers from incast congestion or high p99 RPC latency, exploring modern transport alternatives like Homa is becoming essential.
