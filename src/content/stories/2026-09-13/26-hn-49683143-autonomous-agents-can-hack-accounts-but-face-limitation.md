---
title: Autonomous agents can hack accounts but face limitations in 2026
source: hn
url: https://blog.sshh.io/p/i-asked-100-agents-to-hack-me
date: '2026-09-13'
tags:
- abliteration
- autonomous-agents
- catchup
- hacking
- hn
- open-source-models
- red-teaming
- social-engineering
- software-vulnerabilities
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49683143'
comments: https://news.ycombinator.com/item?id=49683143
why_read: This article details an experiment to test the hacking capabilities of autonomous
  agents. Readers will learn about the current effectiveness and limitations of these
  agents in compromising online accounts and the 'abliteration' technique used to
  facilitate such red-teaming exercises.
authors:
- Shrivu Shankar
---

100 AI agents tried to hack one person, and they succeeded in compromising five accounts and found sensitive personal information. This was not a theoretical exercise; it was a real-world red-team experiment using self-hosted, open-source models.

The author deliberately "abliterated" these agents, a technique that essentially removes their moral guardrails by subtracting specific refusal vectors from the model weights. This allowed the agents to perform actions they would normally refuse, like password brute-forcing and social engineering.

While these agents did not discover zero-days or breach tier-0 accounts, their ability to compromise systems and gather sensitive data highlights a critical and often underestimated risk. Understanding these offensive capabilities is essential for designing resilient systems and anticipating future threats from increasingly autonomous AI.
