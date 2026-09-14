---
title: FSCALE instruction microcode in Intel 8087 chip is surprisingly complex
source: hn
url: https://www.righto.com/2026/09/8087-microcode-reverse-engineering-fscale.html
date: '2026-09-12'
tags:
- catchup
- floating-point
- fscale-instruction
- hn
- intel-8087
- microcode
- reverse-engineering
section: systems
interest_score: 8
depth_score: 10
utility_score: 6
novelty_score: 8
hn_id: '49673580'
comments: https://news.ycombinator.com/item?id=49673580
why_read: This post explains the surprising complexity of the Intel 8087's FSCALE
  microcode, revealing insights into the chip's design, internal components, and even
  a hidden feature.
authors:
- pwg
---

Ever wondered how a CPU handles floating-point operations at the deepest level? This incredible reverse-engineering effort dissects the microcode for the FSCALE instruction in Intel's 1980 8087 floating-point coprocessor.

You will uncover the intricate dance of over 140 micro-instructions and three levels of subroutine calls, all to execute a seemingly simple scaling operation. It reveals the fundamental design choices in the shifter, adder, and exponent converter.

This historical deep dive offers a masterclass in low-level hardware design, providing invaluable insights into performance, precision, and handling of arithmetic corner cases that are still relevant to modern system architecture and high-performance computing.
