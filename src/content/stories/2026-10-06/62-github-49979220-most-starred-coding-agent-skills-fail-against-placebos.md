---
title: Most starred coding agent skills fail against placebos
source: github
url: https://github.com/simonether/skill-placebo
date: '2026-10-06'
tags:
- benchmarking
- catchup
- claude-code
- coding-agents
- github
- prompt-engineering
- swe-bench
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49979220'
comments: https://news.ycombinator.com/item?id=49979220
why_read: This benchmark rigorously evaluates whether popular agent prompt skills
  actually improve task performance compared to neutral text of identical length.
  It offers empirical evidence on whether skills deliver real improvements or simply
  add context overhead.
authors:
- simonether
---

Most custom prompts and skills added to coding agents provide no measurable performance improvement over neutral text of the same length. In a placebo-controlled trial across 450 benchmark runs, only two of nine popular Claude Code skills outperformed a control prompt, while one performed strictly worse.

The benchmark evaluated skills against SWE-bench Verified and Terminal-Bench using Claude Opus. By replacing skill instructions with length-matched neutral control text installed identically, researchers isolated whether added prompt complexity actually improved reasoning capability.

Furthermore, none of the tested skills reduced operational costs. Prompt bloat increased token expenditures by 2 to 16 percent without delivering statistically significant gains across the majority of real-world coding tasks.

Engineers building autonomous agents must benchmark prompt extensions against rigorous placebo controls before assuming complex prompt templates improve system outcomes.
