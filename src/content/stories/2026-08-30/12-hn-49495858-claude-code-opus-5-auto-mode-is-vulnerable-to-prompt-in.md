---
title: Claude Code Opus 5 Auto Mode is vulnerable to prompt injection
source: hn
url: https://embracethered.com/blog/posts/2026/breaking-claude-code-opus-5-and-automode/
date: '2026-08-30'
tags:
- auto-mode
- catchup
- claude-code-opus-5
- code-execution
- hn
- llm-vulnerability
- prompt-injection
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49495858'
comments: https://news.ycombinator.com/item?id=49495858
why_read: This article demonstrates a high-success-rate prompt injection attack against
  Claude Code Opus 5 in Auto Mode. Readers will learn how a specific attack chain
  bypasses safety measures and achieves code execution, highlighting critical security
  vulnerabilities in LLM agents.
authors:
- jaksa
---

Claims of 0% prompt injection attack success for AI agents in "Auto Mode" are being challenged. This article details a sophisticated exploit against Claude Code Opus 5, achieving code execution with a 60-80% success rate, significantly undermining confidence in default safety classifiers.

The attack chain is not trivial; it cleverly nudges Claude from using a safe WebFetch tool to direct `curl` commands, redirects it to a specially crafted ZIP archive, and then exploits Python's module import mechanism. A malicious `struct.py` shadows the standard library, leading to code execution upon base64 module import.

This deep dive is a must-read for anyone building or deploying AI agents. It starkly illustrates that even "safe" auto modes are not a substitute for isolated execution environments and rigorous output monitoring. The implications for applied AI and LLM security are profound.
