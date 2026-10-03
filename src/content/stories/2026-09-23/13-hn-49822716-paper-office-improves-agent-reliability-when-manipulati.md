---
title: Paper Office improves agent reliability when manipulating Office documents
source: hn
url: https://www.paperinstruments.com/blog/introducing-paper-office
date: '2026-09-23'
tags:
- ai-agents
- catchup
- hn
- ooxml
- openpyxl
- paper-office
- python-docx
- python-pptx
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49822716'
comments: https://news.ycombinator.com/item?id=49822716
why_read: Understand why standard Python libraries fail at AI document manipulation
  and how purpose-built tooling improves fidelity and correctness across Office formats.
authors:
- Daanish Khazi
- Gavin Bains
- Joey Besgen
image: /infographics/13-hn-49822716.jpg
---

Most AI agents fail at editing Office documents because standard Python packages like python-docx and openpyxl were built as manual construction tools, not structured modification primitives for LLMs. When tasks fail, models frequently attempt raw XML surgery on zipped OOXML archives, breaking internal relationships and corrupting files.

Paper Office tackles this harness bottleneck by wrapping OOXML internals with strict safety contracts and domain-specific agent skills. Across 61 test tasks and five frontier models, the structured tools boosted task completion from 69.5 percent (using standard Anthropic Office skills) to 92.5 percent.

More importantly, agent attempts to write raw file internal edits dropped from 78.7 percent to just 1.6 percent. This is a great reminder that prompt engineering cannot compensate for broken tool primitives; robust domain harnesses are required for production agent workflows.

Investing in correct underlying libraries consistently beats adding more reasoning loops to compensate for bad tooling.
