---
authors:
- poidos
comments: https://news.ycombinator.com/item?id=49101449
date: '2026-07-29'
depth_score: 7
hn_id: '49101449'
image: /infographics/91-hn-49101449.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- api-integration
- catchup
- cryptographic-proof
- hn
- open-models
- verified-inference
title: Cryptographic proof ensures exact open model output through verified inference
url: https://engy.ai/
utility_score: 8
why_read: This text explains Engy's 'verified inference' service, which guarantees
  that outputs from open models are cryptographically proven to originate from the
  exact requested model. Readers will learn how to integrate this service using various
  APIs and tools like Claude, OpenAI, Cursor, Codex, and Hermes.
---

Ensuring trust in LLM outputs is a growing challenge. How do you know the model you requested actually produced the response, and not a cheaper, unverified substitute?

Engy tackles this head-on with "verified inference" for open models. This means cryptographic proof accompanies your LLM output, guaranteeing the exact model you specified was used. This is not just a nice-to-have, but a crucial component for compliance and reliability in production AI applications.

For engineers building AI systems, this offers a new layer of confidence. You are not just getting an output; you are getting a verified output. This mechanism changes how we can think about integrity in the LLM supply chain, moving beyond simple API calls to verifiable execution.