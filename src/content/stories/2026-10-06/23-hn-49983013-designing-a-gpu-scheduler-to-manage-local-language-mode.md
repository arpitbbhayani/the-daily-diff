---
title: Designing a GPU scheduler to manage local language models
source: hn
url: https://blokhin.us/notes/gridcore-gpu-scheduler/
date: '2026-10-06'
tags:
- catchup
- gpu-scheduling
- hn
- llama-cpp
- local-llms
- priority-queues
- vram-management
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49983013'
comments: https://news.ycombinator.com/item?id=49983013
why_read: Understand how to build a lightweight GPU control plane to arbitrate VRAM
  and prioritize requests across multiple concurrent local LLM applications.
authors:
- w512
---

Running multiple local LLMs on a single consumer GPU often leads to out-of-memory crashes or unmanaged latency spikes. When background indexing tasks, coding assistants, and interactive chats all fight for GPU execution time, standard setups like separate llama-server processes lack cooperative memory awareness.

GridCore solves this by acting as a specialized control plane rather than an inference engine. It sits between client applications and individual llama-server processes via an OpenAI-compatible API. The scheduler manages priority queues across interactive, background, and batch workloads while performing active VRAM accounting.

By classifying models into pinned, hot, and cold states, the system dynamically manages admission control and swaps model weights before memory limits trigger process failure. On a 16 GB card, it packs multiple models totaling 15.5 GB by budgeting residency and evicting cold tasks safely.

Treating local model orchestration as an operating system scheduling problem is far more robust than letting independent inference servers fight for memory.
