---
title: Kli is a coding agent with deep extension capabilities
source: github
url: https://github.com/kleisli-io/kli
date: '2026-08-29'
tags:
- catchup
- coding-agent
- extensibility
- github
- hot-patching
- lisp
- protocols
- repl
- sbcl
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49488619'
comments: https://news.ycombinator.com/item?id=49488619
why_read: Read this to understand how kli, a radically extensible Lisp coding agent,
  is architected with an "extensions all the way down" philosophy. You will learn
  about its protocol-based extension system and capabilities for hot-patching from
  the REPL.
authors:
- oumua_don17
---

This project, `kli`, is a coding agent built in Common Lisp that redefines extensibility for AI agent development. It operates within its own live SBCL image, where nearly every component, from model providers to the agent's core loop, is designed as a dynamically loadable and hot-patchable extension.

Imagine modifying an agent's behavior, tools, or even its foundational protocols without restarting the system. This "extensions all the way down" philosophy, coupled with Lisp's dynamic nature, allows for unparalleled flexibility and rapid iteration in agent design.

For senior engineers exploring advanced agent architectures, this offers a deep dive into building truly adaptive and resilient AI systems. It challenges conventional software design by showing how a highly modular, runtime-configurable approach can lead to more robust and manageable agents.

Explore a paradigm where your AI agent truly evolves with you.
