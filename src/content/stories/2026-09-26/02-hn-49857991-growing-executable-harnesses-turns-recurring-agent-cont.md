---
title: Growing executable harnesses turns recurring agent control into code
source: hn
url: https://arxiv.org/abs/2609.26760
date: '2026-09-26'
tags:
- agent-scaffolds
- catchup
- failure-localization
- growing-harness
- hn
- inference-efficiency
- llm-agents
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49857991'
comments: https://news.ycombinator.com/item?id=49857991
why_read: Read this paper to learn how compiling repetitive control decisions into
  executable harness code significantly reduces inference costs and model calls while
  maintaining agent accuracy.
authors:
- Laizhen Li
- Jiarui Li
- Juanjuan Zhao
- Kejiang Ye
- Ye Li
- Cheng-zhong Xu
- Xitong Gao
image: /infographics/02-hn-49857991.jpg
---

Standard LLM agent architectures waste significant token budget forcing models to reconstruct repetitive control flow and recovery logic inside prompt context windows. Growing Harness replaces prompt bloat with an automated, failure-guided framework that synthesizes reusable control code from execution traces.

When an agent fails, the optimizer identifies the specific functional failure surface and patches the shared execution scaffold. Crucially, a regression gate runs against held-out validation tasks to ensure updates do not degrade existing capabilities. The emerging control code handles routing and retries deterministically, reserving expensive inference calls purely for high-level semantic reasoning.

Benchmark evaluations on WebArena and BrowseComp-Plus demonstrate that this code-centric paradigm slashes LLM tool calls by 76.0 to 91.8 percent while cutting overall deployment inference costs by up to 98.6 percent.

Replacing complex system prompts with validated procedural code offers a far more scalable path toward production agent reliability.
