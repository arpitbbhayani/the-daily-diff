---
title: Detectors fail against prompt injections buried in tool outputs
source: github
url: https://github.com/rudratoshs/buried-injections
date: '2026-09-24'
tags:
- agentdojo
- ai-agents
- catchup
- github
- prompt-guard-2
- prompt-injection
- security-benchmarks
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49827019'
comments: https://news.ycombinator.com/item?id=49827019
why_read: Learn how open-source prompt-injection detectors perform against realistic
  embedded agent attacks and why calibrating detection thresholds dramatically shifts
  their effectiveness.
authors:
- rudratoshs
image: /infographics/11-github-49827019.jpg
---

Most prompt injection benchmarks test attack strings in isolation. In production AI agents, injections do not arrive neatly packaged; they hide inside large, benign JSON payloads and API tool outputs.

A benchmark testing 10 open-source detectors against 629 realistic AgentDojo attacks reveals a critical failure mode: out-of-the-box regex catches zero percent, and Meta's Prompt Guard 2 catches only one percent when injections are buried in tool output. Worse, multiple off-the-shelf detectors trigger false alarms on 98 percent of safe tool payloads.

The key finding centers on decision boundaries. When you tune detection thresholds to enforce a strict two percent false positive budget, the performance ranking completely flips. Prompt Guard 2 shifts from one percent to 99 percent recall on unseen domains, while detectors that appeared aggressive out of the box collapse to near zero.

Securing agent tool pipelines requires evaluating detectors against realistic noisy contexts rather than relying on default model thresholds.
