---
title: Attractor Models offer stable, efficient looped computation for AI reasoning
source: hn
url: https://arxiv.org/abs/2605.12466
date: '2026-09-13'
tags:
- attractor-models
- catchup
- hn
- implicit-differentiation
- language-modeling
- looped-transformers
- reasoning-tasks
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49688118'
comments: https://news.ycombinator.com/item?id=49688118
why_read: This paper introduces Attractor Models, a novel approach to recurrent computation
  that overcomes the instability and cost of Looped Transformers. Readers will learn
  how these models achieve superior performance in language modeling and complex reasoning
  tasks through adaptive iterations and implicit differentiation.
authors:
- Jacob Fein-Ashley
- Paria Rashidinejad
---

Recurrent neural networks have always held promise for complex reasoning but struggle with training stability and fixed recurrence depths. This paper introduces "Attractor Models," a compelling new paradigm that could change how we build future LLMs.\n\nAttractor Models refine latent representations by iteratively solving for a fixed point, utilizing implicit differentiation for gradients. This allows for constant training memory in effective depth and adaptive iteration counts, overcoming major limitations of prior recurrent designs.\n\nThe empirical results are striking. A 770M Attractor Model outperforms a 1.3B Transformer on language modeling, and models with only 27M parameters achieve 91.4% on Sudoku-Extreme and 93.1% on Maze-Hard, outperforming even frontier models. This is a significant leap in efficiency and capability for reasoning tasks.\n\nThis architecture delivers a Pareto improvement across the board, reducing training cost while enhancing both language modeling and reasoning capabilities. It is a genuine step forward in applied AI and LLM infrastructure.
