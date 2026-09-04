---
authors:
- AbduljabbarBXR
comments: https://news.ycombinator.com/item?id=49536322
date: '2026-09-02'
depth_score: 8
hn_id: '49536322'
image: /infographics/64-github-49536322.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- ai-agents
- catchup
- code-safety
- codebase-mapping
- deterministic-harness
- github
- static-analysis
title: HEIDES gives AI coding agents senses, memory, and judgment for code
url: https://github.com/AbduljabbarBXR/heides
utility_score: 9
why_read: This describes HEIDES, a tool designed to address the 'blindness' of AI
  coding agents. Readers will learn how a deterministic harness can provide agents
  with a comprehensive understanding of a codebase, preventing common errors.
---

The biggest challenge with AI coding agents is not their generation capability, but their "blindness" to the broader codebase context. They often produce brilliant solutions that break unseen dependencies.

HEIDES offers an intriguing solution: a deterministic harness that acts as a 'code nervous system'. It maps the entire codebase into a persistent graph before an agent even touches a line of code, deriving warnings and grounding every plan against reality.

This means the agent suggests, but HEIDES decides what is safe. It is a critical architectural pattern for moving AI agents from impressive demos to reliable production tools, ensuring that changes are safe and context-aware rather than merely syntactically correct.