---
title: Making the Claude application three times faster through measurement
source: hn
url: https://claude.dev/blog/how-we-made-claude-ai-faster/
date: '2026-09-23'
tags:
- catchup
- client-side-performance
- hn
- latency-optimization
- real-user-monitoring
- web-performance
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49821196'
comments: https://news.ycombinator.com/item?id=49821196
why_read: Read this to learn how continuous real-user measurement across core user
  journeys can drastically cut application latency. You will gain insight into practical
  performance gains achievable during a focused optimization sprint.
authors:
- Raymond Wang
- Sam Attard
- Issac G.
image: /infographics/06-hn-49821196.jpg
---

You cannot optimize what you do not measure. Anthropic demonstrated this principle by making claude.ai and its desktop client three times faster across core workflows in a single two-week sprint.

The engineering team concentrated on four primary user journeys that account for 95 percent of all user actions. They brought p75 web load times down from 3.1 seconds to 550 milliseconds, while cutting cloud session initialization times by over 70 percent. Client message round-trip latencies dropped by up to 95 percent across desktop surfaces.

Rather than guessing where the bottlenecks were, they embedded Claude directly into Slack debugging threads and wired it to real user monitoring data. This allowed them to pinpoint unneeded network round-trips, bloated bundle dependencies, and client-side rendering stalls in tight feedback loops.

Great performance engineering does not require exotic rewrites. It requires instrumenting the exact paths that users touch every day and applying focused pressure where the numbers show friction.
