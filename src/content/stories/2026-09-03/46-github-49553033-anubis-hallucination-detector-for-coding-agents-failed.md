---
title: Anubis Hallucination Detector for Coding Agents Failed as Product
source: github
url: https://github.com/robbe1912/anubis-public
date: '2026-09-03'
tags:
- catchup
- coding-agents
- false-positives
- github
- hallucination-detection
- large-language-models
- postmortem
- software-development
- swe-bench
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49553033'
comments: https://news.ycombinator.com/item?id=49553033
why_read: This postmortem provides an honest account of building and rigorously testing
  a hallucination detector for coding agents. It offers insights into why a technically
  sound solution might fail as a product, emphasizing the practical challenges of
  deploying AI tools.
authors:
- robbe1912
---

Building an AI hallucination detector for coding agents sounds like a silver bullet, but 100 agent-hours of rigorous testing revealed a stark reality: it did not work. This postmortem is a masterclass in empirical engineering.

Anubis, a local proxy daemon, was designed to scan generated code for invented APIs, imports, and undefined symbols. Yet, A/B testing with strong models yielded zero true positives and several false alarms. Even with weaker models, the signal was flaky and unreliable.

This highlights a critical lesson for applied AI: more data does not always mean a better solution. Sometimes, the problem is fundamentally harder than anticipated, and an external detection layer is not the answer. This honest account saves countless hours for engineers pursuing similar paths and reinforces the value of ruthless measurement.
