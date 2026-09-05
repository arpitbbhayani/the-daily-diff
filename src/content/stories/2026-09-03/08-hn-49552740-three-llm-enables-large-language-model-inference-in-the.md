---
title: Three-LLM enables large language model inference in the browser
source: hn
url: https://ben3d.ca/blog/running-llms-in-the-browser-with-threejs
date: '2026-09-03'
tags:
- catchup
- gpu-compute
- hn
- hugging-face
- llm-in-browser
- local-inference
- safetensors
- three.js
- tsl
- webgpu
section: ai
interest_score: 9
depth_score: 9
utility_score: 8
novelty_score: 9
hn_id: '49552740'
comments: https://news.ycombinator.com/item?id=49552740
why_read: This article introduces Three-LLM, a project that demonstrates how to run
  large language models locally in a web browser. Readers will learn about pushing
  Three.js and WebGPU's general compute capabilities for client-side LLM inference.
authors:
- Ben
---

Running LLMs directly in the browser is no longer a futuristic dream. Three-LLM is demonstrating how to achieve this today, turning model inference graphs into Three.js TSL compute shaders that execute efficiently on WebGPU.

This is a game-changer for client-side AI, enabling privacy-preserving applications and significantly reducing server-side inference costs. It showcases how deep one can push general compute capabilities within the browser, leveraging storage buffers, compute dispatches, and workgroup memory for complex models.

For backend and systems engineers, this opens up new architectural possibilities for AI-powered features, shifting compute closer to the user. It means less reliance on server infrastructure for certain LLM tasks, reducing latency and improving user experience directly.
