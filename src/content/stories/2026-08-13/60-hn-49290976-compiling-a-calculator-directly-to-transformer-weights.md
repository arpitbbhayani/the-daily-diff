---
title: Compiling a calculator directly to transformer weights
source: hn
url: https://ood.dev/posts/calculator/
date: '2026-08-13'
tags:
- catchup
- compiler
- fixed-computation
- grade-school-algorithms
- hn
- llm-math
- transformers
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49290976'
comments: https://news.ycombinator.com/item?id=49290976
why_read: This article demonstrates a novel approach to creating computational models
  by directly compiling a calculator into transformer weights. Readers will learn
  about the expressive capabilities of transformers beyond learned behavior and how
  a compiler can address LLM math weaknesses.
authors:
- Rob Porter
---

Ever wondered if transformers can truly "do" math, or if they are just good at pattern matching? This article presents a mind-bending approach: directly compiling arithmetic algorithms into transformer weights. No training involved.

The author built a compiler, Torchwright, that takes a fixed computation graph for operations like grade-school multiplication and translates it into transformer weights. This bypasses the typical learning process entirely.

This work reveals a new dimension of transformer capabilities, showing that their architecture can express deterministic algorithms directly. It changes how you might think about hardcoding specific functions into AI models rather than relying solely on emergent behavior from training.
