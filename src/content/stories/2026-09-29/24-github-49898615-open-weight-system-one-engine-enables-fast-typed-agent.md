---
title: Open-weight System One engine enables fast typed agent decisions
source: github
url: https://github.com/GPT-AGI/OpenJev
date: '2026-09-29'
tags:
- agent-routing
- calibrated-probabilities
- catchup
- github
- open-weight-models
- system-one-engine
- typed-decisions
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49898615'
comments: https://news.ycombinator.com/item?id=49898615
why_read: Read this to understand how typed decisions can be evaluated in a single
  forward pass using open-weight models without token-generation latency.
authors:
- GPT-AGI
---

Most LLM agents waste massive amounts of latency and compute generating verbose JSON schemas for trivial internal decisions.

Routing a tool call, deciding whether to retry an operation, or assessing safety risks should not require spending hundreds of tokens that your application immediately deserializes into an if statement. OpenJev provides a System One decision engine that returns typed choices, scores, and probabilities in a single forward pass without emitting text tokens.

By evaluating logit distributions over constrained typed options directly, decision latency drops to around 100 milliseconds with fully calibrated probability scores. This eliminates JSON parsing failures, structural hallucinations, and unnecessary serialization overhead in agent harnesses.

Treating agent control flow as direct logit classification rather than free-form text generation makes agent architectures dramatically faster and more deterministic.
