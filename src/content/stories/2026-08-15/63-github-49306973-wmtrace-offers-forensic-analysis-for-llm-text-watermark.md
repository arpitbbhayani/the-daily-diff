---
title: WMTrace offers forensic analysis for LLM text watermarks and hidden channels
source: github
url: https://github.com/gtesei/llm-watermark
date: '2026-08-15'
tags:
- ai-text-detection
- catchup
- forensic-analysis
- github
- llm-watermark
- provenance-detection
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49306973'
comments: https://news.ycombinator.com/item?id=49306973
why_read: Read this to understand WMTrace, a forensic workbench for detecting and
  analyzing LLM text watermarks and hidden channels. It highlights the importance
  of scheme-aware analysis over general AI detection and clarifies what can and cannot
  be proven by watermark results.
authors:
- isacco
---

LLM text watermarking is becoming a critical component of AI provenance and misuse detection, and WMTrace provides the exact toolkit we need. This open-source project offers a forensic workbench for detecting, benchmarking, and explaining how these watermarks work, even including a live web UI for analysis.

It is not just a black-box AI detector; WMTrace is scheme-aware, meaning it understands the underlying watermarking mechanisms. This allows for calibrated statistical analysis and even shows a "keyed green-token heatmap" to visualize the watermark's presence.

This level of transparency and analytical depth is invaluable for engineers working with LLMs in production. Being able to independently verify watermarks and understand their operation is crucial for trust and responsible AI deployment, especially as major players like Anthropic adopt these techniques.

A powerful tool for applied AI and LLM infrastructure.
