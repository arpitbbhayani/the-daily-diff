---
title: Agentic meta-reasoning scales inference by structuring execution control
source: hn
url: https://arxiv.org/abs/2609.38147
date: '2026-10-01'
tags:
- agentic-inference
- catchup
- execution-control
- hn
- long-horizon-reasoning
- meta-reasoning
- persistent-memory
- programbench
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49925221'
comments: https://news.ycombinator.com/item?id=49925221
why_read: Read this to understand how separating task computation from a dedicated
  meta-reasoning controller improves AI performance on long-horizon problems without
  replaying full execution histories.
authors:
- Paras Dahal
- Anton Bakhtin
- Taco Cohen
- Zhengxing Chen
- Carole-Jean Wu
- Rob Fergus
- Scott Yih
- Gabriel Synnaeve
- Ruslan Salakhutdinov
- Sanjeev Arora
- Jason Weston
- Anirudh Goyal
---

Scaling agentic workflows on long-horizon problems quickly hits a wall when every turn replays the entire interaction history. Most multi-agent architectures either drown their context windows or lose track of their overarching goals after dozens of iterations.

The meta-reasoning harness separates high-level control from execution workers. Instead of letting worker agents make unstructured decisions, a central controller maintains a compact account of the run, evaluates remaining computational budgets, and dispatches sub-tasks with selective context from persistent memory.

On the ProgramBench benchmark, this structured control architecture pushed task completion from 58.0 percent to 71.5 percent on GPT-5.5, while beating Claude Code baselines. The core insight is straightforward: managing long executions is a dedicated optimization problem, not something to leave to spontaneous model generations.

Separating orchestration state from worker execution transforms fragile agent loops into reliable pipelines.
