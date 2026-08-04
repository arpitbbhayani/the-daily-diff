---
title: Sagrada linter detects zombie rules in agent instruction files
source: hn
url: https://cruxia.dev/
date: '2026-08-02'
tags:
- agent-instruction-files
- belief-rot-index
- catchup
- hn
- linter
- sagrada
- zombie-rules
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49144844'
comments: https://news.ycombinator.com/item?id=49144844
why_read: This text introduces Sagrada, a linter designed to identify 'zombie rules'
  in agent instruction files. Readers will learn about the problem of belief rot in
  agent configurations and a tool to detect it.
authors:
- mars-ausili
---

Working with AI agents means managing complex instruction sets, but have you considered "belief rot"? This novel linter, Sagrada, tackles the subtle problem of agent instructions becoming inconsistent or contradictory over time, a silent killer for agent reliability.

Sagrada tracks the "belief state" of your agent files by analyzing version history, flagging what it calls "zombie rules"-instructions that were deleted but later reappeared, or simply forgotten. It is not just a simple static analysis; it understands the history of your rules.

The project demonstrates that 14.5% of tested public repos had these zombie rules, highlighting a pervasive, often overlooked issue. For senior engineers, this is a highly practical tool to ensure agents behave as expected by bringing discipline to their instruction management. You can directly apply this to improve the robustness and maintainability of your agent systems.
