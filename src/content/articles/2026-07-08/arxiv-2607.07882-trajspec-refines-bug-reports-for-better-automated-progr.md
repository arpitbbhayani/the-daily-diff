---
title: TrajSpec Refines Bug Reports for Better Automated Program Repair
source: arxiv
url: http://arxiv.org/abs/2607.07882v1
date: '2026-07-08'
tags:
- arxiv
- automated-program-repair
- bug-reports
- catchup
- cs.SE
- performance-improvement
- repository-supported-context
- specification-refinement
- swe-bench-lite
- trajectory-collection-agent
arxiv_id: '2607.07882'
categories: cs.SE
why_read: This text introduces TrajSpec, a novel approach that refines bug reports
  with trajectory-derived and repository-supported evidence. Readers will learn how
  TrajSpec significantly improves the performance of automated program repair agents
  by providing more complete and actionable task specifications.
authors:
- S M Farah Al Fahim
- Md Nakhla Rafi
- Md Ahasanuzzaman
- Zeyang Ma
- Dong Jae Kim
- Shaowei Wang
- Tse-Hsun
- Chen
---

Bug reports are the blueprints for automated program repair (APR) agents, but they often lack critical context. This means agents can struggle to understand the actual failure or generate the correct fix.

Introducing TrajSpec, a trajectory-guided approach that refines these bug report specifications. It uses an "unverified trajectory" from an agent exploring the code to gather diagnostic evidence.

This evidence is then structured into a hierarchical representation and refined through a repository-based review, removing unsupported claims and adding crucial details.

The results are impressive: on SWE-Bench Lite, TrajSpec improved Pass@1 for Mini-SWE-Agent V2 from 41.00% to 59.67% with GPT-5-mini, and from 54.67% to 64.33% with MiniMax M2.5.

Accurate, context-rich bug reports are key to unlocking the full potential of your APR agents.
