---
title: Silent connection drops happen because AWS never sent FIN
source: hn
url: https://yeet.cx/blog/youre-not-crazy-they-never-sent-fin
date: '2026-10-10'
tags:
- aws-nlb
- catchup
- ebpf
- hn
- idle-timeout
- nat-gateway
- tcp-rst
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50034348'
comments: https://news.ycombinator.com/item?id=50034348
why_read: Read this to understand why AWS network components silently drop idle connections
  with RST packets instead of FIN. You will learn the mechanics behind intermittent
  502 errors and how to detect them using eBPF.
authors:
- Jacob Pradels
---

AWS Network Load Balancers and NAT Gateways will quietly tear down idle connections without ever sending a TCP FIN packet. If your service sits idle for longer than the three hundred and fifty second default timeout, AWS stops tracking the state entirely. The next time your application attempts to write data, the remote host rejects the packet with an immediate TCP RST.

This behavior causes intermittent HTTP 502 errors that surface only during periods of low traffic and vanish under steady load. Application logs will appear clean because the failure happens below the application layer in the networking stack. Rather than spending months hunting ghost timeouts, you can trace this behavior with Linux eBPF.

A small eBPF program attached to kernel TCP tracepoints can measure the exact idle duration before every reset. It records the local socket, remote endpoint, and seconds elapsed before the failed write. Inspecting socket idle durations at the kernel boundary exposes exactly when middleboxes purge connection state behind your back.

Diagnosing silent cloud timeouts requires visibility into connection state lifetimes rather than blind guesses in application logs.
