---
title: Detect scraper bots by analyzing human-like bursty scroll behavior
source: hn
url: https://niki.cat/detecting-scraper-bots-through-scroll-behaviour
date: '2026-08-20'
tags:
- burstiness
- catchup
- headless-browser
- hn
- human-bot-differentiation
- memory-coefficient
- scraper-bots
- scroll-behavior
section: systems
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49381311'
comments: https://news.ycombinator.com/item?id=49381311
why_read: This article proposes a novel method for detecting scraper bots by leveraging
  human-like bursty scroll patterns, expanding on the concepts of burstiness and memory
  in event-based systems. Readers will learn how these dynamics can differentiate
  bots from humans.
authors:
- Niki
---

Detecting scraper bots is a cat-and-mouse game, but this approach of analyzing scroll behavior using 'burstiness' and 'memory' coefficients offers a surprisingly effective new angle. It moves beyond simple user-agent checks to identify patterns inherently difficult for bots to mimic.

Humans do not scroll linearly; our interactions have distinct, non-uniform timing patterns. By quantifying these patterns using metrics from complex systems theory, you can build a more robust defense against even headless browsers. The key insight is that while bots can render a page, replicating subtle human timing and pauses is much harder.

This is a clever application of signal processing to a practical system engineering problem. It provides an actionable strategy to enhance your bot detection mechanisms, making your systems more resilient to unwanted scraping.
