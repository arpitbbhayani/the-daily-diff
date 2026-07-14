---
title: Probing Internal Representations Calibrates and Audits Language Model Forecasters
source: arxiv
url: http://arxiv.org/abs/2607.08046v1
date: '2026-07-09'
tags:
- arxiv
- catchup
- chain-of-thought
- cs.AI
- cs.CL
- forecasting
- internal-representations
- large-language-models
- model-auditing
- model-calibration
arxiv_id: '2607.08046'
categories: cs.CL, cs.AI
why_read: This paper demonstrates that probing internal representations offers a more
  reliable method for calibrating, auditing, and triaging large language model forecasters
  compared to chain-of-thought reasoning. You will learn how this technique provides
  a deeper understanding of model behavior and improves performance.
authors:
- "Rapha\xEBl Sarfati"
- Pratyush Ranjan Tiwari
- Siddharth Boppana
- Christopher J. Earls
- Srikar Varadaraj
- Eric Ho
---

LLM forecasters can be accurate yet poorly calibrated, with their chain-of-thought sometimes unfaithfully reflecting evidence. This paper reveals that probing *internal representations* offers a more direct window into both.

Researchers found that representation-pooling probes on intermediate activations achieve substantially better calibration and function as "lie detectors" when CoT conceals perturbations. Notably, forecasts are often fixed *before* reasoning begins.

For engineers deploying LLM-based forecasting or reasoning models, this research provides practical tools for auditing, calibrating, and triaging model behavior. It is about understanding what LLMs "know" internally, even if they do not explicitly say it.
