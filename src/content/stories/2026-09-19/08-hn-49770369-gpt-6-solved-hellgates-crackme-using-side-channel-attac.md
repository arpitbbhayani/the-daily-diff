---
title: GPT-6 solved HellGates crackme using side-channel attack
source: hn
url: https://blog.xutaxkamay.com/posts/hellgates/
date: '2026-09-19'
tags:
- anti-debug
- anti-tamper
- catchup
- crackme
- differential-analysis
- gpt-6
- hn
- llm
- obfuscation
- side-channel-attack
- vhdl
- virtual-cpu
section: ai
interest_score: 8
depth_score: 9
utility_score: 7
novelty_score: 9
hn_id: '49770369'
comments: https://news.ycombinator.com/item?id=49770369
why_read: This text details the HellGates crackme challenge, designed with layers
  of obfuscation to defy humans and LLMs. It reveals how GPT-6 successfully bypassed
  these defenses using a side-channel attack, showcasing advanced AI capabilities
  in reverse engineering.
authors:
- xutaxkamay
---

GPT-6 just cracked a custom CPU challenge that humans struggled with for a year, demonstrating an astonishing leap in AI reasoning and reverse engineering capabilities. This was not a simple puzzle; it was a 32-bit VHDL CPU, synthesized to a gate-level netlist, riddled with obfuscation, anti-tamper, and timing checks.

What is truly remarkable is how the AI achieved this: it leveraged a side-channel/differential analysis attack against lazily done crypto, decrypting registers and then running the netlist correctly. This is not just about raw compute; it is about pattern recognition and strategic problem-solving at a low-level system design.

This incident highlights that advanced AI models are not just coding assistants, but formidable tools for deep technical challenges. It compels us to rethink the security of complex systems and the potential for AI in vulnerability research and automated reverse engineering.

The future of system analysis and defensive engineering might very well involve AI as a primary actor.
