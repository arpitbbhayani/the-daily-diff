---
title: Building an Apple M4 GPU Driver from Scratch in One Month
source: hn
url: https://codyho.dev/blog/gpu-driver/
date: '2026-09-15'
tags:
- apple-silicon
- catchup
- clean-room
- gpu-driver
- hn
- hypervisor
- opengl-es
- reverse-engineering
section: systems
interest_score: 9
depth_score: 10
utility_score: 8
novelty_score: 10
hn_id: '49717638'
comments: https://news.ycombinator.com/item?id=49717638
why_read: Learn how a fully OpenGL ES 3.0 compliant GPU driver for Apple Silicon was
  built from scratch in one month. The article details the reverse engineering process
  of AGX firmware and user-space components, an endeavor typically taking years.
authors:
- Cody Ho
- Niklas
---

Building a fully compliant GPU driver for Apple Silicon's M4 in one month sounds impossible, but Niklas and Cody Ho did it. This is a masterclass in reverse engineering and low-level systems programming.

The project involved deeply dissecting Apple's proprietary AGX GPU, understanding its complex firmware ABI, and constructing user-space components. They even built a custom IR and shader compiler from the ground up.

This is not just an academic exercise; it resulted in Chrome and Firefox running WebGL and Minecraft at 200fps on the M4 Mac Mini. It showcases what is possible with extreme dedication and a deep understanding of hardware-software interfaces.

For any senior engineer fascinated by system internals, performance, or pushing the boundaries of what is thought achievable, this provides an unparalleled look into modern GPU driver development. It is an inspiring testament to open source engineering.
