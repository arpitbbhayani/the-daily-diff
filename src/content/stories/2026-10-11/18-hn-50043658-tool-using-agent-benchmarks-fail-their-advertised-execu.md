---
title: Tool-using agent benchmarks fail their advertised executable contracts
source: hn
url: https://arxiv.org/abs/2609.37315
date: '2026-10-11'
tags:
- agent-benchmarks
- agentdojo
- catchup
- executable-contracts
- hn
- software-auditing
- tool-using-agents
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '50043658'
comments: https://news.ycombinator.com/item?id=50043658
why_read: Read this to understand how hidden defects in simulated tool environments
  distort agent benchmark evaluations. You will learn how to audit tool implementations
  against executable contracts to identify false scoring assumptions.
authors:
- Rohith Reddy Bellibatlu
- Zichong Wang
- Wenbin Zhang
---

Most agent benchmarks evaluate model decisions against simulated tools that quietly violate their own interface contracts.

When researchers audited 34 mutating tools across four major agent benchmarks, they confirmed seven tool defects where the underlying code diverged from advertised schemas. In AgentDojo alone, at least 5 out of 25 mutating tools failed to write the state expected by their contracts.

This creates a serious evaluation problem for engineering teams. A model can pick the correct tool and supply valid arguments, yet fail a task because the simulated backend dropped mutations or wrote corrupted state. Even worse, defective tools pass silently because standard benchmark evaluators score final outcomes rather than verifying contract invariants at runtime.

Static analysis caught 14 of 17 confirmed failure sites before executing a single test case. Tracing state provenance showed that multiple benchmark verdicts were derived entirely from state that a broken tool should have written, but never did.

Before you trust leaderboards for tool-calling agents, verify the tools against executable contracts rather than trusting mock implementations.
