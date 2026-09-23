---
title: How to Self-Host Services Despite Carrier-Grade NAT
source: hn
url: https://david.alvarezrosa.com/posts/self-hosting-behind-cgnat/
date: '2026-09-21'
tags:
- carrier-grade-nat
- catchup
- hn
- homelab
- ipv4-shortage
- self-hosting
- vps-bridge
- wireguard
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 6
hn_id: '49794734'
comments: https://news.ycombinator.com/item?id=49794734
why_read: This article explains the challenges of self-hosting services when behind
  carrier-grade NAT. It provides a practical solution using a WireGuard tunnel to
  a VPS bridge.
authors:
- "David \xC1lvarez Rosa"
---

Dealing with Carrier-Grade NAT (CGNAT) from your ISP can be a nightmare for self-hosting or exposing services from a restricted network. The old trick of port forwarding simply does not work because your router shares a private IP.

This article provides an extremely practical and actionable blueprint to bypass CGNAT using WireGuard and a small, inexpensive VPS as a public bridge. It walks you through setting up a bidirectional WireGuard tunnel where your homelab initiates the connection, meaning no static IP is needed at home.

The detailed topology and configuration snippets make it easy to follow. This is not just theoretical; it is a proven approach to regain control over your network and truly own your services.

It offers a clear path to break free from network limitations.
