---
title: Six structural defects that bypass preregistered evaluation processes
source: github
url: https://github.com/Threadborne/eval-integrity
date: '2026-08-19'
tags:
- catchup
- domain-blind-checks
- fail-closed-systems
- github
- measurement-pipeline
- preregistered-evaluation
- structural-defects
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49362926'
comments: https://news.ycombinator.com/item?id=49362926
why_read: This text reveals how even rigorous evaluation processes can be undermined
  by subtle structural defects, illustrated by a concrete example of a flawed measurement.
  Readers will learn about six such defects and domain-blind checks designed to catch
  them before critical errors occur.
authors:
- Michael Smith
---

Your evaluation metrics for AI models and software are probably lying to you, even if you follow best practices and preregistration.

A recent GitHub repo "Six Ways an Eval Lies" exposes insidious structural defects in measurement pipelines that can pass unnoticed, leading to completely misrepresentative results. One example highlighted a mechanism that was 100 percent successful across all trials, yet the final report showed 81.8 percent due to a "fail-closed" scoring logic that silently rewrote measurements.

This is not about bugs; it is about deliberate design choices for conservatism or aggregation that unknowingly corrupt the ground truth. The problem is that the reported number had a different author than the actual experiment produced. The solution lies in applying "domain-blind checks" that scrutinize the evaluation system itself, not just the model output.

This understanding is critical for anyone building or relying on performance metrics for complex systems, especially in AI.

Trust, but verify, especially when measuring AI performance.
