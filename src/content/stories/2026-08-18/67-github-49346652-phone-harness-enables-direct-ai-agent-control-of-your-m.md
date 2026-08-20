---
title: Phone Harness enables direct AI agent control of your mobile device
source: github
url: https://github.com/ShawnPana/phone-harness
date: '2026-08-18'
tags:
- ai-agent
- catchup
- device-control
- github
- llm-control
- mobile-automation
- no-jailbreak
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49346652'
comments: https://news.ycombinator.com/item?id=49346652
why_read: This text introduces Phone Harness, a tool for connecting AI agents like
  Claude Code or Codex directly to real phones without jailbreaking or complex setups.
  Readers will learn how a thin harness enables seamless control via Mac's iPhone
  Mirroring or Android's adb.
authors:
- Shawn Pana
---

Imagine your AI agent not just coding, but truly interacting with your phone. A new open-source project, Phone-harness, allows LLMs like Claude Code or Codex to control iPhones and Android devices directly.

This is not another theoretical paper; it is a practical system. For iPhone, it uses macOS iPhone Mirroring with Vision-framework OCR for eyes and HID-level CGEvents for hands. Android leverages ADB for screen captures and its accessibility tree for precise text and box detection.

The brilliant part is its simplicity: no jailbreak, no Xcode, no WebDriverAgent, and no app installation on the phone itself. The Mac serves as the entire transport layer. This project provides a robust framework for building and experimenting with agents that require mobile UI interaction, offering a deep dive into system integration for real-world applied AI scenarios.
