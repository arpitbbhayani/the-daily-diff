---
title: Multi-agent proof search solves hundreds of open problems
source: hn
url: https://arxiv.org/abs/2610.09769
date: '2026-10-08'
tags:
- catchup
- hn
- mathematical-reasoning
- multi-agent-systems
- open-problems
- proof-search
- verifier-agents
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50003103'
comments: https://news.ycombinator.com/item?id=50003103
why_read: Read this to understand how parallel prover and verifier agents can automate
  mathematical proof discovery without human guidance. You will learn how the open-source
  Bolzano system operates and how it solved hundreds of open problems in theoretical
  computer science and mathematics.
authors:
- "Adri\xE1n Z\xE1me\u010Dn\xEDk"
- "Mat\u011Bj Kripner"
- "Martin Kouteck\xFD"
- Martin Balko
- "Jan Greb\xEDk"
- "Pavel Hub\xE1\u010Dek"
- "Robert \u0160\xE1mal"
- "V\xE1clav Rozho\u0148"
---

Autonomous agent architectures can now solve open theoretical computer science problems when structured around explicit verification loops and isolated state.

The Bolzano system pairs parallel prover agents with a dedicated verifier agent, coordinating them over a shared, human-readable research blackboard. Rather than relying on monolithic prompt chains, the multi-agent setup evaluated approximately 3,800 open questions drawn from academic literature. It resolved roughly 200 open problems without task-specific human guidance, including four unaddressed research questions from STOC 2026 papers verified directly by the original authors.

The core insight is that generative LLM provers fail rapidly without strict external validation boundaries. Splitting theorem generation from validation and enforcing an external state machine prevents hallucination cascades from poisoning downstream agent steps.

Multi-agent reasoning succeeds when you treat proof generation like distributed search and verification like a deterministic test harness.
