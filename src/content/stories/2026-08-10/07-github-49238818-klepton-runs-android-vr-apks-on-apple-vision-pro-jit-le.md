---
title: Klepton runs Android VR APKs on Apple Vision Pro JIT-less
source: github
url: https://github.com/shinyquagsire23/Klepton
date: '2026-08-10'
tags:
- android-apks
- arm64-vr
- catchup
- compatibility-layer
- github
- graphics-translation
- jittless
- klepton
- relinker
- visionos
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49238818'
comments: https://news.ycombinator.com/item?id=49238818
why_read: This describes Klepton, a tool that enables running Android ARM64 VR APKs
  on Apple Vision Pro and macOS without JIT. Readers will learn about its architecture,
  including how it translates libraries and graphics APIs like GLES to Metal and Vulkan
  to MoltenVK.
authors:
- shinyquagsire23
---

Running Android VR apps on Apple Vision Pro without a JIT compiler is a remarkable feat, and Klepton shows how. It tackles the challenge by translating Android shared objects directly into Apple dylibs and frameworks, resolving imports to its custom runtime.

The system bypasses Android's ART/JVM for Java-thin applications, and intelligently translates graphics calls from GLES 3.2 to Metal via ANGLE, and Vulkan to MoltenVK. This demonstrates a deep understanding of ABI compatibility and runtime environment emulation.

This is a masterclass in low-level system design, offering insights into binary translation and the intricate dance between different operating system ABIs.
