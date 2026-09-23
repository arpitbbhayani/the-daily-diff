---
title: A State Machine Acts as the Agent for Bounded AI Decisions
source: hn
url: https://stacktoheap.com/blog/2026/09/21/the-state-machine-is-the-agent/
date: '2026-09-21'
tags:
- agentic-systems
- ai-decisions
- bounded-judgment
- canary-deployment
- catchup
- hn
- state-machine-architecture
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49784636'
comments: https://news.ycombinator.com/item?id=49784636
why_read: This article presents an architecture where AI makes bounded decisions within
  a state machine, ensuring the application, not the model, defines the flow. Readers
  will learn how to design agentic systems that integrate AI judgment at specific
  decision points while maintaining control and safety.
authors:
- manojlds
---

Building robust AI agents often hits a wall when the model needs to be agentic without becoming "sovereign" and unpredictable. This article presents a powerful architectural pattern: integrating AI decisions within a deterministic state machine.

The core idea is simple yet profound: deterministic code owns the overall plan and facts, while the AI agent, Jev, provides bounded judgment *only* at specific decision branches. This ensures that the system maintains control, exposing only legal transitions to the AI, and waiting for real-world outcomes before proceeding.

Using a simulated canary deployment as a test case, the architecture demonstrates how to combine AI's flexible judgment with the hard safety constraints of a state machine. This is a crucial paradigm for senior engineers aiming to build reliable and scalable applied AI systems.

Gain control over your agents by putting them in their place: at the branches.
