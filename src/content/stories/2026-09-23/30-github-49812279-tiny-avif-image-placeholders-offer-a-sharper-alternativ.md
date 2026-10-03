---
title: Tiny AVIF image placeholders offer a sharper alternative to BlurHash
source: github
url: https://github.com/keithamus/avash
date: '2026-09-23'
tags:
- av1
- avif
- bitstream
- blurhash
- catchup
- github
- image-placeholders
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49812279'
comments: https://news.ycombinator.com/item?id=49812279
why_read: Understand how stripping container headers from AV1 frames creates tiny,
  browser-decodable image placeholders. You will learn how this approach achieves
  clearer visual previews than BlurHash at comparable byte sizes.
authors:
- keithamus
---

Standard image placeholder solutions like BlurHash struggle to balance visual detail with byte size. By relying on custom decoders and low-frequency approximations, they often produce muddy placeholders while requiring substantial JavaScript decoding runtime.

Avhash offers a clever alternative by leveraging native browser AV1 decoders. It strips the sequence headers, OBU framing, and container overhead, leaving only the raw AV1 still picture bitstream in a tiny string payload.

A lightweight client-side script then prepends the predictable headers back onto the bitstream, enabling the native browser AVIF engine to decode the placeholder instantly. This approach yields sharper placeholder visuals with fine-grained byte size tuning.

Repurposing native browser codecs via header stripping is an elegant pattern for high-performance frontend asset optimization.
