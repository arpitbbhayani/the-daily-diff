---
title: BitBang enables verified browser-native remote access to hardware
source: github
url: https://github.com/richlegrand/bitbang/blob/main/whitepaper.md
date: '2026-09-13'
tags:
- bitbang
- browser-native
- catchup
- github
- hardware-access
- media-streaming
- remote-access
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49688625'
comments: https://news.ycombinator.com/item?id=49688625
why_read: This document introduces BitBang, an end-to-end verified and browser-native
  solution for remote access to hardware and media. It addresses the pervasive problem
  of accessing devices like sensors and cameras remotely without relying on heavy
  tools or proprietary cloud services.
authors:
- Bluestein
---

Building reliable remote access to hardware without a VPN or complex cloud services is a common headache for many engineers. Existing tools like ngrok or Tailscale are often too heavy or require specific clients.

BitBang offers a genuinely novel approach: end-to-end verified, browser-native remote access. Imagine securely checking a remote sensor from your web browser, livestreaming a Pi camera without proprietary cloud services, or sharing device readings with collaborators directly via a URL.

This whitepaper outlines how it bypasses common hurdles like NAT traversal and complex client installations. It aims to provide the same functionality as heavier tools but with far less friction and overhead, making it incredibly practical for distributed systems involving physical devices.

This could fundamentally change how you think about exposing device interfaces and media streams in your distributed architectures.
