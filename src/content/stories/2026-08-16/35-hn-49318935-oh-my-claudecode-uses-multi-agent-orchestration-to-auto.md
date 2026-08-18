---
title: Oh-my-claudecode uses multi-agent orchestration to automate the SDLC
source: hn
url: https://www.zhcinstitute.com/research/oh-my-claudecode-multi-agent-field-notes/
date: '2026-08-16'
tags:
- autonomous-agents
- catchup
- claude-code
- hn
- multi-agent-orchestration
- oh-my-claudecode
- sdlc
- socratic-questioning
- tmux
- zero-human-companies
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49318935'
comments: https://news.ycombinator.com/item?id=49318935
why_read: This text introduces oh-my-claudecode, a multi-agent orchestration layer
  that automates the full software development lifecycle. Readers will learn how independent
  AI agents can plan, argue, build, verify, and fix code without human intervention,
  even performing Socratic questioning to refine requirements.
authors:
- squirrel
---

This describes a multi-agent system that goes beyond simple tool calling, focusing on a truly autonomous software development lifecycle. The claim of "no human in the loop" is backed by agents independently planning, arguing, building, verifying, and fixing code.

The critical distinction is how these agents interact. Instead of one primary agent orchestrating sub-agents, Oh-My-Claudecode employs independent Claude Code instances that observe each other's output and engage in "arguments." This includes a "/deep-interview" skill that uses Socratic questioning to uncover hidden assumptions and clarify requirements *before* code is written, a function traditionally reserved for human founders or senior engineers.

This approach addresses a fundamental challenge in agentic development: robust requirement definition and error handling. Understanding how such a system manages complex dependencies and inter-agent communication for an entire SDLC provides valuable insights for applying AI agents in real-world engineering workflows.
