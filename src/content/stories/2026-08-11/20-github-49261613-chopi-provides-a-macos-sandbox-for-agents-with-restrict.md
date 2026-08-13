---
title: Chopi provides a macOS sandbox for agents with restricted access
source: github
url: https://github.com/danra/chopi
date: '2026-08-11'
tags:
- agent-security
- catchup
- filesystem-access
- git-security
- github
- macos
- network-security
- sandbox
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49261613'
comments: https://news.ycombinator.com/item?id=49261613
why_read: Read this to learn about Chopi, a macOS tool that sandboxes agents and commands
  by confining filesystem access and restricting network connections. It provides
  a native OS solution for secure execution.
authors:
- danra
---

Running AI agents or untrusted commands safely without a full VM or container is a significant challenge. Chopi introduces a macOS sandbox that addresses this head-on, using native OS features like Seatbelt policy and network proxies to create a secure execution environment.

This project provides fine-grained control, confining filesystem access, restricting network connections to allowed hosts, and even hardening git internals. Crucially, it allows agents to propose changes to safe write targets as patches that you review outside the sandbox.

If you are working with AI agents and need to ensure their actions are controlled and auditable on your local machine, Chopi offers an extremely practical and actionable solution, directly integrating security into your agent development workflow.
