---
title: Natively managing context as files improves language model efficiency
source: hn
url: https://arxiv.org/abs/2609.37725
date: '2026-09-30'
tags:
- catchup
- context-language-models
- context-management
- hn
- multi-agent-systems
- online-reinforcement-learning
- suffix-cache-reuse
section: ai
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49908543'
comments: https://news.ycombinator.com/item?id=49908543
why_read: Learn how treating context as an editable file enables language models to
  natively manage their own memory, significantly reducing compute costs while improving
  accuracy.
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

Treating the prompt window as a static append-only buffer creates massive inefficiencies in multi-turn agents. A new architectural paradigm called Context Language Models shifts context management from external orchestration harnesses directly into the model by treating context as a mutable file that the model can arbitrarily update.

By letting the model decide what information to retain, rewrite, or discard, the system avoids context bloat and distraction. In evaluations across long-horizon agent benchmarks, this intrinsic file-based context management delivered 11.4 percent higher accuracy with 21.5 percent fewer FLOPs on BrowseComp-Plus, and improved 24-hour multi-repository agent swarm tasks by 65 percent using the same compute budget.

The architecture also enables co-designed server optimizations. Suffix Cache Reuse reduces server-side serving compute by 35 percent by retaining invariant suffix tokens across iterative context updates.

Context engineering works best when the model itself actively manages its working memory rather than relying on brittle heuristic scrapers.
