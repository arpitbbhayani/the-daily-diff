---
title: Build Dynamic Systems as Graphs by Composing Local Behaviors
source: hn
url: https://www.konjugate.com/
date: '2026-08-28'
tags:
- catchup
- causal-inference
- component-based-design
- dynamic-systems
- graph-models
- hn
- simulation
- state-evolution
- time-series-analysis
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49476761'
comments: https://news.ycombinator.com/item?id=49476761
why_read: This text introduces Konjugate, a platform for modeling dynamic systems
  using a graph-based approach. Readers will learn how to build complex systems from
  local component behaviors, visually compose models, and use causal inference to
  recover structure from data for simulation and analysis.
authors:
- zenin
---

Designing complex digital twins often means wrestling with monolithic system equations. Konjugate proposes a more elegant, graph-native approach: modeling dynamic systems not as a single giant problem, but as collections of local component behaviors and their interactions.

This engine allows you to define state evolution for individual nodes and relationships, then combine those local contributions at each synchronization step. Imagine a battery and a coolant reservoir, each owning their states, with heat transfer described by a relationship between them. This is a fundamental shift in how you decompose and simulate physical systems.

What is truly compelling is its ability to recover structure from data. You can import multivariate time-series data, and its causal inference engine will propose candidate nodes and edges. This moves beyond manual model building, offering a path to data-driven system architecture for simulations.

For senior engineers building complex, interacting systems, this approach offers deep insights into scalable and manageable simulation design.
