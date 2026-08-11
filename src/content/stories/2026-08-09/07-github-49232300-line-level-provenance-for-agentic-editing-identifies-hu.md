---
title: Line-level provenance for agentic editing identifies human vs. agent authorship
source: github
url: https://github.com/eighttrigrams/us-vs-them
date: '2026-08-09'
tags:
- agentic-editing
- ai-collaboration
- catchup
- code-ownership
- github
- text-provenance
- version-history
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49232300'
comments: https://news.ycombinator.com/item?id=49232300
why_read: This introduces a tool for determining line-level authorship (human vs.
  agent) in text, derived from version history. Readers will learn how to protect
  human-written sections from aggressive agent edits and assert ownership in collaborative
  coding environments.
authors:
- eighttrigrams
---

As AI agents become more ingrained in our development workflows, a critical question emerges: who actually wrote this line of code? This project tackles that head-on by introducing line-level provenance for agent-edited text, derived from version history, not cumbersome in-file markup.

Imagine having a system that automatically distinguishes human-authored code from AI-generated suggestions or refactorings. This is not just about ownership; it is about maintaining critical human oversight, ensuring quality, and understanding liability in increasingly autonomous coding environments. The core insight is that you do not need special comments or annotations; the existing version control system is a rich source of truth.

This method allows teams to define "sacred" human-written sections of code that agents should be hesitant to touch, or to easily identify agent-generated "slop" that is entirely up for grabs. It fundamentally changes how you think about managing agentic contributions in your codebase.

The future of engineering with AI agents depends on intelligent collaboration, and that starts with knowing who did what, precisely down to the line.
