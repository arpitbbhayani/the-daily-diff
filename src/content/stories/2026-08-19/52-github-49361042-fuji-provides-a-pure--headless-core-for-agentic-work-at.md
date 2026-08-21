---
title: Fuji provides a pure, headless core for agentic work at scale
source: github
url: https://github.com/paradise-runner/fuji
date: '2026-08-19'
tags:
- agentic-core
- bundled-tools
- catchup
- fleet-deployment
- fuji
- github
- go-programming-language
- headless-runtime
- provider-agnostic
- session-continuity
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49361042'
comments: https://news.ycombinator.com/item?id=49361042
why_read: This text describes fuji, a lightweight, headless agentic core written in
  Go. Readers will learn about its key features, such as bundled tools, embeddability,
  and provider agnosticism, for scaling agentic work.
authors:
- dividedcomet
---

Building reliable AI agents at scale demands a solid infrastructure, and Fuji, an open-source Go project, delivers a compelling solution. It stands out by offering a "pure, naked core" - an embeddable, headless agent runtime designed for fleet deployments and batch pipelines.

The project's commitment to determinism is critical: it bundles standardized tools like read, write, bash, and git, ensuring a consistent agentic experience across different environments. This eliminates the common headache of host environment drift that often plagues complex agent setups.

If you are building LLM infrastructure or looking to deploy multi-agent systems reliably, Fuji provides a highly practical, provider-agnostic core. It even includes full JSONL v3 session compatibility for branching and resuming workflows, making it a powerful tool for serious agent development.
