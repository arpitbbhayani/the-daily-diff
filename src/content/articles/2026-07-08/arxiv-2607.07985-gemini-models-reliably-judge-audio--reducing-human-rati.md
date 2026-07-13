---
title: Gemini Models Reliably Judge Audio, Reducing Human Rating Costs
source: arxiv
url: http://arxiv.org/abs/2607.07985v1
date: '2026-07-08'
tags:
- arxiv
- audio-judging
- catchup
- cs.AI
- cs.CL
- cs.SD
- eess.AS
- evaluation-cost
- full-duplex-conversations
- gemini-models
- human-rating
- lalm
- model-reliability
- spearman-rho
arxiv_id: '2607.07985'
categories: cs.CL, cs.AI, cs.SD, eess.AS
why_read: This analysis provides an empirical basis for understanding Gemini models'
  reliability as audio judges, demonstrating their potential to substitute human raters
  for specific conversation evaluation tasks and reduce costs.
authors:
- A. Sayyad
- J. Emmons
- S. Jones
- T. Lin
- H. Krishnan
---

Deploying full-duplex voice agents requires robust quality assurance, often involving costly human evaluation. This research reveals that Large Audio Language Models (LALMs) like Gemini are now proving their mettle as reliable "audio judges."

The study rigorously validates Gemini 2.5 Flash against three calibrated human raters across 209 stereo sessions and 8 production dimensions. It finds LALM-human Spearman rho often within 0.07 of human-human agreement, and LALMs agreeing with human mean within 1 point on 60 to 92 percent of sessions.

Crucially, the empirical evidence suggests that LALMs can be as sensitive as humans in detecting defects, and deploying them for evaluation could reduce costs by roughly two orders of magnitude compared to human workloads.

For engineers building and scaling AI agents, this offers a compelling case for integrating LALM-based evaluation into your CI/CD pipelines. It means faster iterations, lower costs, and more consistent quality for your voice-based products.

Revolutionize your voice agent quality assurance with LALM judges.
