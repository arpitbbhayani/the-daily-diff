---
title: WireGuard over TCP offers performance and firewall benefits
source: hn
url: https://wireguardtcp.net/
date: '2026-08-02'
tags:
- catchup
- firewalls
- hn
- linux-kernel
- network-performance
- tcp
- udp
- wireguard
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49148335'
comments: https://news.ycombinator.com/item?id=49148335
why_read: This post details WireGuard's new opt-in TCP transport mode, presenting
  measured data showing performance gains in throughput, requests, and CPU usage on
  specific network paths, along with its firewall benefits.
authors:
- Dragos Ruiu
- Jeff Nathan
---

WireGuard, known for its simplicity and performance over UDP, now has an opt-in TCP transport called WireguardTCP. This is not just a theoretical concept; it is implemented as a Linux kernel module and offers tangible benefits for specific use cases.

The project highlights measured performance improvements, with one scenario showing over 21% more throughput for bulk TCP and 16% more HTTPS requests per second on clean paths. Critically, it also addresses the common challenge of firewall traversal where UDP is often blocked, making WireGuard deployments more flexible.

For senior engineers architecting distributed systems or managing network infrastructure, WireguardTCP offers a powerful new option. It allows leveraging the benefits of WireGuard even in restrictive network environments, potentially improving application performance and reliability while maintaining the security posture.

Rethink your VPN transport for better performance and reach.
