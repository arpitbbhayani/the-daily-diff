---
title: Programmable ebpf loops let distributed agents filter events efficiently
source: hn
url: https://comma.surf/blog/agent-programmable-event-loops
date: '2026-10-01'
tags:
- ai-agents
- catchup
- distributed-systems
- ebpf
- event-loops
- hn
- salix
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49920370'
comments: https://news.ycombinator.com/item?id=49920370
why_read: Learn how using programmable eBPF outer loops prevents expensive model polling
  by filtering asynchronous event streams before waking agent loops.
authors:
- losfair
---

Standard agent harnesses waste vast amounts of compute on polling. When an agent is tasked with waiting for a webhook or monitoring a repository, invoking an LLM on every heartbeat burns unnecessary context tokens when nothing has changed.

Salix solves this by introducing a programmable outer loop powered by eBPF. Instead of repeatedly running the heavy model loop, the agent compiles and loads tiny C programs directly into the event stream to evaluate incoming events locally and wake up the main agent harness only when actionable criteria are met.

Separating cheap edge evaluation from expensive model reasoning is an elegant architectural pattern for scalable, always-on agent infrastructure.
