---
title: Scaling agentic inference through structured meta-reasoning and persistent
  memory
source: hn
url: https://arxiv.org/abs/2609.38147
date: '2026-09-30'
tags:
- agentic-inference
- catchup
- execution-control
- hn
- long-horizon-reasoning
- meta-reasoning
- persistent-memory
- program-reconstruction
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49915630'
comments: https://news.ycombinator.com/item?id=49915630
why_read: Read this paper to understand how separating execution control from task-level
  computation improves agent performance on complex, long-horizon problems.
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

Scaling inference compute on long-horizon agentic tasks usually degrades performance because raw trace histories flood the context window and derail planning.

Agentic meta-reasoning solves this by decoupling the controller from execution workers. Instead of replaying full execution histories, the controller maintains a compact state of established facts, evaluates potential next steps against the remaining token budget, and dispatches targeted sub-tasks to isolated worker instances.

On the long-horizon ProgramBench benchmark, this structured meta-reasoning harness boosted GPT-5.5 accuracy from 58.0 percent to 71.5 percent, and improved proof generation consistency across the board.

The takeaway is clear: managing agent execution is a distinct cognitive task that requires dedicated control loops rather than monolithic prompt chains.
