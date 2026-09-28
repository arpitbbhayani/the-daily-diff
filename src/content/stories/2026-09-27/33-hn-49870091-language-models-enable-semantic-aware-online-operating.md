---
title: Language models enable semantic-aware online operating system tuning
source: hn
url: https://arxiv.org/abs/2605.15026
date: '2026-09-27'
tags:
- catchup
- hn
- host-telemetry
- kernel-parameter-tuning
- large-language-models
- online-os-tuning
- sysctl
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49870091'
comments: https://news.ycombinator.com/item?id=49870091
why_read: Read this to understand how bounded language models can reason over OS control
  semantics to optimize live system performance safely. You will learn how dual-loop
  control and typed validation prevent service degradation while tuning dozens of
  kernel parameters.
authors:
- Georgios Liargkovas
- Mihir Nitin Joshi
- Hubertus Franke
- Kostis Kaffes
---

Black-box optimization controllers often struggle with live operating system tuning because they treat kernel knobs as independent scalar variables. When metric feedback is delayed or indirect, these algorithms can easily push a running system into a degraded state that persists even after the parameter is reverted.

TuxBot addresses this by combining structured domain knowledge with bounded language model reasoning. It translates knob schemas, runtime telemetry, action history, and past run traces into a structured decision context. A fast loop proposes immediate parameter changes, while a slower loop re-evaluates high-level search strategy. Crucially, every proposed modification passes through strict typed validation before touching kernel sysctl interfaces.

In benchmarks across 13 live workloads and 41 Linux parameters, this hybrid architecture improved stable-phase performance by 72.5 percent over default settings and 153.3 percent over non-LLM baselines. A 30-window tuning session cost only twenty cents in model API calls, demonstrating that domain-constrained LLMs can manage production infrastructure safely.

Constraining language models with typed system boundaries turns them into reliable infrastructure controllers.
