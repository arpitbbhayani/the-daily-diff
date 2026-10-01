---
title: Phonon-2 delivers full precision speech recognition accuracy at extreme compression
source: hn
url: https://www.fermionresearch.com/research/phonon-2/
date: '2026-09-30'
tags:
- automatic-speech-recognition
- catchup
- edge-computing
- hn
- model-quantization
- parakeet-tdt
- speech-recognition
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49912639'
comments: https://news.ycombinator.com/item?id=49912639
why_read: Read this to understand how Phonon-2 compresses a 2.5 GB model into 164
  MB using 2.1-bit weight quantization while matching full-precision accuracy. It
  provides a concrete look at practical Pareto-optimal efficiency in edge speech recognition.
authors:
- Fermion Research
---

Running high-accuracy speech recognition locally usually requires gigabytes of memory, making edge deployments heavy and costly. Phonon-2 changes this trade-off by compressing an entire state-of-the-art ASR model down to a 164 MB download.

Derived from NVIDIA's 2.5 GB Parakeet TDT architecture, the model compresses each encoder weight down to approximately 2.1 bits across five learned quantization levels. Despite the extreme compression, it maintains a 5.21 percent word error rate across standard benchmarks, matching full-precision teacher accuracy and transcribing an hour of audio in twenty seconds on commodity consumer hardware.

Extreme quantization is no longer just an academic curiosity; it is now a practical path to shipping fast, low-latency inference directly to end-user devices without dedicated infrastructure.
