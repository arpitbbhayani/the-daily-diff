---
title: Tailcat remakes netcat for secure communication over Tailscale's data plane
source: github
url: https://github.com/tailscale/tailcat
date: '2026-08-26'
tags:
- catchup
- data-plane
- encrypted-tunnels
- github
- nat-hole-punching
- netcat
- tailcat
- tailscale
- wireguard
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49452990'
comments: https://news.ycombinator.com/item?id=49452990
why_read: This text introduces Tailcat, an open-source tool that functions like netcat
  using Tailscale's data plane for secure, point-to-point connections. Readers will
  learn how it leverages WireGuard, DERP, and NAT hole-punching while bypassing the
  control plane.
authors:
- Tailscale
---

Ever wondered how Tailscale's secure tunnels actually work at a low level? Tailcat is a brilliant open-source project that strips away the control plane to show you. It is like `netcat` but built directly on Tailscale's `magicsock` data plane, giving you WireGuard-encrypted tunnels.

This means you get all the benefits of NAT hole-punching and DERP relays for reliable connectivity, without needing Tailscale's coordination servers. Connection metadata is exchanged out-of-band, offering a peek into the core mechanisms that make Tailscale so powerful.

This project is a masterclass in distributed networking, showing how you can leverage robust P2P primitives to create secure, ad-hoc connections. It is incredibly useful for anyone designing or debugging complex network architectures, or simply wanting to understand how to build secure network utilities from the ground up.
