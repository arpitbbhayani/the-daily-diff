---
title: CarbonCLIP Improves Carbon Prediction by Bridging Satellite and Ground Views
source: arxiv
url: http://arxiv.org/abs/2607.07292v1
date: '2026-07-08'
tags:
- arxiv
- carbonclip
- catchup
- contrastive-learning
- cs.AI
- cs.CV
- ground-level-data
- knowledge-transfer
- large-multimodal-models
- multimodal-learning
- remote-sensing
- satellite-prediction
- scalable-ai
- urban-carbon-emissions
arxiv_id: '2607.07292'
categories: cs.CV, cs.AI
why_read: This text explains CarbonCLIP, a novel framework for more accurate urban
  carbon emission prediction from satellite data. It demonstrates how integrating
  ground-level contextual knowledge via multimodal learning and LMMs creates a scalable
  and robust solution.
authors:
- Zeru Yang
- Fang-Ying Gong
- Steve H. L. Yim
- Chau Yuen
---

Accurate urban carbon emission estimation is vital for sustainable cities, but it is often hampered by disparate data sources and a lack of fine-grained context in satellite imagery. Traditional methods frequently miss the nuances of ground-level activity.
CarbonCLIP presents an innovative solution: a multimodal distillation framework that significantly enhances satellite-based carbon prediction. It bridges the gap between top-down satellite views and ground-level human activities by integrating street-view semantics and temporal context.
Crucially, it uses Large Multimodal Models to generate fine-grained textual descriptions from street-view images during pretraining, enriching the satellite representation. During inference, it only needs satellite imagery, enabling scalable deployment where ground-level data might be sparse.
Experiments in Beijing and Singapore show CarbonCLIP consistently outperforms baselines, validating its ability to transfer multimodal knowledge effectively. This robust solution offers a powerful tool for environmental monitoring and urban planning with AI.
