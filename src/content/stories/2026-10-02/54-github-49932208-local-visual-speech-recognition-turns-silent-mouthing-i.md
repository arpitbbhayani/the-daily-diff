---
title: Local visual speech recognition turns silent mouthing into text
source: github
url: https://github.com/amywork777/lipflow
date: '2026-10-02'
tags:
- catchup
- github
- lip-reading
- local-ai
- on-device-ml
- visual-speech-recognition
- webcam
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49932208'
comments: https://news.ycombinator.com/item?id=49932208
why_read: Learn how Lipflow processes webcam input to achieve private, real-time silent
  speech-to-text entirely on your local machine.
authors:
- amywork777
---

Silent speech recognition no longer requires specialized EMG hardware or cloud APIs. Lipflow demonstrates how to build an entirely local visual speech pipeline that types directly at your cursor just by reading your lip movements via a standard webcam.

The architecture combines live face landmark tracking, visual speech recognition running on the Apple GPU, greedy CTC previews every 0.45 seconds, and beam search language model decoding. A fast local LLM pass then cleans up phonetic ambiguities and common visual misclassifications before emitting text to the operating system.

For engineers building local multimodal interfaces or accessibility tools, this project proves that edge video inference pipelines can achieve low enough latency for interactive real-time typing without sending frames to remote servers.

Running visual speech recognition entirely on local silicon opens practical new interaction models for open-plan offices and privacy-sensitive environments.
