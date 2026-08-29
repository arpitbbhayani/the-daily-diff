---
title: F*ckMark Prioritizes Visible Text Invariance in Watermarking Research
source: hn
url: https://mark.q1z.org
date: '2026-08-27'
tags:
- catchup
- cli-tool
- hn
- open-source
- sha-256-verification
- text-watermarking
- visible-invariance
section: ai
interest_score: 9
depth_score: 8
utility_score: 9
novelty_score: 9
hn_id: '49468317'
comments: https://news.ycombinator.com/item?id=49468317
why_read: This text introduces F*ckMark, a research instrument for statistical text
  watermarking that adheres to the strict principle of visible text invariance. Readers
  will learn about a tool designed to ensure context survives and evidence remains
  without altering user-visible characters.
authors:
- byte1
---

A new research instrument called 'F*ckMark' has publicly demonstrated the ability to completely strip Google's SynthID watermark from text, reducing its detectability from 188/192 to 0/192. Crucially, this is achieved without any visible changes to the text itself.

This breakthrough challenges the assumptions many engineers hold about the robustness of current AI text watermarking techniques. For anyone building systems that rely on identifying LLM-generated content, this is a wake-up call to re-evaluate the reliability of provenance signals.

Understanding the mechanisms behind such adversarial attacks is vital. It forces a deeper look into the cryptographic and statistical underpinnings of watermarks, and how to design more resilient attestation methods for AI output. This has significant implications for digital forensics, content authenticity, and the broader security landscape of applied AI.
