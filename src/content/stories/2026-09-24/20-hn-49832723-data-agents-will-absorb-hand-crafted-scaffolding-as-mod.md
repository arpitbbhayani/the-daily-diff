---
title: Data agents will absorb hand-crafted scaffolding as models scale
source: hn
url: http://muratbuffalo.blogspot.com/2026/09/what-happens-when-model-eats-stack.html
date: '2026-09-24'
tags:
- agent-scaffolding
- catchup
- data-agents
- hn
- llm-scaling
- persistent-semantic-context
- the-bitter-lesson
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49832723'
comments: https://news.ycombinator.com/item?id=49832723
why_read: Understand how foundation model improvements make complex agent scaffolding
  obsolete in favor of simpler architectures. You will learn why data agent research
  should shift focus toward curating persistent semantic context.
authors:
- Ion
- Matei
---

Hand-engineered agent frameworks are getting swallowed by foundation model improvements. A new benchmark evaluation comparing specialized, human-designed SQL agents against generic coding agent harnesses found that advanced models quickly invert previous architectural advantages.

On benchmarks like TAG-Bench and DAB, complex custom data agent scaffolding initially beat vanilla harnesses on token efficiency and accuracy using older models. However, testing the exact same harnesses with newer frontier reasoning models completely flipped the result. The vanilla coding agent surpassed the bespoke data agent on both accuracy and token consumption, while reducing query-resolution iterations from 23.2 turns down to just 6.0 turns.

This provides concrete evidence that the Bitter Lesson applies directly to agentic scaffolding. Spending months hand-crafting multi-turn heuristic prompt pipelines or specialized routing wrappers produces diminishing returns as model capability advances.

Software engineers building data platforms should pivot their architectural investments. Instead of engineering brittle workflow loops that models will soon internalize, focus infrastructure effort on building high-quality, persistent semantic context and curated schema representations.
