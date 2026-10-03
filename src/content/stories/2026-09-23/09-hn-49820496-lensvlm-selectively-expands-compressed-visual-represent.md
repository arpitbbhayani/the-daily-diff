---
title: LensVLM selectively expands compressed visual representations of text
source: hn
url: https://huggingface.co/apple/LensVLM-9B
date: '2026-09-23'
tags:
- catchup
- context-expansion
- document-processing
- hn
- lensvlm
- vision-language-models
- visual-text-compression
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49820496'
comments: https://news.ycombinator.com/item?id=49820496
why_read: Read this to understand how vision-language models can efficiently process
  large documents by scanning compressed visual text and selectively decompressing
  only relevant pages.
authors:
- Roy Xie
- Dan Friedman
- Donghan Yu
- Bowen Pan
- Christopher Fifty
- Jang-Hyun Kim
- Xianzhi Du
- Zhe Gan
- Vivek Rathod
- Bhuwan Dhingra
image: /infographics/09-hn-49820496.jpg
---

Scaling context windows by brute-force token concatenation is hitting fundamental memory and compute walls. Apple's LensVLM proposes an elegant alternative: convert long-form documents into compressed images at up to 15x compression, then train the vision-language model to selectively expand only the relevant pages via learned tool calling.

Instead of paying the full quadratic or linear attention cost across tens of thousands of tokens on every forward pass, the model scans low-resolution visual representations first. When it detects relevant text or evidence, it invokes an expansion tool to retrieve the uncompressed tokens for precise reasoning.

This hybrid visual-textual retrieval pattern offers a practical blueprint for handling massive multi-page documents without blowing through inference latency budgets.
