---
authors:
- Sarthak Munshi
comments: https://news.ycombinator.com/item?id=49277183
date: '2026-08-12'
depth_score: 7
hn_id: '49277183'
image: /infographics/24-hn-49277183.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-reliability
- catchup
- credit-assignment-problem
- hn
- horizon-problem
- long-tasks
- training-environments
title: AI reliability for long tasks faces a horizon problem
url: https://smunshi.net/posts/ai-theses.html
utility_score: 9
why_read: This text explains why current AI struggles with long, multi-step tasks
  due to fundamental limitations like the horizon problem and credit assignment. Readers
  will learn about these challenges and gain insights into designing AI workflows
  around present-day reliability constraints.
---

Current AI agent frameworks often struggle with long, multi-step tasks, and it is not just about compute or model size. The 'horizon problem' 

A model that is 95% reliable per step will only succeed 59% of the time over 10 steps, dropping to 36% over 20. This is a compounding error problem, not a capability wall that a larger model will inherently fix without fundamental architectural changes.

This means we should be designing AI workflows around short, verifiable tasks today. Do not bet your roadmap on agents reliably completing multi-day projects based on marketing hype; pilot longer autonomous runs in parallel, but build your core systems to mitigate the inherent unreliability of extended sequences.

The key is strategic workflow design, not just bigger models.