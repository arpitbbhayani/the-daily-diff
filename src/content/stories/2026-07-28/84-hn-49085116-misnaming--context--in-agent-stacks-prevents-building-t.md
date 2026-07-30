---
authors:
- Isaac Liem
comments: https://news.ycombinator.com/item?id=49085116
date: '2026-07-28'
depth_score: 8
hn_id: '49085116'
image: /infographics/84-hn-49085116.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- agent-stack
- catchup
- context-layer
- evidence-layer
- hn
- information-custody
- system-design
- truthfulness
title: Misnaming 'context' in agent stacks prevents building true evidence stores
url: https://ikeanalytics.com/articles/what-the-bone-remembers/
utility_score: 7
why_read: This piece argues that incorrectly naming a key layer in agent stacks as
  'context' limits its potential to a retrieval problem. It explains why renaming
  it to 'evidence' is crucial for building systems that can accumulate and maintain
  provable truth.
---

The prevailing view of the "context" layer in AI agent architecture is fundamentally flawed. When we treat agent memory as mere retrieval "context," we limit design to better embeddings and ranking.

This article argues for an "evidentiary" layer instead. The critical property of an agent's accumulated record is not just that it helps the model answer, but that it is true and provably so, even to an external observer. This shifts focus to custody and verifiable state.

This distinction is not academic; it dictates whether you build a simple retriever or a robust, trustworthy agent. Thinking beyond "context" towards "evidence" is essential for designing resilient multi-agent systems that can reason and operate reliably in complex environments.