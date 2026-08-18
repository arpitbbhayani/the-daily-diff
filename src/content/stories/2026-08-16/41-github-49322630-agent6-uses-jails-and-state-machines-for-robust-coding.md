---
title: Agent6 uses jails and state machines for robust coding tasks
source: github
url: https://github.com/agent6-dev/agent6
date: '2026-08-16'
tags:
- catchup
- coding-agent
- github
- large-language-model-security
- llm-tool-use
- restricted-execution-environment
- state-machines
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49322630'
comments: https://news.ycombinator.com/item?id=49322630
why_read: This describes Agent6, an LLM coding agent that addresses security and task
  management challenges. Readers will learn how it uses jailed commands for safety
  and editable state machines for complex, long-running workflows.
authors:
- elesiuta
---

Running coding agents can be risky, especially when they execute arbitrary commands. Agent6 addresses this head-on by jailing model commands using advanced Linux primitives like Landlock, seccomp, and user namespaces.

This is not just basic sandboxing; it means the agent operates within a strictly read-only .git environment, with no network route off the box by default, significantly reducing supply chain risks. It is a crucial step towards production-ready agent deployments.

Beyond security, Agent6 introduces editable state machines for long-running agent workflows. This move away from opaque, open-ended agent loops means you can review, edit, resume, and replay complex tasks, providing unprecedented transparency and control over agent behavior. This is practical system design for resilient AI agents.
