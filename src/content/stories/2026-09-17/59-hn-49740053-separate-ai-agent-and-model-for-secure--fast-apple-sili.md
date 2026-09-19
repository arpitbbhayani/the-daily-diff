---
authors:
- michael_luog
comments: https://news.ycombinator.com/item?id=49740053
date: '2026-09-17'
depth_score: 8
hn_id: '49740053'
image: /infographics/59-hn-49740053.jpg
interest_score: 8
novelty_score: 7
section: ai
source: hn
tags:
- ai-coding-agent
- apple-silicon
- catchup
- gpu-performance
- hn
- sandboxing
- security
- split-architecture
- virtualization
title: Separate AI agent and model for secure, fast Apple Silicon
url: https://www.veloworkspaces.com/blog/vm-sandboxing-cost/
utility_score: 9
why_read: This article details the performance costs of sandboxing AI coding agents
  on Apple Silicon and proposes a split-architecture solution to maintain both security
  and GPU performance.
---

Sandboxing AI coding agents safely on your dev machine does not have to be slow, even on Apple Silicon. Many engineers assume a VM will hamstring local LLM performance due to GPU access issues.

This article details a clever architectural split: run the LLM inference on the host where the GPU is accessible, and the potentially dangerous agent execution environment within a lightweight VM. Communication between them is not over a slow virtual NIC, but via VirtIO-vsock, a direct hypervisor-memory channel, keeping latency minimal.

This approach resolves the security versus performance dilemma for local AI agent development. It demonstrates that with thoughtful system design, you can achieve both robust sandboxing and efficient model inference, making AI agent experimentation much safer and more practical.