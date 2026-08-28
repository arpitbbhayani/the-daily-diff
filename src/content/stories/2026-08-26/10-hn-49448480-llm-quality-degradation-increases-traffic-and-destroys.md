---
title: LLM quality degradation increases traffic and destroys value, not saves money
source: hn
url: https://arxiv.org/abs/2608.23986
date: '2026-08-26'
tags:
- catchup
- customer-churn
- hn
- large-language-models
- queueing-theory
- service-degradation
- supply-chain
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 9
hn_id: '49448480'
comments: https://news.ycombinator.com/item?id=49448480
why_read: This paper re-evaluates the economic consequences of LLM service degradation
  during congestion, revealing that it increases traffic and destroys customer lifetime
  value. Readers will learn how current accounting practices are flawed and how classical
  economic and queueing models can explain these counterintuitive effects.
authors:
- Elioth Sanabria
---

LLM providers face a critical dilemma: when compute is constrained, they degrade service by routing to smaller models or truncating context. Conventional wisdom says this saves money, but a new paper argues this accounting is flawed.

The research models LLM inference as a supply chain problem, incorporating the 'shadow price of intelligence.' It reveals that degraded answers lead to retries, inflating arrivals when the system is most loaded, or churn, destroying lifetime value that rarely shows up on cost dashboards.

Surprising findings include that cheaper models can consume more capacity per satisfied answer, and reactive throttles can cross an 'ignition threshold' manufacturing more traffic than they shed. This is a must-read for anyone building or scaling LLM inference systems.
