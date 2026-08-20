---
title: The .fafa Specification Defines Portable Agent Identity
source: hn
url: https://zenodo.org/records/21951641
date: '2026-08-18'
tags:
- .fafa
- agent-identity
- catchup
- declarative-identity
- hn
- portable-identity
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49345488'
comments: https://news.ycombinator.com/item?id=49345488
why_read: This paper introduces .fafa, an IANA-registered media type for declarative
  agent identity. Readers will learn how .fafa provides a portable, structured, and
  persistent identity for agents, addressing limitations of existing, non-portable
  identity methods.
authors:
- James Wolfe
---

As AI agents proliferate, the question of identity becomes paramount. This paper introduces .fafa (application/vnd.fafa+yaml), an IANA-registered media type designed as a portable passport for agent identity.

This standard defines who an agent is, what it may do, how it can be reached, and critically, what it must never do. It addresses the challenge of agent identity traditionally inferred from system prompts or product settings, which often do not travel cleanly across different hosts or trust boundaries.

For engineers building multi-agent systems, this offers a structured, persistent way to define agent characteristics, enhancing deep composition and orchestration. This is a foundational step towards more robust and interoperable agent ecosystems, moving beyond ad-hoc identity management.
