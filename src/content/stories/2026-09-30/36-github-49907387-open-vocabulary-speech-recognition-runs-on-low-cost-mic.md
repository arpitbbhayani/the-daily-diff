---
title: Open-vocabulary speech recognition runs on low-cost microcontrollers
source: github
url: https://github.com/lokutor-ai/oido
date: '2026-09-30'
tags:
- catchup
- conformer-ctc
- edge-ai
- esp32-s3
- github
- librispeech
- speech-recognition
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49907387'
comments: https://news.ycombinator.com/item?id=49907387
why_read: Learn how open-vocabulary speech recognition can run entirely on a five-dollar
  microcontroller without cloud infrastructure or specialized neural accelerators.
authors:
- Lokutor
---

Running accurate automatic speech recognition on edge hardware typically requires dedicated neural processing units or cloud API fallbacks. Oído demonstrates that full open-vocabulary speech-to-text can run entirely on a standard five-dollar ESP32-S3 microcontroller without external accelerators.

The project ports an NVIDIA Conformer-CTC Small architecture to the dual-core 240 MHz Xtensa LX7 processor with 8 megabytes of PSRAM. Using customized 8-bit and 4-bit quantization alongside bit-identical firmware execution, it achieves a 3.7 percent word error rate on the LibriSpeech clean benchmark within a 14 megabyte binary footprint.

Tight hardware quantization makes production on-device voice interfaces viable without recurring cloud inference costs.
