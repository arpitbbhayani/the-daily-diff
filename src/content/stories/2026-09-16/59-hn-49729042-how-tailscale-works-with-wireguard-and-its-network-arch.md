---
title: How Tailscale Works with WireGuard and its Network Architecture
source: hn
url: https://tailscale.com/blog/how-tailscale-works
date: '2026-09-16'
tags:
- catchup
- hn
- hub-and-spoke
- network-architecture
- tailscale
- vpn
- wireguard
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49729042'
comments: https://news.ycombinator.com/item?id=49729042
why_read: This article explains the fundamental architecture of Tailscale, detailing
  how it leverages WireGuard and avoids the traditional hub-and-spoke VPN model. Readers
  will gain a clear understanding of Tailscale's underlying mechanics and its differentiation
  in network design.
authors:
- Avery Pennarun
---

Ever wondered how Tailscale achieves its magic of connecting devices effortlessly across different networks? It is more than just WireGuard. The core innovation lies in its control plane and sophisticated NAT traversal.

Tailscale uses WireGuard for the data plane, but the real engineering marvel is how it establishes direct peer-to-peer connections even behind restrictive firewalls. This involves a combination of STUN, TURN, and their proprietary DERP relay network to ensure every device can find and communicate with every other device in your network.

Understanding Tailscale's architecture provides a masterclass in distributed systems design, secure networking, and robust peer discovery. It is an invaluable read for anyone building or scaling network infrastructure.

Learn how to build resilient, distributed networks that just work.
