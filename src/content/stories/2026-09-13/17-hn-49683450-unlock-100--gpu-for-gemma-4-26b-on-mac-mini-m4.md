---
title: Unlock 100% GPU for Gemma 4 26B on Mac mini M4
source: hn
url: https://mac-mini-m4-doc.masterfabric.co/
date: '2026-09-13'
tags:
- catchup
- gemma4-26b
- gpu-acceleration
- hn
- mac-mini-m4
- ollama
- sysctl
- unified-memory
- wired-limit
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49683450'
comments: https://news.ycombinator.com/item?id=49683450
why_read: Read this to learn how to significantly boost Gemma 4 26B performance on
  a Mac mini M4. It explains how to optimize GPU utilization by adjusting macOS's
  Metal wired-memory ceiling.
authors:
- gurkandev
---

Running large language models locally on Apple Silicon devices can be tricky, especially when you are trying to squeeze every bit of performance from the GPU. Many engineers experience models spilling over to the CPU despite having ample unified memory.

The critical insight here is often not about the model itself, but about operating system-level memory management. On a 24 GB Mac Mini M4, the default `iogpu.wired_limit_mb` ceiling on macOS can restrict how much unified memory the GPU actually pins. Overriding this single setting can shift your Gemma 4 26B inference from 66 percent CPU to a full 100 percent GPU.

This simple `sysctl` adjustment can double your token generation speed, illustrating that deep performance gains often come from understanding the subtle interplay between software, hardware, and the underlying OS. It is a vital tip for anyone doing local LLM development.
