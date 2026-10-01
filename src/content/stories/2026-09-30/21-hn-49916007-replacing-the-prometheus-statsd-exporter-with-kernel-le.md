---
title: Replacing the Prometheus statsd exporter with kernel level eBPF
source: hn
url: https://yeet.cx/blog/nobody-is-listening-on-8125
date: '2026-09-30'
tags:
- catchup
- ebpf
- hn
- prometheus
- statsd
- statsd-exporter
- traffic-control
- udp
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49916007'
comments: https://news.ycombinator.com/item?id=49916007
why_read: Learn how to replace user-space metrics exporters with an eBPF program that
  captures StatsD UDP packets directly from the kernel without listening sockets.
  This provides a simpler, lower-overhead architecture for extracting application
  metrics.
authors:
- Jacob Pradels
---

You do not need to run a dedicated listening daemon for every telemetry exporter on your hosts.

Traditional metric collection pipelines, like statsd_exporter, run a user-space socket listener that receives UDP packets on port 8125, parses them, and exposes Prometheus metrics. Instead of running dozens of separate user-space exporters in various languages, you can monitor network packets directly at the Linux traffic control layer using an eBPF program.

In this setup, applications continue to emit standard fire-and-forget UDP datagrams to localhost without any code alterations. A compact 165-line C kernel probe inspects raw packets before they reach socket buffers, extracting metrics without an active listening process bound to the port. This drastically reduces host overhead, simplifies daemon management, and slashes resource contention on high-throughput nodes.

Inspecting wire protocols at the kernel boundary eliminates the operational burden of maintaining separate exporter services across your infrastructure.
