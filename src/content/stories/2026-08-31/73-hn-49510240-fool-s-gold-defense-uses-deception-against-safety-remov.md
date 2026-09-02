---
title: Fool's Gold defense uses deception against safety-removal attacks
source: hn
url: https://markrussinovich.github.io/fools-gold/
date: '2026-08-31'
tags:
- abliteration
- catchup
- deception
- defensive-deception
- fool's-gold
- hn
- open-weight-models
- safety-removal-attacks
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49510240'
comments: https://news.ycombinator.com/item?id=49510240
why_read: This text introduces "Fool's Gold," a novel defense mechanism for open-weight
  models that counters safety-removal attacks through strategic deception. Readers
  will learn how to poison the payoff of such attacks by training models to confidently
  generate falsified answers rather than trying to prevent the safety strip.
authors:
- gmays
---

Open-weight LLMs face a critical vulnerability: their safety alignments can be trivially stripped, turning them into tools for malicious requests. Traditional defenses often fail, but a new approach called 'Fool's Gold' offers a paradigm shift.

Instead of preventing the attack, Fool's Gold embraces defensive deception. It trains models to produce confident, fluent *falsified* answers (decoys) to hazardous prompts once their refusal capabilities are removed. This is achieved by fine-tuning the original model on a corpus of self-generated decoys, with the attack simulated *inside* the training loop.

The result is remarkable: up to 90 percent of an attacker's unlocked answers can be decoys, even on prompts the defense never explicitly trained on. This allows the model to appear compromised, but the attacker's payoff is poisoned, as they receive incorrect information. This is a brilliant trade-off, securing utility in a post-compromise scenario without impacting benign behavior.
