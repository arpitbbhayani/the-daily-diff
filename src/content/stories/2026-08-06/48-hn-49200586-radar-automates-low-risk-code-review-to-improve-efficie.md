---
title: RADAR automates low-risk code review to improve efficiency at Meta
source: hn
url: https://arxiv.org/abs/2605.30208
date: '2026-08-06'
tags:
- ai-assisted-coding
- catchup
- code-review-automation
- hn
- radar
- review-efficiency
- risk-calibration
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49200586'
comments: https://news.ycombinator.com/item?id=49200586
why_read: This document explains how Meta uses the RADAR system to automate low-risk
  code reviews, addressing challenges posed by increasing AI-generated code. Readers
  will learn about the system's design, how risk thresholds are calibrated, and its
  impact on review efficiency and latency.
authors:
- Chris Adams
- Arjun Singh Banga
- Parveen Bansal
- Souvik Bhattacharya
- Payal Bhuptani
- Rujin Cao
- Pedro Canahuati
- Nate Cook
- Brian Ellis
- Prabhakar Goyal
- Gurinder Grewal
- Tianyu He
- Matt Labunka
- Alex Manners
- David Molnar
- Ging Cee Ng
- Vishal Parekh
- Jiefu Pei
- Frederic Sagnes
- James Saindon
- Will Shackleton
- Sid Sidhu
- Gursharan Singh
- Karthik Chengayan Sridhar
- Matt Steiner
- Pratibha Udmalpet
- Sean Xia
- Stacey Yan
- Audris Mockus
- Peter Rigby
- Nachiappan Nagappan
---

The rise of AI-assisted coding tools has dramatically increased code output at Meta, with lines of code per human-landed diff up 105.9 percent year over year. Much of this, over 80 percent, is driven by agentic AI. However, reviewer bandwidth has not kept pace, leading to a widening gap in timely code reviews.

Meta's solution is RADAR (Risk Aware Diff Auto Review), a multi-stage funnel designed to automate low-risk code reviews. The system classifies each diff, determines its risk level, and can automatically approve changes that meet certain safety thresholds. This directly addresses the bottleneck created by increased AI-generated code.

This paper delves into the practical aspects of risk calibration, balancing automation yield with safety, and how automated review impacts end-to-end latency. For senior engineers, this provides invaluable insight into designing robust, scalable engineering practices for a future dominated by AI-assisted development. It is a critical lesson in how large organizations are adapting to maintain quality and velocity.
