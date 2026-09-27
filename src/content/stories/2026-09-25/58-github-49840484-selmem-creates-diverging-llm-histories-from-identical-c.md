---
title: SelMem creates diverging LLM histories from identical context
source: github
url: https://github.com/jbsalles/Selmem
date: '2026-09-25'
tags:
- catchup
- github
- llm-memory
- model-divergence
- path-dependent-memory
- reconstructive-memory
- selmem
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49840484'
comments: https://news.ycombinator.com/item?id=49840484
why_read: This project introduces SelMem, a novel memory system for large language
  models. Readers will understand how SelMem enables LLMs to develop unique, path-dependent
  histories, leading to divergent behaviors from identical input streams.
authors:
- jbsalles
---

The current state of LLM memory often boils down to extending context windows or stuffing more into vector databases. But what if memory could be truly reconstructive and path-dependent, actively shaping how an LLM understands future interactions rather than just appending to a log?

SelMem, a new open-source project written in Rust, introduces precisely this paradigm. It aims for "selective, imperfect, reconstructive memory" that transforms an LLM's experience into a history that actively shapes future context, leading to divergent trajectories even for identical future inputs.

This is a profound shift for anyone building long-lived AI agents. The project's ARCHITECTURE.md and WHITEPAPER.md promise a deep dive into how such a system, involving encoding, judgment, and reconstruction phases, can fundamentally change how agents perceive and act upon their history. This could be a breakthrough for persistent, contextual AI agent design.
