---
title: Natural conversations model achieves realistic speech by embracing audio artifacts
source: hn
url: https://ketsuilabs.io/blog/natural-conversations
date: '2026-09-03'
tags:
- adversarial-training
- audio-quality
- catchup
- conversational-ai
- hn
- realtime-inference
- speech-naturalness
- zero-coherence-loss
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49552629'
comments: https://news.ycombinator.com/item?id=49552629
why_read: This article details innovative techniques for improving speech synthesis
  quality in conversational AI models. Readers will understand how adversarial training
  and handling natural audio artifacts lead to highly realistic voice generation.
authors:
- Damian Krystkiewicz
---

Achieving natural, low-latency, full-duplex speech with LLMs is incredibly challenging, but MichiAI's 530M parameter model hits ~80ms latency by embracing novel engineering choices.

The team focused on adversarial training and a 'zero-coherence loss' regimen, specifically training on natural audio artifacts like breaths and mouth clicks, which many models filter out. This approach results in surprisingly realistic voice output.

Crucially, optimization for real-time streaming involved refactoring and compiling the codebase end-to-end without graph breaks. This deep dive into architecture and optimization offers vital lessons for anyone building real-time applied AI systems.
