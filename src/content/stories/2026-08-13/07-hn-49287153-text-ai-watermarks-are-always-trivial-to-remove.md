---
title: Text AI watermarks are always trivial to remove
source: hn
url: https://www.seangoedecke.com/text-ai-watermarks/
date: '2026-08-13'
tags:
- ai-watermarking
- catchup
- eu-ai-act
- hn
- steganography
- text-watermarking
- unicode-trickery
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49287153'
comments: https://news.ycombinator.com/item?id=49287153
why_read: Readers will learn why AI text watermarks are inherently difficult to implement
  effectively and why they will likely be trivial to remove. It discusses the challenges
  compared to image watermarking and mentions techniques like steganography and Unicode
  trickery.
authors:
- pseudolus
---

Text AI watermarks are facing an uphill battle against inherent limitations, and this article makes a compelling case for why they will always be trivial to bypass. The core problem lies in text's compressed nature; unlike images, there is little 'noise' where a hidden signature can reside without altering the content perceivably.

The piece highlights that any changes to text for watermarking purposes are usually noticeable to a human. This creates a steganography challenge: how do you embed a signature without compromising the quality or meaning of the generated output? It means relying on subtle, statistically improbable word choices, which are inherently fragile.

Understanding these fundamental limitations is crucial for engineers working on AI systems. It implies that relying solely on watermarks for AI content detection or provenance is likely a losing game, pushing us towards other verification methods.
