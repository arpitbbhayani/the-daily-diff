---
title: Converting speech directly into function calls without transcriptions
source: hn
url: https://huggingface.co/neuphonic/neudecide
date: '2026-10-09'
tags:
- catchup
- edge-computing
- function-calling
- hn
- onnx-runtime
- speech-to-intent
- voice-action-model
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '50019294'
comments: https://news.ycombinator.com/item?id=50019294
why_read: Understand how NeuDecide maps voice commands directly to function calls
  on edge devices without intermediate text transcripts. You will learn how schema-driven
  tool calling can operate completely locally with minimal compute overhead.
authors:
- Neuphonic
---

Traditional voice-controlled systems chain an automatic speech recognition model to a language model before generating a structured tool invocation. NeuDecide eliminates that intermediate transcription pipeline entirely by mapping raw audio directly into executable JSON function calls within a 43 megabyte footprint.

The architecture accepts an arbitrary list of tool schemas at runtime, meaning that developers can reconfigure capabilities dynamically without retraining. Because the runtime executes via ONNX on a single CPU thread without requiring GPU acceleration or active network connectivity, inference latency drops significantly compared to standard multi-stage pipelines.

Decoupling intent recognition from full verbatim transcription avoids common error cascades where minor phonetic transcription mistakes derail downstream tool matching. For engineers building local robotics or embedded edge agents, this shift demonstrates that specialized, tiny models can outperform heavy general-purpose stacks on narrow operational tasks.

Direct audio to action mappings prove that speech interfaces do not need bulky transcription pipelines to execute reliable decisions.
