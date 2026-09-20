---
title: How System 1 reflexes leverage System 2 strategic guidance in drones
source: github
url: https://github.com/khordoo/jev-reflex-autonomy-lab/tree/main
date: '2026-09-18'
tags:
- catchup
- github
- multi-drone-autonomy
- openrouter
- simulation
- system-1-reflexes
- system-2-guidance
- typesafe-jev
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49759706'
comments: https://news.ycombinator.com/item?id=49759706
why_read: This lab demonstrates how fast, autonomous System 1 reflexes can be augmented
  by slower System 2 strategic guidance in multi-drone systems. It offers insights
  into building robust autonomous agents that balance speed and deliberative planning.
authors:
- khordoo
---

Controlling a drone swarm in real time demands an architecture that balances speed with strategic thinking. This project showcases an intriguing System 1/System 2 AI approach for multi-drone autonomy.

It uses "TypeSafe Jev" for instantaneous, reactive System 1 reflexes, while a slower, optional System 2 reasoning model provides high-level strategic guidance. The key is that System 1 retains control, only asking System 2 for advice when confidence is low.

This model avoids the latency pitfalls of relying solely on complex planning and offers a blueprint for building robust, real-time agent systems where rapid response and considered strategy must coexist.
