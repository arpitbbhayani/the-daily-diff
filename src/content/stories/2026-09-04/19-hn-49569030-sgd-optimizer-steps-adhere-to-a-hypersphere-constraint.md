---
title: SGD Optimizer Steps Adhere to a Hypersphere Constraint
source: hn
url: https://kbwal.github.io/writing/notes-on-muon/
date: '2026-09-04'
tags:
- catchup
- euclidean-norm
- gradient-geometry
- hn
- llm-training
- muon
- optimizers
- sgd
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49569030'
comments: https://news.ycombinator.com/item?id=49569030
why_read: Readers will gain a geometric understanding of how optimizers like SGD operate,
  specifically seeing how its updates are constrained to a hypersphere by the Euclidean
  norm. This provides a foundational intuition for differentiating optimizer mechanisms.
authors:
- Kushal
---

Optimizers like SGD, AdamW, and the newer Muon are fundamental to LLM training, but their underlying mechanics can feel opaque. This insightful post unpacks them through a single geometric idea: how they budget their parameter updates.

Instead of just seeing different formulas, you understand that each optimizer essentially defines a "size function" for its steps, shaping the hypersphere or ellipsoid within which updates occur. For example, SGD constrains steps to a Euclidean hypersphere, while AdamW's adaptive scaling changes that shape.

This geometric intuition provides a much clearer understanding of why these optimizers behave differently and when each might be most effective. It is a must-read for anyone looking to move beyond black-box optimizer usage in applied AI and LLM infrastructure.
