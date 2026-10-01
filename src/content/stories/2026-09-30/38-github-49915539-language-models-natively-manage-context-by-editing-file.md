---
title: Language models natively manage context by editing files
source: github
url: https://github.com/facebookresearch/context-language-models
date: '2026-09-30'
tags:
- catchup
- context-language-models
- context-management
- file-based-context
- github
- multi-agent-systems
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49915539'
comments: https://news.ycombinator.com/item?id=49915539
why_read: Learn how treating context as an editable file allows language models to
  natively manage their memory, achieving superior performance with lower compute
  across complex benchmarks.
authors:
- Rulin Shao
- Shannon Zejiang Shen
- Junjie Oscar Yin
- Yuetai Li
- Minheng Wang
- Hamish Ivison
- Radha Poovendran
- Nathan Lambert
- Teng Xiao
- Mike Lewis
- Wen-tau Yih
- Luke Zettlemoyer
- Pang Wei Koh
---

Appending raw chat logs to an LLM context window is fundamentally inefficient for long-horizon agent tasks. Context Language Models treat the context window not as an append-only transcript, but as a mutable file that the model can inspect, edit, and reorganize on the fly.

By giving models direct file-editing actions over their active context, the system learns to prune irrelevant tool output and maintain only critical state. In multi-agent environments, this design allows separate agents to share or isolate state simply by mounting context files.

Benchmark results show a 59 percent reduction in compute FLOPs on long-horizon benchmarks while simultaneously boosting benchmark accuracy by over 11 percent. Suffix cache reuse techniques further cut attention compute by avoiding full prompt reprocessing on minor edits.

Treating context as mutable state transforms agent memory from an append-only log into an active working workspace.
