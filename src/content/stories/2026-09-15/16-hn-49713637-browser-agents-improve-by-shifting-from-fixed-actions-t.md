---
title: Browser Agents Improve by Shifting from Fixed Actions to Code
source: hn
url: https://browser-use.com/posts/bitter-lesson-browser-agents
date: '2026-09-15'
tags:
- browser-agents
- browser-automation
- catchup
- chrome-devtools-protocol
- code-generation
- hn
- llm-performance
- state-action-space
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49713637'
comments: https://news.ycombinator.com/item?id=49713637
why_read: This article explains how designing AI browser agents evolved from rigid
  predefined actions to flexible code generation and raw browser control. Readers
  will learn why providing models with more low-level access improves robustness and
  efficiency in browser automation.
authors:
- gregpr07
---

The 'bitter lesson' of browser agents is not about making models smarter, but giving them better tools. This post reveals a powerful evolution: moving from predefined actions to letting agents write code, and eventually, directly using raw Chrome DevTools Protocol (CDP).

Initial attempts with fixed states and actions were brittle and token-heavy. The breakthrough came when agents were empowered to write JavaScript, reducing token usage by 60-66 percent while solving more tasks. The ultimate refinement involved using raw CDP, eliminating the limits of human-defined observation spaces that often missed critical UI elements.

This teaches a crucial lesson for all agent builders: the constraint is often the *harness* you build around the LLM, not the LLM itself. Giving agents more expressive action and observation spaces unlocks significantly better performance and reliability.

This is a must-read for any engineer developing intelligent agents, offering concrete architectural patterns and a deep understanding of how to overcome common limitations in agentic design by embracing a philosophy of minimal constraint.
