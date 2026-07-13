---
title: AI Agents Model Psychological Disorders with Controllable Appraisal Knobs
source: arxiv
url: http://arxiv.org/abs/2607.07753v1
date: '2026-07-08'
tags:
- affective-space
- appraisal-signals
- artificial-agents
- arxiv
- catchup
- comorbidity
- computational-psychiatry
- cs.AI
- cs.LG
- psychological-disorders
- reinforcement-learning
- treatment-modeling
arxiv_id: '2607.07753'
categories: cs.LG, cs.AI
why_read: This paper presents a novel framework for modeling seven psychological disorders
  in AI agents using dose-controllable appraisal signals. Readers will learn how this
  method reveals emergent affective structures, differential treatment responses,
  and nonadditive comorbidity interactions, offering a powerful testbed for computational
  psychiatry.
authors:
- Hari Prasad
---

Understanding and controlling the 'failure modes' of AI agents is paramount for robust systems. What if we could model complex psychological disorders within these agents, not just for diagnostics, but to understand their underlying mechanisms and potential interventions?
This paper introduces a groundbreaking approach to modeling seven distinct psychological disorders (anxiety, mania, depression, etc.) in reinforcement learning agents. Each disorder is represented as a 'single knob' that manipulates cognitive appraisal signals in an appraisal-guided PPO agent.
Across thousands of runs, every disorder exhibited a graded, monotone dose-response. Crucially, the disorders self-organized into a two-dimensional affective space where mania mirrored anxiety. The research also found that removing a 'knob' remitted certain reward distortion disorders, while avoidance disorders required a graded exposure curriculum for recovery.
These findings transferred successfully to a 3D pixel environment with a standard convolutional agent. This offers a powerful new testbed for computational psychiatry and provides deep insights into the internal dynamics and control of complex AI agents.
