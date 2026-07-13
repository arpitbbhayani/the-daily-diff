---
title: Deployment simulation effectively forecasts AI model misbehavior rates
source: arxiv
url: http://arxiv.org/abs/2607.07184v1
date: '2026-07-08'
tags:
- ai-model-evaluation
- arxiv
- catchup
- cs.AI
- cs.LG
- deployment-risk
- deployment-simulation
- language-model
- model-misbehavior
- pre-deployment-safety
arxiv_id: '2607.07184'
categories: cs.LG, cs.AI
why_read: This text introduces deployment simulation, a novel method for evaluating
  AI models pre-deployment, and demonstrates its effectiveness in accurately forecasting
  real-world misbehavior rates. Readers will learn how this approach surpasses traditional
  evaluations and offers a path for quantitative assessment of deployment risk.
authors:
- Marcus Williams
- Hannah Sheahan
- Cameron Raymond
- Tomek Korbak
- Deng Pan
- Peilin Yang
- Leon Maksin
- Ningyi Xie
- Phillip Guo
- Ian Kivlichan
- Micah Carroll
---

Deploying a new LLM without understanding its real-world risks is a major challenge, as traditional pre-deployment evaluations often fall short in coverage and representativeness. The data rarely captures how users will truly interact with the model.
A new method proposes simulating deployment directly. It reuses de-identified conversations from past models, fixes the initial prompt, and then regenerates the next response using the candidate model. This produces realistic scenarios for auditing.
This simulation approach was evaluated across four GPT-5-series deployments, with impressive results. It provided estimates of post-deployment misbehavior rates that were far closer to actual production traffic than those from adversarial evaluations.
The technique also identified "tool resampling realism" as a critical area for improvement, and research suggests it is surmountable even for complex tool-use cases.
This offers a powerful and cost-effective way for engineers to quantitatively assess deployment risk, moving beyond abstract safety tests to practical, data-driven predictions.
