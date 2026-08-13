---
title: Gemma Translator enables on-device, fully offline voice translation
source: github
url: https://github.com/google-gemma/gemma-translator
date: '2026-08-11'
tags:
- catchup
- gemma
- github
- liter-tlm
- offline-ai
- on-device-inference
- raspberry-pi
- voice-translation
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49259006'
comments: https://news.ycombinator.com/item?id=49259006
why_read: This project showcases how to build a fully offline, on-device voice translator
  powered by Google's Gemma 4 and LiteRT-LM, featuring an optimized UI for small handheld
  displays.
authors:
- droidjj
---

Deploying LLMs on edge devices is a significant challenge, but the Gemma Translator project on GitHub offers a compelling blueprint. It runs Gemma 4 and LiteRT-LM as a fully offline voice translator on a Raspberry Pi 5.

This is not just a demo; it is a masterclass in optimization. The system is designed for constrained hardware, leveraging LiteRT-LM for efficient inference, and even features a retro-terminal UI optimized for small displays. All inference happens locally without any internet connection after initial setup.

For engineers tackling edge AI or looking to bring powerful language models to embedded systems, this project provides a robust example. It highlights the practical engineering required to deploy complex AI systems into environments far removed from cloud data centers.
