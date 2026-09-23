---
title: MicroLLMs run privately and fast in the browser via WebGPU
source: github
url: https://github.com/robss2020/microllm-lab
date: '2026-09-21'
tags:
- catchup
- cost-effective
- github
- in-browser
- local-execution
- low-latency
- micro-llm
- privacy
- q4
- webgpu
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49791343'
comments: https://news.ycombinator.com/item?id=49791343
why_read: This project showcases how to run tiny LLMs locally in a web browser using
  WebGPU, demonstrating the benefits of on-device inference for privacy, latency,
  and cost efficiency compared to cloud models.
authors:
- robss2020
---

Running LLMs directly in the browser at 3000 tokens/second is no longer a pipe dream. This project demonstrates how tiny, quantized 135M-class models can achieve remarkable inference speeds client-side using WebGPU.

Forget API keys, cold starts, and network latency. This approach enables truly privacy-preserving AI applications, as prompts never leave the user's machine. The cost savings are also substantial compared to constant API calls, making local inference a game-changer for many use cases.

It is a powerful proof of concept for local-first AI, leveraging WebGPU to unlock GPU acceleration directly within the browser, proving that efficient, powerful LLM infrastructure can run anywhere.
