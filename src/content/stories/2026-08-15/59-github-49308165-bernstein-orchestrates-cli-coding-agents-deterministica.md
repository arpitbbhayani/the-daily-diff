---
authors:
- alex_chernysh
comments: https://news.ycombinator.com/item?id=49308165
date: '2026-08-15'
depth_score: 8
hn_id: '49308165'
image: /infographics/59-github-49308165.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- auditable-lineage
- byte-identical-replay
- catchup
- cli-coding-agents
- deterministic-orchestration
- github
title: Bernstein orchestrates CLI coding agents deterministically with byte-identical
  replay
url: https://github.com/sipyourdrink-ltd/bernstein
utility_score: 9
why_read: This description introduces Bernstein, a novel approach to orchestrating
  CLI coding agents that ensures deterministic and byte-identical replays of parallel
  runs. Readers will learn about a system designed for high auditability and secure
  deployment, without AI models in the core coordination loop.
---

Orchestrating multiple AI coding agents is challenging, especially when you need consistent, reproducible results. Bernstein, a new deterministic scheduler, tackles this head-on by managing over 40 CLI agents without an LLM in the coordination loop. This design choice is critical for achieving byte-identical replays in parallel runs.

The project uses per-task git worktrees to ensure isolation and determinism, a clever engineering practice. Furthermore, it incorporates signed lineage and an opt-in HMAC audit chain, allowing offline verification of agent actions. This level of auditability is essential for debugging, compliance, and building trust in automated agent workflows.

If you are building or deploying AI coding agents, the principles behind Bernstein offer a robust blueprint for managing complexity, ensuring reliability, and maintaining a clear audit trail. This is not just a tool; it is a system design pattern for agentic engineering.