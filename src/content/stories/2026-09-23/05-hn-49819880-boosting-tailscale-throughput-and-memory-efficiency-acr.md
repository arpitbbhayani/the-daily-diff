---
title: Boosting Tailscale throughput and memory efficiency across workloads
source: hn
url: https://tailscale.com/blog/making-tailscale-faster
date: '2026-09-23'
tags:
- catchup
- hn
- multi-queue
- nat-traversal
- network-performance
- segmentation-offloads
- tailscale
- wireguard-go
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49819880'
comments: https://news.ycombinator.com/item?id=49819880
why_read: Understand the concrete data plane optimizations Tailscale is deploying
  to boost network throughput and decrease memory overhead. You will learn about multi-queue
  architectures, segmentation offloads, and tooling improvements for performance-sensitive
  workloads.
authors:
- Kabir Sikand
- Kevin Purdy
image: /infographics/05-hn-49819880.jpg
---

High-throughput virtual networking often chokes at the user space to kernel boundary. When handling saturated network connections, single-threaded packet processing loops rapidly become CPU-bound. Tailscale has systematically attacked these bottlenecks, scaling wireguard-go beyond 10 Gbps on bare metal and leveraging UDP segmentation offload to quadruple throughput for demanding workloads.

Their latest architectural leap targets high-traffic app connectors, subnet routers, and exit nodes using multi-queue technology. Instead of serializing packet streams through a single TUN interface worker, Tailscale splits traffic across multiple kernel queues. This allows concurrent processing across CPU cores, dramatically lowering lock contention and reducing memory footprint during peak transfers.

Eliminating per-packet overhead at the system boundary is the only reliable way to achieve line-rate performance in software-defined networks.
