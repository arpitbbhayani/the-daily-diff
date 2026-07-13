---
title: Multimodal VAP Framework Improves Robot Turn-Taking Prediction
source: arxiv
url: http://arxiv.org/abs/2607.07294v1
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.AI
- cs.CL
- cs.RO
- human-robot-interaction
- inter-speaker-attention
- low-rank-adaptation
- mm-vap
- multimodal-inputs
- self-supervised-learning
- semantic-consistency-loss
- social-robots
- turn-taking-prediction
arxiv_id: '2607.07294'
categories: cs.RO, cs.AI, cs.CL
why_read: This paper introduces a multimodal framework (MM-VAP) for predicting conversational
  turn-taking in social robots. Readers will learn how it uses synchronized audio-visual
  inputs and advanced neural network techniques to improve robot interaction dynamics,
  especially in mediation contexts.
authors:
- Antonio Cano
- "Guillermo P\xE9rez"
- Luis Merino
- Randy Gomez
---

One of the biggest hurdles for social robots is natural, seamless human-robot interaction, especially in mediating conversations. Accurately predicting when to speak and when to listen - the art of turn-taking - is paramount.
The Multimodal Voice Activity Projection (MM-VAP) framework tackles this by extending audio-only VAP to synchronized audio-visual inputs. It capitalizes on pretrained speech-related backbones, adapting them via Low-Rank Adaptation for the nuanced problem of turn-taking.
MM-VAP introduces an inter-speaker attention stage to model relational dynamics and a semantic consistency loss to regularize the output space. This allows robots to anticipate conversational flow rather than just react to pauses.
Evaluations on benchmark datasets like NoXi and NoXi+J show significant improvements over existing baselines. This development is a critical step towards building truly intelligent and socially aware AI agents capable of engaging in complex human environments.
