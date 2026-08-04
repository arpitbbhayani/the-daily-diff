---
title: Coldcard seed failure from unauditable entropy regression
source: hn
url: https://808bits.com/articles/coldcard-entropy-failure-lessons/
date: '2026-08-02'
tags:
- catchup
- coldcard
- cryptographic-vulnerability
- entropy
- firmware-regression
- hardware-security
- hn
- seed-generation
section: engineering
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 7
hn_id: '49147490'
comments: https://news.ycombinator.com/item?id=49147490
why_read: This text explains how a subtle firmware regression in Coldcard devices
  led to millions in cryptocurrency theft by replacing a hardware RNG with a weak
  software fallback, demonstrating the difficulty of auditing such deep-seated vulnerabilities.
authors:
- meehow
---

A tiny preprocessor error cost Coldcard users millions of dollars. A recent post-mortem reveals a critical firmware regression where `#ifndef MICROPY_HW_ENABLE_RNG` passed a check, even when `MICROPY_HW_ENABLE_RNG` was explicitly defined as `0`. This seemingly minor oversight bypassed the hardware random number generator.

Instead, the device linked MicroPython's software PRNG, Yasmarang, seeded only once from boot-time state. The result? Seeds with a mere 40 bits of effective entropy, instead of the target 128. This made 4,500 wallets vulnerable to brute-force attacks.

The key takeaway is chilling: you cannot audit entropy after the fact. Once a weak seed is generated, no amount of subsequent security measures can fix it. This is a stark reminder of the profound impact subtle build system semantics and the integrity of randomness have on system reliability and security, particularly in low-level embedded contexts.
