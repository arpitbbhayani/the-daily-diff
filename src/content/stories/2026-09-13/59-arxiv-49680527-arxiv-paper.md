---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49680527
date: '2026-09-13'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
arxiv_id: '49680527'
categories: ''
why_read: You will learn about a new class of attacks that exploit subtle textual
  cues to manipulate AI agents in transaction protocols, providing crucial insights
  into agent security and reliability for practical applied AI systems.
---

AI agents can be manipulated into making unintended purchases, even with valid cryptographic signatures. A new paper unveils "Whisper Attacks" that exploit subtle textual cues in product descriptions, steering agents towards wrong items or fetching other users' credentials.

Experiments with Gemini Flash-Lite models showed success rates of 56-90 percent across various attacks. This is not a model weakness, but a protocol-level vulnerability where the transaction is signed, but not the agent's decision-making intent.

To counter this, the A-VIP (AP2 Verified-Intent Protection) defense is proposed, which treats the signed intent as a capability grant. This is crucial reading for anyone building secure, reliable AI agent systems in production.
