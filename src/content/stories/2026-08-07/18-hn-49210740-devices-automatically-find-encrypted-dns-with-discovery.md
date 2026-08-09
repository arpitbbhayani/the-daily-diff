---
title: Devices automatically find encrypted DNS with Discovery of Designated Resolvers
source: hn
url: https://blog.dundns.eu/posts/ddr-encrypted-dns-discovery/
date: '2026-08-07'
tags:
- catchup
- ddr
- dns-resolver
- doh
- doq
- dot
- encrypted-dns
- hn
- network-configuration
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49210740'
comments: https://news.ycombinator.com/item?id=49210740
why_read: This text explains how modern devices automatically discover and connect
  to encrypted DNS resolvers using the Discovery of Designated Resolvers (DDR) protocol.
  You will learn the mechanism behind this auto-configuration and how different encrypted
  DNS protocols are negotiated.
authors:
- majorchord
---

Your devices are getting smarter about privacy, and it is thanks to protocols like Discovery of Designated Resolvers (DDR). This mechanism allows an operating system to automatically find and upgrade its DNS queries to encrypted connections such as DoH, DoT, or DoQ, without any manual configuration.

Instead of relying on a hardcoded, unencrypted IP, devices issue a special lookup for _dns.resolver.arpa. The resolver then responds with available encrypted endpoints, including hostnames, ports, and protocols. This provides a critical layer of privacy and security by encrypting what would otherwise be cleartext DNS traffic.

This is not just theoretical; Windows 11 and Apple devices are already implementing this. For any engineer building distributed systems or concerned with network security, understanding DDR is essential for recognizing how modern infrastructure secures fundamental network operations. It represents a significant step forward in securing the "last mile" of network communication.
