---
title: Semantic Search Runs Entirely in Your Browser
source: hn
url: https://bart.degoe.de/semantic-search-in-your-browser/
date: '2026-07-11'
tags:
- browser-ml
- catchup
- client-side-search
- hn
- semantic-search
- static-sites
- webassembly
score: 13
hn_id: '48871716'
comments: https://news.ycombinator.com/item?id=48871716
why_read: This post explains how to implement powerful semantic search entirely in
  the browser for static sites, bypassing the need for server-side engines. It details
  an approach using small models and client-side technologies like WebAssembly.
authors:
- Bart de Goede
author: Bart de Goede
---

Deploying powerful AI features in the browser used to feel like a distant dream, but this article shows how client-side semantic search is becoming a practical reality. Imagine semantic search for your static site, running entirely in the browser, no server or API calls needed.
The author details how a compact 4 MB lookup table model, running on WebAssembly, can deliver intelligent search capabilities that understand meaning, not just keywords. This contrasts sharply with traditional keyword search or heavy transformer models requiring GPU clusters.
This approach bypasses the need for beefy server infrastructure, drastically reducing costs and latency for certain applied AI use cases. It is a smart move for extending AI's reach into more constrained environments.
This is not just a hack; it is a serious consideration for engineers aiming to build lightweight, performant, and cost-efficient intelligent applications. Discover how to bring semantic understanding directly to the user's device.
