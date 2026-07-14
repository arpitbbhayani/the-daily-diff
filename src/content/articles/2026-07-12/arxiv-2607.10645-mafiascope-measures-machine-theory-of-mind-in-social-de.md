---
title: MafiaScope measures machine Theory of Mind in social deduction games
source: arxiv
url: http://arxiv.org/abs/2607.10645v1
date: '2026-07-12'
tags:
- agent-beliefs
- arxiv
- calibration-error
- catchup
- counterfactual-replay
- cs.CL
- cs.MA
- cs.SI
- llm-agents
- mafia-game
- social-reasoning
- theory-of-mind
arxiv_id: '2607.10645'
categories: cs.CL, cs.MA, cs.SI
why_read: This text introduces MafiaScope, a novel testbed for measuring LLM agents'
  social reasoning and Theory of Mind in a Mafia-like game. It explains how private
  probes can reveal deeper insights into agent beliefs and their poor calibration.
authors:
- Ilia Karpov
---

Understanding what an LLM agent truly believes, beyond its public actions, is incredibly challenging. MafiaScope, an open testbed, turns the social deduction game Mafia into a measurement instrument for machine Theory of Mind.

It works by having agents privately answer probe questions after every utterance, comparing their answers to ground truth without influencing game play. In a 32-game study, DeepSeek agents showed an expected calibration error of 0.17 for stated confidence, and they over-predicted being suspected by 1.5 times.

This novel approach offers a window into LLM agent reasoning, providing crucial insights into their internal states and social intelligence. It is a powerful tool for anyone building or researching agentic AI systems.
