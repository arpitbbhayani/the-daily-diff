---
authors:
- ThinkOffApp
comments: https://news.ycombinator.com/item?id=49435675
date: '2026-08-25'
depth_score: 8
hn_id: '49435675'
image: /infographics/01-github-49435675.jpg
interest_score: 9
novelty_score: 9
section: ai
source: github
tags:
- automotive-technology
- catchup
- chat-agents
- dashcam-integration
- github
- large-language-models
- local-ai
- offline-systems
- raspberry-pi-5
- retrieval-augmented-generation
title: CarWatch converts a vehicle into an offline chat agent
url: https://github.com/ThinkOffApp/CarWatch
utility_score: 9
why_read: This project demonstrates building an offline AI agent for a car using a
  Raspberry Pi 5 and local large language models. Readers will learn about practical
  applications for local AI and edge computing in automotive contexts.
---

Running powerful LLMs on edge devices has long been a challenge, but this project demonstrates a significant leap: deploying a 35-billion-parameter model with RAG on a Raspberry Pi 5. This is not just a demo; it is a fully offline, local car AI.

The CarWatch system uses a Qwen3.6-35B-A3B model, achieving impressive generation speeds of 3.5 tokens/second and prompt processing at over 25 tokens/second on a modest 16GB Pi. It answers questions from the car's 745-page owner's manual with page citations, showcasing effective lexical RAG without any cloud dependency.

This project is a masterclass in optimizing LLM inference for constrained environments, offering critical insights for anyone building privacy-first or offline AI agents. It pushes the boundaries of what is possible with local, applied AI.