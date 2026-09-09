---
title: Liquid Network consensus split and bitcoin theft root cause
source: github
url: https://gist.github.com/1440000bytes/211ac92dd4433bb1a2e674bf0ff7db2e
date: '2026-09-07'
tags:
- bitcoin-theft
- catchup
- consensus-failure
- cryptography
- github
- liquid-network
- rangeproof
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49600449'
comments: https://news.ycombinator.com/item?id=49600449
why_read: This analysis details the technical root cause of a significant security
  incident on the Liquid Network. Readers will learn how a cryptographically invalid
  rangeproof led to a consensus failure and a 3,998.67 BTC theft.
authors:
- binyu
---

A critical vulnerability led to the 2026 Liquid Network splitting and 3,998.67 BTC being stolen, not through a simple exploit, but a subtle consensus failure rooted in an invalid rangeproof in a specific transaction.

Part of the network accepted a block containing this cryptographically malformed transaction, while another part rejected it, leading to a hard fork and exploit. This was not a flaw in the cryptographic primitives themselves, but in their specific application and validation during a critical path.

This incident highlights how essential robust validation and consensus mechanisms are in any distributed system. The failure underscores that even seemingly minor cryptographic deviations can shatter network integrity and lead to significant financial loss. Learn from real-world failures to build more resilient systems.
