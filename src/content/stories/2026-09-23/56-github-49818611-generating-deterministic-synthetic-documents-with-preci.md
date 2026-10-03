---
title: Generating deterministic synthetic documents with precise layout supervision
source: github
url: https://github.com/paperchase-labs/tenderness
date: '2026-09-23'
tags:
- cairo
- catchup
- document-rendering
- github
- layout-analysis
- pango
- synthetic-documents
- vision-language-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49818611'
comments: https://news.ycombinator.com/item?id=49818611
why_read: Learn how Tenderness renders synthetic documents deterministically to eliminate
  noisy OCR reconstruction and provide exact ground-truth layout annotations for vision-language
  models.
authors:
- paperchase-labs
---

Most training datasets for document layout analysis are inherently noisy because they rely on reverse engineering. Teams render text, pass it through heuristics or OCR pipelines, and attempt to reconstruct bounding boxes after the fact.

Tenderness takes the opposite approach by using Cairo and Pango to generate synthetic documents deterministically from code. Every character position, margin, font metric, and line break is fully captured at render time rather than inferred downstream.

This structural precision completely removes pipeline hallucinations when building ground truth datasets for vision-language models and document parsers. You get pixel-perfect bounding coordinates and metadata alongside the generated PDFs or SVGs without secondary verification steps.

Generating synthetic documents with native layout awareness solves one of the messiest data preparation bottlenecks in multimodal model training.
