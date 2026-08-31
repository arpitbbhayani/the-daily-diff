---
title: Running code in Fortune 500 systems via AI agent files
source: hn
url: https://medium.com/@alonhertz1/data-became-code-we-ran-code-inside-fortune-500s-using-files-they-published-for-ai-agents-0cd67ffbbffc
date: '2026-08-29'
tags:
- ai-agents
- catchup
- code-execution
- corporate-security
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49488299'
comments: https://news.ycombinator.com/item?id=49488299
why_read: This article describes how researchers executed code within major corporations
  by exploiting files intended for AI agents. Readers will learn about a novel security
  vulnerability concerning AI systems and corporate data publication practices.
authors:
- nizbit
---

AI agents are a major frontier, but they come with significant new security risks. One team just demonstrated how files intended for agent consumption within Fortune 500 companies could be weaponized to run arbitrary code.

This is not a theoretical attack; it is a live exploit. The core issue arises when agents interpret data they are supposed to process as executable instructions, effectively turning an innocuous document into a backdoor. This vulnerability highlights a fundamental flaw in how agent systems currently parse and trust their inputs.

For engineers building agentic systems, this means rethinking data ingestion pipelines and sandboxing. You cannot assume that published data, even for internal use, is safe for an agent to process without robust validation and execution environments. This is a crucial lesson in securing the next generation of automated systems.

The line between data and code is blurring, and our defenses must adapt.
