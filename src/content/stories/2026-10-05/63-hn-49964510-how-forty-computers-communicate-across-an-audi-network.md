---
title: How forty computers communicate across an Audi network
source: hn
url: https://bogdan.nimblex.net/wired-car/
date: '2026-10-05'
tags:
- automotive-ethernet
- can-bus
- catchup
- ecu
- flexray
- gateway-module
- hn
- lin-bus
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49964510'
comments: https://news.ycombinator.com/item?id=49964510
why_read: This teardown visualizes how dozens of electronic control units interact
  across heterogeneous vehicular networks. Readers will gain a clear mental model
  of how message routing, bus topologies, and gateway modules coordinate modern automotive
  systems.
authors:
- bogdan_r
---

A modern connected vehicle operates as a distributed system of dozens of specialized computers rather than a single monolithic controller.

In a 2021 Audi e-tron teardown, forty electronic control units communicate across five distinct physical network protocols, including CAN, CAN FD, FlexRay, Automotive Ethernet, and LIN. Shared lines handle deterministic bus traffic, while Ethernet and FlexRay form star topologies centered on a single central gateway module.

The central gateway acts as the sole router, firewall, and protocol translator. Every cross-bus transmission must be validated, buffered, and forwarded through this single unit, which also isolates internal networks from the external diagnostic port. This architecture ensures that high-bandwidth telemetry does not interfere with real-time powertrain and safety signals.

Studying automotive topologies offers concrete lessons on network isolation, hardware fault boundaries, and gateway routing in resource-constrained environments.
