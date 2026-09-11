---
title: Breakscale simulates distributed system failures in your browser
source: hn
url: https://breakscale.tech/
date: '2026-09-09'
tags:
- catchup
- circuit-breakers
- distributed-systems
- hn
- queueing
- simulation
- system-design
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49627109'
comments: https://news.ycombinator.com/item?id=49627109
why_read: Read this to learn about Breakscale, a free and open-source browser-based
  simulator that allows you to build distributed systems and observe real-world failure
  behaviors like queueing and retry storms.
authors:
- domhudson
---

Understanding how distributed systems fail under pressure is a critical skill, and Breakscale offers a truly novel way to learn. This open-source, browser-based simulator lets you build systems and watch real-time queueing, latency spikes, and cascading failures like retry storms or circuit breaker trips.

Unlike theoretical formulas, Breakscale uses discrete-event simulation to accurately model these complex interactions. This means you are not just getting abstract numbers, but seeing the dynamic chaos unfold as traffic pushes through your design.

This tool is incredibly useful for senior engineers. It provides a sandboxed environment to experiment with architectural choices, validate failure hypotheses, and deepen your intuition about system resilience and scalability without impacting production.
