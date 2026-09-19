---
title: SyntaxCue's Local System Audio Capture for Interview Suggestions
source: hn
url: https://syntaxcue.com/how-syntaxcue-captures-system-audio/
date: '2026-09-17'
tags:
- catchup
- coreaudio-api
- hn
- local-transcription
- on-device-processing
- syntaxcue
- system-audio-capture
- voice-activity-detection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49738454'
comments: https://news.ycombinator.com/item?id=49738454
why_read: This article details the technical architecture behind SyntaxCue's on-device
  audio processing, demonstrating how local transcription for real-time suggestions
  is achieved without backend interaction or recording. Readers will gain insight
  into the specific OS audio APIs and pipeline stages involved.
authors:
- zetbaur
---

Building local-first AI applications that promise privacy and low latency involves intricate system-level engineering. SyntaxCue's approach to an AI interview copilot offers a deep dive into these challenges.

The article meticulously details the pipeline: capturing system audio via platform-specific APIs like macOS's CoreAudio Process Tap, cutting the stream into utterances, transcribing locally with `whisper.cpp`, and streaming suggestions from a user's own LLM. A key insight is capturing *system audio* rather than microphone input to avoid diarization issues.

Engineers will appreciate the concrete numbers and API specifics, such as why Windows audio capture historically lagged macOS by 25 seconds. This is an essential read for anyone looking to build robust, high-performance on-device AI applications.
