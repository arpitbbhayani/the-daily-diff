---
authors:
- bleugreen
comments: https://news.ycombinator.com/item?id=49349738
date: '2026-08-18'
depth_score: 8
hn_id: '49349738'
image: /infographics/60-github-49349738.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- bijective-codec
- byte-to-word-mapping
- catchup
- github
- human-readable-identifiers
- llm-tokens
- unigram
title: Unigram converts bytes into readable words that are single LLM tokens
url: https://github.com/bleugreen/unigram
utility_score: 9
why_read: This text introduces Unigram, a bijective codec that transforms bytes into
  human-readable words, each costing exactly one LLM token. Readers will learn how
  this system improves the readability of identifiers in prompts and logs without
  increasing token cost.
---

Passing arbitrary byte data or unique identifiers into LLMs often leads to token inefficiency and parsing issues. A new Rust library, Unigram, offers an incredibly clever solution: a bijective codec that transforms bytes into human-readable words, with each word guaranteed to consume exactly one LLM token.

Imagine encoding a 32-bit ID into four simple words like 'password email share building,' instead of a long, token-expensive base64 string or hexadecimal representation. This design ensures your values cost precisely as many tokens as they carry bytes, making LLM prompts significantly more efficient and robust. The space between words costs nothing.

This is not just about saving tokens; it is about making internal IDs, hashes, or binary configurations visible and interpretable within LLM contexts and logs. This utility greatly enhances debugging and prompt engineering for AI systems that need to handle structured or opaque data.

Optimize your LLM interactions with this elegant token-saving primitive.