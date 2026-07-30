---
authors:
- fastandfearless
comments: https://news.ycombinator.com/item?id=49083187
date: '2026-07-28'
depth_score: 9
hn_id: '49083187'
image: /infographics/55-hn-49083187.jpg
interest_score: 8
novelty_score: 7
section: systems
source: hn
tags:
- catchup
- hn
- home-assistant
- multicast
- ovn
- ovs
- proxmox
- sr-iov
- tailscale
- zerotier
title: Bridging OVN into a Physical Home Network
url: https://mabels.github.io/ovn-fabric/blog/ovn-fabric-writeup.html
utility_score: 8
why_read: This explains a detailed journey from common smart-home networking problems
  like flaky mDNS/SSDP discovery and SR-IOV limitations to exploring OVN as a solution
  for advanced network orchestration and bridging.
---

Forget consumer routers. One engineer tackled their complex home network challenges by migrating to Open Virtual Network (OVN), a software-defined networking solution normally found in data centers.

This article details how OVN solved persistent issues with mDNS/SSDP discovery, SR-IOV limitations, and the inflexibility of appliance-based configurations. It is a fantastic example of applying distributed systems principles to a real-world problem, even at home.

It demonstrates how understanding SDN, virtualization, and network control planes can unlock powerful, scalable system designs beyond the usual enterprise context.