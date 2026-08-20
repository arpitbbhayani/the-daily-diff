---
title: Shoehorn helps fit large language models to your local machine
source: hn
url: https://notactuallytreyanastasio.github.io/shoehorn/
date: '2026-08-18'
tags:
- catchup
- hardware-compatibility
- hn
- language-models
- local-inference
- memory-management
- shoehorn
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49346135'
comments: https://news.ycombinator.com/item?id=49346135
why_read: Anyone interested in running large language models locally will learn about
  Shoehorn, a tool that helps select and fit models based on their machine's hardware
  specifications and memory budget. It simplifies the process of local LLM inference,
  even for those with limited resources.
authors:
- rhgraysonii
---

Running large language models locally used to be a memory-intensive nightmare, often requiring specialized hardware or complex setup. Shoehorn changes that by offering a one-button solution to quantize models from Hugging Face and run them efficiently on your machine.

This tool leverages llama.cpp as its inference backend, allowing you to fit models to your specific hardware budget (e.g., Mac with 8GB RAM, or a GPU with 12GB VRAM). It even scans popular Hugging Face models and ranks them by quality achievable within your memory constraints.

The practical utility here is immense. It moves LLM experimentation and even some localized deployments out of the cloud and onto your desktop, making advanced AI more accessible for development and personal projects. You are no longer gated by massive GPU clusters to work with capable models.

Shoehorn simplifies complex optimization techniques into an actionable, local application.
