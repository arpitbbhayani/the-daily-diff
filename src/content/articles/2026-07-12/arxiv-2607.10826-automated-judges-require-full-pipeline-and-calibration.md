---
title: Automated Judges Require Full Pipeline and Calibration Evaluation
source: arxiv
url: http://arxiv.org/abs/2607.10826v1
date: '2026-07-12'
tags:
- 3d-defectbench
- arxiv
- automated-evaluation
- catchup
- cs.AI
- cs.CV
- cs.GR
- defect-detection
- evaluation-pipeline
- generative-3d-systems
- human-labels
- rgb-protocol
- silver-labels
- vision-language-models
arxiv_id: '2607.10826'
categories: cs.CV, cs.AI, cs.GR
why_read: This paper introduces 3D-DefectBench, a framework for systematically analyzing
  VLM-based 3D defect detection. It highlights that automated judges should be evaluated
  as complete pipelines and calibrated against human reference regimes, rather than
  as standalone models.
authors:
- Zhenyu Zhao
- Nanshan Jia
- Jihyeon Je
- Yifu Tang
- Alvin Chan
- Michael Spedden
- Michael V. Palleschi
- Sui Huang
- Jingshen Wang
- Zeyu Zheng
---

Automated evaluation is indispensable for scaling generative 3D systems, yet the reliability of automated judges depends on the entire pipeline, not just the Vision-Language Model itself. 3D-DefectBench highlights this critical point.

This benchmark and framework systematically analyze VLM-based 3D defect detection across four factors: VLM choice, camera protocol, visual input, and prompt schema. It uses nine fine-grained binary defects.

The study found that while model choice is the largest determinant, other factors significantly affect performance and interact with model selection. For instance, a compact six-view RGB protocol performed comparably to denser settings, offering a cost-effective default.

If you are building or evaluating any AI system that relies on automated judges, this work underscores the importance of a holistic, pipeline-level evaluation strategy. Do not just benchmark the model; benchmark the entire process.

Evaluate your AI systems as complete pipelines, not just isolated models.
