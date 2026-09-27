---
title: Filtering Unix streams by asking questions instead of matching patterns
source: github
url: https://github.com/aurorainfra/grev
date: '2026-09-24'
tags:
- catchup
- cli-tools
- github
- log-filtering
- semantic-search
- unix-filters
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49837132'
comments: https://news.ycombinator.com/item?id=49837132
why_read: Learn how grev replaces regex pattern matching with calibrated probabilistic
  models to filter, label, and rank text streams by semantic meaning.
authors:
- devttyeu
image: /infographics/13-github-49837132.jpg
---

Traditional CLI tools like grep and awk operate purely on syntactic pattern matching, making semantic log parsing and commit verification cumbersome. A new open source utility called grev rethinks Unix core utilities by evaluating semantic questions rather than matching regex strings.

Instead of generating unstructured responses like traditional LLM chat wrappers, the underlying model answers typed classification questions with calibrated probabilities. The utility strictly outputs original input lines, preserving the predictable stream ergonomics needed for standard standard I/O pipes.

This approach lets you filter upstream errors in server logs, route webhook alerts, or block accidental credential commits using natural criteria without breaking pipeline composability.
