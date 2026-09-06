---
authors:
- Ben
comments: https://news.ycombinator.com/item?id=49563425
date: '2026-09-04'
depth_score: 8
hn_id: '49563425'
image: /infographics/74-hn-49563425.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- browser
- catchup
- compute-shaders
- hn
- llm
- local-inference
- three-js
- webgpu
title: Three-LLM runs large language models locally in the browser
url: https://ben3d.ca/blog/running-llms-in-the-browser-with-threejs
utility_score: 8
why_read: This text details how large language models can run entirely in the browser
  using Three.js and WebGPU. Readers will learn about pushing general compute capabilities
  for local LLM inference on the web.
---

Running LLMs in the browser is no longer a distant dream, thanks to an innovative approach using Three.js and WebGPU. This project showcases how small language models (like GPT-2, Qwen, and Phi) can run entirely client-side by compiling their inference graphs into Three.js TSL compute shaders.

This is a deep dive into pushing WebGPU's general compute capabilities, leveraging storage buffers, compute dispatches, workgroup memory, and atomics. It eliminates the need for server-side inference runtimes or model-specific WebAssembly binaries, enabling truly local execution.

If you are exploring client-side applied AI or want to understand advanced WebGPU applications, this offers practical insights. It is a smart way to think about bringing performant AI directly to the user's browser.