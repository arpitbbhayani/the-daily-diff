---
title: Software is moving from calling models to compiling semantic functions
source: hn
url: https://seldon-ai.com/blog/fronter-llms-are-semantic-interpreters
date: '2026-10-02'
tags:
- catchup
- hn
- jev
- latency-optimization
- semantic-compute
- task-decomposition
- typed-decisions
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49939505'
comments: https://news.ycombinator.com/item?id=49939505
why_read: This piece outlines how modern AI architectures are shifting away from raw
  model invocation toward compiled, modular semantic functions that dramatically lower
  latency.
authors:
- nlpnerd
---

Treating large language models as general interpreters for deterministic decisions introduces massive latency and reliability bottlenecks. A more effective architecture decomposes workflows so specialized semantic runtimes handle typed decisions while general models serve strictly as fallbacks.

In recent browser automation tests with Stagehand, replacing generic LLM calls with typed decision models reduced median action latency from 1.97 seconds down to 0.46 seconds. The runtime evaluates structured candidates via deterministic code and lightweight semantic classifiers before ever routing to a frontier model.

Compiling semantic workflows into structured, low-latency execution paths represents the next major efficiency leap for production agent infrastructure.
