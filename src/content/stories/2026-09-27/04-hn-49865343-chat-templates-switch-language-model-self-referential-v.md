---
title: Chat templates switch language model self-referential voice
source: hn
url: https://arxiv.org/abs/2609.25021
date: '2026-09-27'
tags:
- activation-steering
- catchup
- chat-templates
- disclaimer-voice
- hn
- introspection
- self-referential-voice
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49865343'
comments: https://news.ycombinator.com/item?id=49865343
why_read: Read this to understand how formatting templates and internal activation
  directions steer whether language models produce disclaimers or experiential self-reports.
  It identifies a critical confound for researchers studying model self-knowledge
  and introspection.
authors:
- "J\u0119drzej Maczan"
image: /infographics/04-hn-49865343.jpg
---

Chat templates do far more than format prompt tokens. A recent mechanistic interpretability study demonstrates that chat templates directly control whether an instruction model adopts a detached disclaimer voice (such as stating it is an AI) or an experiential voice.

Across eight open-source instruction-tuned models up to 9B parameters, removing the chat template drastically reduces reflexive disclaimer phrasing. By isolating the specific direction in the model activation space, researchers demonstrated that adding or removing this activation vector synthetically recreates or suppresses the disclaimer behavior without modifying prompt text.

For engineering teams building agentic harnesses or evaluating LLM persona consistency, this finding shows that chat templates introduce a strong architectural confound in model self-reporting. You can steer model self-awareness attributes directly inside the residual stream rather than fighting template artifacts via system prompts.

Prompt wrappers do not just structure text, they actively bias internal activation vectors.
