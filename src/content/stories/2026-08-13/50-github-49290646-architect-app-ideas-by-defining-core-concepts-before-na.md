---
title: Architect app ideas by defining core concepts before naming technologies
source: github
url: https://github.com/RudVlad473/iluvatar
date: '2026-08-13'
tags:
- ai-agent
- app-architecture
- architectural-contract
- catchup
- claude-code-skill
- conceptual-modeling
- github
- requirements-engineering
- system-design
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49290646'
comments: https://news.ycombinator.com/item?id=49290646
why_read: Read this to understand a novel approach for designing application architecture
  by focusing on core computer science concepts and concerns before selecting specific
  technologies. It highlights the importance of settling the system's shape prior
  to tool selection, ensuring a more robust and thoughtful design.
authors:
- RudVlad473
---

Jumping straight to a tech stack like Postgres and Redis before defining core system properties is a common pitfall. The `Iluvatar` AI agent skill tackles this head-on by forcing 'architecture before creation.'

It takes a one-sentence app idea and runs a 15-point classification pass, dissecting concerns like state management, failure modes, concurrency, and compliance. The output is a 'frozen, schema-validated contract' that outlines archetypes and cross-cutting concerns, but explicitly avoids naming specific technologies.

This approach ensures that fundamental computer science problems are addressed upfront. It prevents solutions from being dictated by a trendy framework and instead promotes robust, well-considered system designs from the ground up.
