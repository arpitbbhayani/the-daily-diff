---
title: Action-Graded Harm Rubric Uncovers Agent Vulnerabilities Binary Metrics Miss
source: arxiv
url: http://arxiv.org/abs/2607.07474v1
date: '2026-07-08'
tags:
- agent-safety
- agentic-red-teaming
- arxiv
- binary-attack-metrics
- catchup
- cs.AI
- cs.CL
- cs.CR
- harm-rubric
- language-model-judges
- severity-grading
- tool-call-trajectory
arxiv_id: '2607.07474'
categories: cs.CR, cs.AI, cs.CL
why_read: This text critically examines the limitations of binary agent red-teaming
  metrics and introduces a novel action-graded harm rubric. It demonstrates how this
  detailed scoring system provides a more comprehensive understanding of agent safety
  failures by revealing nuanced vulnerabilities that binary metrics overlook.
authors:
- Harry Owiredu-Ashley
---

Red-teaming for AI agents typically reports attacks as a binary: success or failure. This simplistic view often discards the most crucial information for defenders: how harmful the resulting action actually was.

This paper introduces an action-graded harm rubric that scores an agent's tool-call trajectory on a seven-level ordinal scale (L0 to L6). This scale considers action reversibility, cross-scope reach, and privilege expansion.

This granular severity grading exposes critical cases that a binary metric hides. For example, a defense might report a zero attack-success rate but still permit an externally visible cross-scope data leak through an unfiltered tool.

Both a deterministic oracle and a panel of frontier language-model judges can compute this scale with high ordinal agreement. This provides a reusable, trace-grounded severity instrument for existing red-team logs.

To truly secure your AI agents, you must understand the nuance of harm, not just its presence or absence.
