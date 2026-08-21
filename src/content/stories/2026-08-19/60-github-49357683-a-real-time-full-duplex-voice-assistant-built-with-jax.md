---
title: A Real-Time Full-Duplex Voice Assistant Built with JAX-JS
source: github
url: https://github.com/sachinkesiraju/jax-realtime
date: '2026-08-19'
tags:
- asr
- browser-based
- catchup
- full-duplex
- github
- jax-js
- llm
- local-processing
- real-time-voice-assistant
- tts
- vad
- webgpu
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49357683'
comments: https://news.ycombinator.com/item?id=49357683
why_read: This project showcases how to build a fully local, real-time, full-duplex
  voice assistant running entirely in the browser using WebGPU and jax-js. Readers
  will learn about the architecture and component models for such a system, including
  ASR, LLM, and TTS.
authors:
- sachinkesiraju
---

Achieving a truly real-time, conversational AI agent that runs entirely on the client side is a significant technical feat. This project demonstrates a full-duplex voice assistant in the browser using WebGPU, showcasing an innovative architecture where all stages - ASR, LLM, TTS, and even optional vision - are processed locally.

The key is a carefully orchestrated cascade of small models, such as Whisper base.en for ASR and SmolLM2-360M-Instruct for the LLM, all running efficiently on a single WebGPU device via jax-js. This local execution enables features like interruptibility and background processing, providing a fluid, live conversation experience akin to "Thinking Machines" or "GPT-Live" but without server latency.

This is a powerful example of how to push AI inference to the edge, reducing latency and enhancing privacy by keeping all data in the browser. It offers a blueprint for developers aiming to build highly responsive, client-side AI applications.

Experience truly instant, private AI right in your browser.
