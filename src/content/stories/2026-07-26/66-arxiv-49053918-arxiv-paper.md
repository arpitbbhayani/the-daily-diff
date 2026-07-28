---
arxiv_id: '49053918'
categories: ''
date: '2026-07-26'
depth_score: 8
image: /infographics/66-arxiv-49053918.jpg
interest_score: 8
novelty_score: 8
section: ai
source: arxiv
tags:
- arxiv
- catchup
title: ArXiv Paper
url: https://arxiv.org/abs/49053918
utility_score: 7
why_read: You will learn a novel way to understand LoRA's true capacity and memorization
  characteristics, gaining insights into how parameter placement affects storage and
  how different fine-tuning methods impact privacy.
---

LoRA adapters are usually treated as skill add-ons, but how much actual data can they truly store? This ArXiv paper introduces a novel, compression-based method to quantify, in bits, the information an adapter "writes" into a frozen base model.

The findings are quite surprising. Adapters store significantly less than full fine-tuning, and their capacity is not just about the number of parameters, but critically, their location. Moving parameters from attention to the MLP layer can nearly double storage capacity.

This research also draws a clear line on privacy: supervised fine-tuning copies secrets verbatim, while adapters trained with verifiable rewards do not. Understanding these deep mechanisms can fundamentally change how you approach LoRA fine-tuning for efficiency, performance, and crucial privacy considerations.