---
title: AI watermarks unexpectedly change how agents act
source: hn
url: https://techstrong.ai/features/lasso-ai-watermarks-change-how-agents-act/
date: '2026-09-21'
tags:
- ai-agents
- ai-watermarking
- catchup
- hn
- llm-behavior
- provenance-tax
- synthid-text
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 9
hn_id: '49793563'
comments: https://news.ycombinator.com/item?id=49793563
why_read: Read this to understand a critical, unforeseen side effect of AI watermarking
  beyond simple text identification. You will learn how watermarks can subtly change
  AI agent behavior and decision-making, impacting their output and reliability.
authors:
- Steven Vaughan-Nichols
---

AI text watermarking, often seen as a simple solution for provenance, harbors a critical, hidden risk: it can fundamentally alter how AI agents make decisions. New research by Lasso Security, "The Provenance Tax," reveals that even "non-distortionary" watermarks like Google DeepMind's SynthID-Text are not neutral.

These watermarks influence token selection during generation, creating a statistical pattern that, surprisingly, also changes the agent's logic. This can manifest as altered tool choices, different arguments, and even modified responses to malicious prompts.

The implications are profound for AI system design and reliability. An agent substituting a file path or account ID due to watermarking interference could lead to severe security vulnerabilities or incorrect operations.

This finding mandates a re-evaluation of how we integrate and trust watermarked LLMs in production. Engineers must now account for this "provenance tax" when building robust AI agent systems.
