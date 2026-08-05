---
title: Frame selection determines LLM video understanding
source: hn
url: https://leoaido.com/how-llms-watch-video/
date: '2026-08-03'
tags:
- catchup
- frame-selection
- hn
- human-compression
- llms
- token-budget
- uniform-sampling
- video-understanding
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49155555'
comments: https://news.ycombinator.com/item?id=49155555
why_read: This post explains why strategic frame selection is critical for Large Language
  Models to truly understand video. Readers will learn the limitations of human summaries
  and uniform sampling, and the importance of empowering LLMs to perform their own
  data compression.
authors:
- leoaido
---

Getting LLMs to "watch" video effectively is not about feeding them more frames, but smarter frames. A recent deep dive reveals that "frame selection is the whole game" for vision LLMs. Engineers often make the mistake of uniform sampling, which wastes precious token budget on redundant frames while missing critical moments.

Instead of relying on human-compressed descriptions of a video, give the model the raw event by intelligently selecting frames that capture significant changes. This allows the LLM to notice subtle errors or timing issues that a human transcriber might omit, enabling a deeper, unmediated understanding.

This approach moves the compression step from human to model, drastically improving insights while efficiently managing image token costs, which are notoriously expensive. It is a critical lesson in applied AI and prompt engineering.
