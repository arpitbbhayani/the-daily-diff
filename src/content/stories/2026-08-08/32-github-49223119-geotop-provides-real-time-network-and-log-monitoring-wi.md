---
title: Geotop provides real-time network and log monitoring with global geolocation
source: github
url: https://github.com/ozkanpakdil/geotop
date: '2026-08-08'
tags:
- catchup
- geolocation
- github
- log-monitoring
- network-monitoring
- real-time
- terminal-tool
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49223119'
comments: https://news.ycombinator.com/item?id=49223119
why_read: This text describes geotop, a network and log monitoring tool with a live
  global geolocation map. Readers will learn about its features, including dual ingestion,
  auto-resolving geolocation, and different UI modes.
authors:
- Ozkan Pakdil
---

Debugging distributed systems often means sifting through logs and network traces, trying to visualize where connections are coming from. geotop fundamentally changes this by bringing a real-time network monitor with a live global geolocation map directly into your terminal.

This tool is not just a pretty interface; it has deep technical underpinnings. It combines raw packet sniffing with log tailing, feeding both streams into a unified event bus. Crucially, it comes bundled with an mmap-backed IP2Location DB for auto-resolving geolocations, which can even be hot-reloaded lock-free.

For engineers managing network services or distributed applications, geotop offers unparalleled visibility. Imagine seeing a spike in traffic on your nginx access logs and instantly knowing, on a world map in your terminal, exactly where those connections are originating. This is a game-changer for observability and rapid incident response.
