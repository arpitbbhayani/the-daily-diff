---
authors:
- Nehanth
comments: https://news.ycombinator.com/item?id=49602451
date: '2026-09-07'
depth_score: 8
hn_id: '49602451'
image: /infographics/32-github-49602451.jpg
interest_score: 8
novelty_score: 9
section: ai
source: github
tags:
- browser-tabs
- catchup
- github
- llm-inference
- peer-to-peer
- webgpu
- webrtc
title: Distributing large language models across peer devices in browser tabs
url: https://github.com/Nehanth/swarmllm
utility_score: 8
why_read: Read this to understand how large language models can be distributed for
  inference across multiple devices using browser technologies like WebGPU and WebRTC.
  It showcases a novel approach to collaborative local computation for LLMs.
---

Running large language models on edge devices is a huge challenge, but what about running them across multiple browser tabs, peer-to-peer? This project, SwarmLLM, implements just that, distributing a Qwen 3.8 27B model over devices in a room using WebGPU and WebRTC.

The core innovation here is not just client-side inference, but *distributed* client-side inference, where each device contributes a "slice" of the model. This is a genuinely novel approach to resource utilization, making LLMs accessible even on less powerful individual devices by pooling their computational power.

It details a from-scratch WebGPU engine and a WebRTC runtime for this model splitting and communication. This offers a highly practical, production-ready blueprint for distributed browser-based AI, solving infrastructure bottlenecks related to server-side costs and latency. This could change how we think about deploying large models.