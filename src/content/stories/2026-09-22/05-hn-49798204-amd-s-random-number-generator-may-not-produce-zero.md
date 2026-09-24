---
title: AMD's random number generator may not produce zero
source: hn
url: https://board.flatassembler.net/topic.php?t=24261
date: '2026-09-22'
tags:
- amd-processors
- assembly-language
- bug
- catchup
- hn
- random-number-generation
- rdrand
- rdseed
- zen2
section: systems
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49798204'
comments: https://news.ycombinator.com/item?id=49798204
why_read: This post highlights a suspected bug in AMD's RDRAND and RDSEED instructions
  where they might not generate the number zero, providing a test application to verify
  this behavior. It also showcases advanced console data rendering techniques in assembly
  for Linux CLI.
authors:
- "Jess\xE9"
---

Imagine a hardware random number generator that cannot produce a zero. A recent finding suggests that AMD's RDRAND and RDSEED instructions might exhibit this exact behavior, failing to generate the value 0 for certain bit sizes, unlike Intel processors. This is a subtle but profound potential hardware bug.

For developers working on cryptographic systems, statistical simulations, or any low-level code relying on hardware-backed randomness, such a flaw could have significant, unintended consequences. It highlights the critical importance of understanding CPU instruction quirks, even in seemingly foundational operations.

This discovery, shared on a flat assembler board, is a stark reminder that even core hardware components can harbor unexpected behaviors. Verifying system assumptions, particularly those related to security and randomness, is paramount.
