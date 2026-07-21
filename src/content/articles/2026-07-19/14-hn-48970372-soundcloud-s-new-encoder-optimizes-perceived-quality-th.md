---
title: SoundCloud's new encoder optimizes perceived quality through frequency trade-offs
source: hn
url: https://developers.soundcloud.com/blog/less-is-more-why-soundcloud-low-passes-its-aac-transcodings/
date: '2026-07-19'
tags:
- aac-encoder
- catchup
- frequency-bands
- hn
- human-hearing
- lossy-compression
- perceptual-audio-quality
section: engineering
interest_score: 8
hn_id: '48970372'
comments: https://news.ycombinator.com/item?id=48970372
why_read: This article explains why SoundCloud's new AAC encoder removes high frequencies
  to achieve better perceived audio quality. Readers will learn about the tradeoffs
  in lossy compression and how it optimizes for human hearing.
authors:
- Joe Reid
image: 14-hn-48970372-infographic.png
---

![](14-hn-48970372-infographic.png)

SoundCloud made a counter-intuitive engineering choice that dramatically improved their audio quality, and it is a fascinating lesson in system optimization. They deliberately low-pass their AAC transcoded audio at 17 kHz, essentially removing the highest frequencies.

Why cut off part of the sound? Human hearing is not uniform; we are most sensitive to frequencies between 2 and 5 kHz. By sacrificing the barely audible high end, SoundCloud's encoder can allocate more bits to the critical lower and mid-range frequencies.

This trade-off means a more faithful, clearer reproduction where it matters most, despite a smaller overall frequency range. It is a brilliant example of optimizing for human perception rather than raw data, offering a real-world insight into applied engineering and system design under constraints.
