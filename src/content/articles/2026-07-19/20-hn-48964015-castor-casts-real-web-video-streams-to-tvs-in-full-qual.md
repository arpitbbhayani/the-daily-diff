---
title: Castor casts real web video streams to TVs in full quality
source: hn
url: https://github.com/stupside/castor
date: '2026-07-19'
tags:
- castor
- catchup
- chrome-devtools-protocol
- hn
- smart-tv
- subtitles
- transcoding
- web-video-casting
section: engineering
interest_score: 7
hn_id: '48964015'
comments: https://news.ycombinator.com/item?id=48964015
why_read: This text introduces Castor, a tool designed to cast full-quality, real-time
  web video streams directly to your TV. Readers will understand how it overcomes
  common issues with screen mirroring and arbitrary web video casting.
authors:
- xonery
---

Streaming arbitrary web video to a TV often involves clunky screen mirroring or limited native support. The open-source Castor project offers an ingenious solution by leveraging headless Chrome and the DevTools Protocol to extract, transcode, and cast real video streams.

This project demonstrates a smart way to bypass content restrictions and optimize streaming quality. By programmatically interacting with web pages and monitoring network traffic, Castor can identify the actual video stream, allowing for full-quality casting and even on-the-fly subtitle burning.

It is a fantastic example of using existing tools in a creative, powerful way to build a robust media streaming utility.
