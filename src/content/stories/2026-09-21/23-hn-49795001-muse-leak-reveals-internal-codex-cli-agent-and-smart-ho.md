---
authors:
- Peter James
comments: https://news.ycombinator.com/item?id=49795001
date: '2026-09-21'
depth_score: 8
hn_id: '49795001'
image: /infographics/23-hn-49795001.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- codex-cli
- esp32
- hatch
- hn
- internal-files
- leak
- meta-home-link
- muse
title: Muse leak reveals internal Codex CLI agent and smart-home bridge
url: https://twitter.com/heypeterjames/status/2102183574384300356
utility_score: 8
why_read: This post details a significant leak of Muse's internal runtime files, revealing
  components like a Codex CLI repair agent, the 'Hatch' internal harness, and documentation
  for an ESP32 smart-home bridge called Meta Home Link. Readers will gain insight
  into the hidden architecture and functionalities of the Muse system.
---

Imagine getting a 6.8GB peek into a major tech company's AI agent filesystem. That is exactly what happened with Meta's Muse, internally codenamed 'Hatch,' and the findings are fascinating for anyone building complex AI systems.

The leak revealed a "Codex CLI repair agent," suggesting sophisticated self-correction mechanisms are embedded directly into production agents. It also shows a clear `/skills` directory containing 68 distinct integrations, providing a concrete example of how real-world agent tool-use is structured.

This unexpected glimpse offers rare, practical insights into the underlying architecture and capabilities of advanced AI agents, moving beyond theoretical discussions to show how such systems are actually engineered.