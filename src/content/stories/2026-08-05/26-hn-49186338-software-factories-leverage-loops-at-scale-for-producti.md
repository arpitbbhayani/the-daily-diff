---
title: Software factories leverage loops at scale for production
source: hn
url: https://addyosmani.com/blog/software-factories/
date: '2026-08-05'
tags:
- agentic-loops
- catchup
- harness-engineering
- hn
- human-autonomy
- software-factories
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49186338'
comments: https://news.ycombinator.com/item?id=49186338
why_read: This text defines software factories as harnessing loops at scale, distinguishing
  between human-involved (light) and agent-only (dark) approaches. Readers will learn
  the historical context of software factories and the contemporary challenges of
  delegating autonomy and building effective checks in these systems.
authors:
- markgavalda
---

The rise of AI agents means we are building "software factories" at scale, but the critical distinction lies between "light" and "dark" approaches. A light factory keeps humans in the loop, trading speed for judgment and reduced breakage. A dark factory, conversely, grants agents full autonomy, leading to questions about oversight.

The hardest part for engineers is not building the agents, but knowing which checks to implement and how much autonomy to delegate without losing understanding of the produced software. This article introduces a compelling conceptual stack: the loop (single agent job), the harness (orchestration), and the factory (loops at scale).

Understanding these models helps senior engineers design more robust and controllable AI-driven development workflows, making deliberate choices about human involvement rather than defaulting to full automation. It is about strategic integration, not just raw output.
