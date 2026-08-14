---
title: Drift implements intent-driven versioning to track change reasons
source: github
url: https://github.com/lilcipherx/drift
date: '2026-08-12'
tags:
- ai-agent-development
- catchup
- cryptographic-signing
- drift
- git-extension
- github
- intent-driven-versioning
- semantic-version-control
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49277475'
comments: https://news.ycombinator.com/item?id=49277475
why_read: This text introduces Drift, a semantic version-control layer designed to
  track the intent and origin of code changes, particularly those made by AI agents.
  Readers will learn how Drift extends Git to record not just what changed, but also
  why, including the AI model, prompt, and an immutable signature.
authors:
- lilcipherx
---

Traditional Git falls short for AI coding agents because it only tracks *what* changed, not *why* the agent made that change. Drift introduces a semantic version-control layer specifically designed to capture the agent's intent, revolutionizing how we debug and audit AI-generated code.

Every commit in Drift becomes an "Intent," meticulously recording the original prompt, the specific agent model used, granular AST-level mutations, an optional snapshot of the agent's cognitive state, and a cryptographic signature. This provides unprecedented visibility into the agent's decision-making process.

This deep semantic tracking enables features like "semantic blame," allowing engineers to trace exactly which prompt or agent state led to a particular code modification. It transforms the debugging experience from guessing to understanding, significantly improving the reliability and trustworthiness of AI-generated code.

Understanding agent intent is the key to building robust and auditable AI systems.
