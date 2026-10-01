---
title: Benchmarking local AI agent performance on laptops and workstations
source: hn
url: https://artificialanalysis.ai/articles/aa-agentperf-local
date: '2026-09-30'
tags:
- aa-agentperf-local
- agentic-ai
- catchup
- hardware-evaluation
- hn
- inference-benchmarking
- local-ai
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49906656'
comments: https://news.ycombinator.com/item?id=49906656
why_read: Learn how AA-AgentPerf-Local evaluates local AI agent speed by replaying
  realistic multi-turn trajectories on laptops and workstations. This helps you select
  the right hardware configurations and model serving setups for running local agent
  workloads.
authors:
- theanonymousone
---

Most inference benchmarks measure raw tokens per second under static prompt lengths, which poorly reflects how autonomous agents actually consume compute. Real agent workloads involve rapidly expanding context windows and uneven generation phases.

Artificial Analysis has open-sourced AA-AgentPerf-Local, a benchmarking suite that replays recorded agent trajectories across desktop and workstation hardware. The default test harness simulates eight multi-turn tasks spanning 168 individual model invocations, pushing cumulative context up to 56,000 tokens per run.

By keeping generated token counts identical across runs and isolating tool execution delays, the framework provides reproducible comparisons across NVIDIA RTX 5090, Apple silicon, and AMD platforms. This gives teams empirical data on whether local hardware can sustain the context demands of heavy agent loops.

Evaluating local agent inference requires replaying complete trajectory graphs rather than relying on isolated synthetic batch tests.
