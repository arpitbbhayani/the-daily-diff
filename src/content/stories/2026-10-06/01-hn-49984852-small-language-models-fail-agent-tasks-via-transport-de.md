---
title: Small language models fail agent tasks via transport defects
source: hn
url: https://arxiv.org/abs/2609.21341
date: '2026-10-06'
tags:
- catchup
- database-agents
- hn
- small-language-models
- sql-client
- tool-calling
- transport-failures
section: ai
is_news: false
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49984852'
comments: https://news.ycombinator.com/item?id=49984852
why_read: This paper shows that small language models often fail at database agent
  tasks due to mechanical transport and tooling bugs rather than reasoning limitations.
  You will gain insight into how to diagnose and fix systemic tool-call failure modes
  without altering prompts or models.
authors:
- Cevheri Bozoglan
- Yusuf Gundogdu
- Abdullah Kaya
- Koray Sirin
image: /infographics/01-hn-49984852.jpg
---

When small language models fail in database agent tasks, engineers often assume the issue is a lack of reasoning capability. Empirical testing across 8,199 production runs and 39 open-weight models reveals a different reality: over 75 percent of agent failures occurred after the model successfully invoked a tool.

The dominant failure mode was transport errors, where tools were invoked but the execution harness failed to validate the payload shapes. Schema mismatches between sibling tool definitions in the server harness caused silent rejections that appeared as model incompetence in high-level metrics. Addressing five server-side schema inconsistencies immediately restored functional performance across six models without changing prompts or weights.

This demonstrates that agent reliability often depends more on robust tool contract design and error visibility than on scaling model parameters.
