---
authors:
- InfiniteMass
comments: https://news.ycombinator.com/item?id=49224726
date: '2026-08-08'
depth_score: 9
hn_id: '49224726'
image: /infographics/03-github-49224726.jpg
interest_score: 9
novelty_score: 10
section: systems
source: github
tags:
- catchup
- distributed-computation
- github
- logless-systems
- oblivious-compute
- state-admissibility
- truth-determination
title: Oblivious Compute determines correctness through state admissibility
url: https://github.com/ObliviousCompute
utility_score: 8
why_read: This text introduces Oblivious Compute, a novel distributed computation
  primitive. It explains how this system determines truth through state admissibility
  rather than traditional agreement and historical coordination, offering a fresh
  perspective on distributed system design.
---

Imagine a distributed system that achieves correctness without logs, without ordering messages, and without reconstructing the past. Oblivious Compute (OC) proposes exactly that, challenging decades of distributed systems orthodoxy. It rejects historical coordination in favor of 'admissibility.' 

Instead of agreeing on a single, linear history, OC allows multiple candidate states to briefly exist. Correctness is determined by admitting just one of these transient states, letting all others fall into oblivion. This is not merely an optimization; it is a paradigm shift. 

For engineers grappling with the complexity and overhead of traditional consensus protocols, OC offers a compelling, radically simplified vision for distributed state progression. It promises to redefine how we think about fault tolerance and consistency in scalable systems.