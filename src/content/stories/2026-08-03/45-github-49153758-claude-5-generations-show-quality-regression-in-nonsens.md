---
title: Claude 5 generations show quality regression in nonsense detection and verbosity
source: github
url: https://github.com/anthropics/claude-code/issues/83510
date: '2026-08-03'
tags:
- bullshitbench-dataset
- catchup
- claude-5
- github
- nonsense-detection
- quality-regression
- reproducible-measurements
- verbosity
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49153758'
comments: https://news.ycombinator.com/item?id=49153758
why_read: This report details measurable quality regressions in Claude 5 models, specifically
  concerning worse nonsense detection, increased verbosity, and silent rerouting.
  It offers insight into specific model degradations and a methodology for reproducing
  these issues.
authors:
- KeilerHirsch
---

New Claude Gen-5 models (Opus, Sonnet, Fable) are showing a measurable quality regression, particularly in "nonsense detection" on the BullshitBench dataset. This is a critical finding for anyone deploying or evaluating these models.

The regressions include not only worse performance on identifying nonsensical prompts but also increased verbosity and silent rerouting. This means models are producing longer, less relevant responses and potentially changing internal logic without explicit indication, impacting reliability.

This report is a stark reminder that even state-of-the-art LLMs can regress across generations. For engineers building agentic systems, robust and continuous evaluation against specific benchmarks is paramount to ensure production stability and predictable behavior. Do not assume newer is always better.
