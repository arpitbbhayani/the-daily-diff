---
title: Residualization Protocol Reveals Artefactual Stability in XAI Risk Hierarchies
source: arxiv
url: http://arxiv.org/abs/2607.10633v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- composite-outcomes
- correlated-predictors
- cs.AI
- cs.LG
- elasticnet
- explainable-machine-learning
- mental-health
- residualization
- risk-hierarchies
arxiv_id: '2607.10633'
categories: cs.LG, cs.AI
why_read: This text exposes how explainable machine learning pipelines can generate
  misleadingly stable risk hierarchies from composite outcomes and correlated predictors.
  Readers will learn about a crucial residualization protocol to detect and prevent
  such artefactual interpretations in XAI studies.
authors:
- Alireza Dehghan
- Negin Ashrafi
---

Ever wonder if your ML model's "robust" explanations are just an illusion? This paper reveals a critical pitfall: construct overlap in explainable machine learning pipelines.

They demonstrate that what looks like stable, cross-population risk hierarchies in mental health predictions can be an artifact of highly correlated input features and outcomes. For example, when trait anxiety and depression subscales are co-included, one can mask the true contribution of the other.

The paper introduces a powerful "residualization protocol." This simple check isolates shared variance between correlated variables via regression. Applying it can drastically change feature rankings, exposing when apparent stability is misleading.

If you are building or auditing XAI systems, especially in domains with complex, intertwined variables, this protocol is a must-have. It helps ensure your explanations are grounded in true causality, not statistical artifacts.

Build more trustworthy AI by understanding its hidden biases.
