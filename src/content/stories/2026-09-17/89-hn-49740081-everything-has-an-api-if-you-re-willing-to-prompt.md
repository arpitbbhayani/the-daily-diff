---
title: Everything Has an API If You're Willing to Prompt
source: hn
url: https://wastu.net/blog/everything-is-an-api
date: '2026-09-17'
tags:
- ai-agents
- catchup
- data-extraction
- hn
- private-api
- reverse-engineering
- rooted-devices
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49740081'
comments: https://news.ycombinator.com/item?id=49740081
why_read: This article demonstrates a method for accessing personal data from applications
  that restrict export or lock features behind paywalls. Readers will learn how to
  use AI agents with rooted devices to bypass these limitations and pull data directly
  from an app's internal storage or private APIs.
authors:
- Bagas Wastu
---

What if you could treat any application, even one without a public API, as if it had one? This article demonstrates a clever technique: using an AI agent on a rooted Android device to interact directly with an app's local storage and private APIs. This allows programmatic data extraction that would otherwise be locked behind subscriptions or manual reverse engineering.

The author details a setup involving a rooted phone, wireless ADB, a private network, and an AI agent like DeepSeek V4 Flash. The agent is able to inspect the app's internal databases, grab auth credentials, and construct Python scripts to query the private API directly. It is a fantastic example of applied AI and agentic capabilities.

This approach opens up new possibilities for personal automation, data analysis, and bypassing vendor lock-in. It underscores the power of combining system-level access with intelligent agents to solve real-world data challenges.
