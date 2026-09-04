---
title: VyOS containers incorrectly masquerade policy-routed traffic
source: hn
url: https://wirt.ee/logbook/vyos-container-snat/
date: '2026-09-02'
tags:
- catchup
- container-networking
- fwmark
- hn
- netavark
- policy-routing
- snat
- vyos
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49536947'
comments: https://news.ycombinator.com/item?id=49536947
why_read: This text details a specific bug in VyOS where the container network stack
  netavark incorrectly SNATs policy-routed traffic. It provides a detailed reproduction
  path and explains the underlying fwmark conflict.
authors:
- portmortem
---

Encountered unexpected Source NAT (SNAT) behavior in your containerized environments, even when no NAT rules seem to match? This deep dive into a VyOS issue reveals how container network stacks like `netavark` can leave behind `nftables` rules.

The problem arises from `netavark` masquerading traffic carrying a specific `fwmark` bit (0x2000). If your policy-based routing marks packets with a value like 0x7ffffffe, which has that bit set, your traffic will be SNAT'd. Crucially, these masquerade rules can persist even after the container is deleted.

This is a critical insight for anyone operating distributed systems with complex networking. It teaches you to look beyond your explicit rules and understand the subtle interactions between different components of the Linux networking stack, especially with ephemeral container lifecycles.
