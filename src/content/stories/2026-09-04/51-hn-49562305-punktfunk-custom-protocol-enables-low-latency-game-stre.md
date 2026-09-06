---
title: Punktfunk custom protocol enables low-latency game streaming on Linux
source: hn
url: https://punktfunk.unom.io/en/
date: '2026-09-04'
tags:
- catchup
- forward-error-correction
- game-streaming
- hn
- linux-host
- low-latency
- punktfunk-protocol
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49562305'
comments: https://news.ycombinator.com/item?id=49562305
why_read: You should read this to understand how Punktfunk provides a low-latency
  game streaming experience that surpasses older protocols like GameStream. It details
  its custom protocol, Linux-first design, and advanced error correction mechanisms.
authors:
- sagacity
---

Building low-latency, high-resolution streaming is a brutal engineering challenge, and Punktfunk's approach offers deep insights. This project showcases an end-to-end custom protocol based on QUIC, enhanced with GF(2^16) forward error correction, specifically designed to bypass limitations of older streaming solutions like NVIDIA's GameStream.

They engineered everything from the display driver to the client, achieving impressive ~1.3 ms capture-to-received latency on a LAN. The article dives into how they manage dynamic resolution/refresh changes mid-stream and ensure game persistence through network disconnects, a critical feature for any robust distributed real-time system.

This is not just about game streaming; it is a masterclass in designing resilient, high-performance distributed systems where every millisecond counts and network conditions are unpredictable.
