---
authors:
- Haoyaun Zhu
- Jie Zhang
comments: https://news.ycombinator.com/item?id=49572719
date: '2026-09-05'
depth_score: 8
hn_id: '49572719'
image: /infographics/58-hn-49572719.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- black-box-llm
- catchup
- hn
- llm-bias
- llm-judges
- measurement-reliability
- non-determinism
- preregistration
- unstable-measurement
title: Black-Box LLM Observers Exhibit Unstable Measurement Reliability
url: https://arxiv.org/abs/2609.04198
utility_score: 8
why_read: This paper rigorously audits the reliability of LLM judges, revealing significant
  instability. Readers will learn that the assumption of consistent LLM judge behavior
  is flawed and understand the mechanisms contributing to this measurement failure.
---

Evaluating LLMs using other LLMs as judges is fundamentally unstable, a preregistered study reveals. Your confidence in LLM-driven leaderboards or training data curation might be misplaced.

The study found striking unreliability: same-window repeat rankings agreed at a Spearman correlation of only 0.400 against a required 0.90. Byte-identical inputs replayed the next day achieved only 0.78 against a 0.99 target, consistently failing to meet reliability thresholds.

Researchers identified key mechanisms for this failure, including a significant label-to-meaning mapping bias and inherent noise where candidate differences were far below the instrument's noise floor. Neither waiting nor switching across four major providers offered a solution; they all demonstrated similar levels of instability.

This is a critical insight for anyone building or deploying AI agents and LLM infrastructure. True evaluation reliability demands acknowledging and mitigating this pervasive measurement instability.