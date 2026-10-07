---
title: Using Jev for turn detection reduces voice agent interruptions
source: hn
url: https://veris.ai/blog/jev-turn-detection
date: '2026-10-06'
tags:
- benchmarking
- catchup
- hn
- pipecat
- turn-detection
- voice-activity-detection
- voice-agents
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49982478'
comments: https://news.ycombinator.com/item?id=49982478
why_read: Learn how replacing simple silence timers with the Jev classifier model
  significantly cuts down voice agent interruptions during caller pauses.
authors:
- Joshua Meyer
image: /infographics/12-hn-49982478.jpg
---

Voice agents do not have the luxury of an enter key. When building text agents, deciding when the user has finished their prompt is trivial, but real-time voice streams force agents to constantly decide whether to respond or stay quiet.

Most voice agents rely strictly on silence timers paired with voice activity detection. The moment a user pauses to recall an account number or gather their thoughts, the silence threshold triggers and the agent interrupts. On the VAmoS Pro benchmark, this standard timer approach caused the Pipecat agent to speak over callers on 52 percent of conversational turns.

Replacing basic silence thresholds with Jev, a specialized turn-classification model, dropped the interruption rate to 11 percent across hundreds of noisy call scenarios. Instead of treating silence as an immediate end-of-turn signal, the classifier evaluates linguistic completion in real time.

Handling turn-taking at the semantic layer rather than acoustic silence thresholds is becoming essential for production voice agents.
