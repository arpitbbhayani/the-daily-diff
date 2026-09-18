---
title: Write Linters and Tools Before Code
source: hn
url: https://cookie.engineer/weblog/articles/write-linters-and-tools-before-code.html
date: '2026-09-16'
tags:
- catchup
- hn
- language-models
- linters
- non-deterministic-agents
- output-variance
- prompt-engineering
- structured-output
- tools
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49733526'
comments: https://news.ycombinator.com/item?id=49733526
why_read: This piece argues that language model output variance is an inherent operating
  condition, not a prompt engineering problem. Readers will learn to build executable
  tools and structures *before* generating content to reliably manage non-deterministic
  agent output.
authors:
- cookiengineer
---

When working with AI agents, stop asking models to invent structure and start giving them a structure to fill in. This means building linters, parsers, and schema validators *before* letting non-deterministic agents generate code.

LLMs excel at local writing but are poor global bookkeepers. Their non-deterministic nature means two runs of the same prompt can yield structurally different outputs, like skipped heading levels or incorrect frontmatter. This is not a prompt engineering problem; it is an operating condition.

The productive approach is to enforce structural invariants externally. By building executable structures first, you ensure that the AI fills in a correct container, preventing common issues where "the content is fine; the container is wrong." This is a powerful shift in engineering practice for AI-assisted development.
