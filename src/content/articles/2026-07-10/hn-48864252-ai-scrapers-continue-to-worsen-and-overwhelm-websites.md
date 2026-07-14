---
title: AI Scrapers Continue to Worsen and Overwhelm Websites
source: hn
url: https://lwn.net/SubscriberLink/1080822/990a8a5e2d379085/
date: '2026-07-10'
tags:
- ai-bots
- catchup
- hn
- llm-training-data
- open-web
- residential-proxies
- web-scraping
- website-traffic
score: 337
hn_id: '48864252'
comments: https://news.ycombinator.com/item?id=48864252
why_read: This article provides an update on the escalating problem of AI web scrapers
  and details their use of residential proxies to overwhelm sites. Readers will learn
  about the current tactics of these bots and the growing threat they pose to the
  open web.
authors:
- Jonathan Corbet
author: Jonathan Corbet
---

The battle against AI scrapers is intensifying, and it is reshaping how we think about web infrastructure. Websites are being hammered by coordinated requests from millions of unique IPs, all for LLM training data.

These are not simple bots; they leverage vast networks of residential proxies to mimic human users, often hitting a site only a few times before disappearing. This makes detection incredibly difficult, bypassing traditional security measures.

The article details how this onslaught overwhelms sites, making it harder to maintain the open web. If you are building scalable systems or managing web infrastructure, understanding these new traffic patterns is critical.

This is a direct challenge to system design and LLM infrastructure. We must evolve our defenses to cope with adversaries that are distributed, dynamic, and relentless in their pursuit of data.
