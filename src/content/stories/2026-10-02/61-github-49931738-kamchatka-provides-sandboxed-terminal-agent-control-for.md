---
title: Kamchatka provides sandboxed terminal agent control for Linux
source: github
url: https://github.com/ljedrz/nachalnik/tree/master/kamchatka
date: '2026-10-02'
tags:
- catchup
- context-management
- github
- landlock
- sandboxing
- seccomp
- terminal-agent
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49931738'
comments: https://news.ycombinator.com/item?id=49931738
why_read: Read this to learn how Kamchatka utilizes native Linux security primitives
  like Landlock and seccomp to provide full context control and safe execution for
  terminal AI agents.
authors:
- ljedrz
---

Handing an LLM autonomous shell access on a development machine usually requires choosing between blind trust and clunky virtualization. Kamchatka takes a different route by anchoring agent isolation directly into the Linux kernel through Landlock and seccomp filters.

Instead of trusting prompt boundaries, the runtime traps system calls at the OS layer. File system mutations are locked down to explicit subtrees using Landlock, while outbound network calls are intercepted by seccomp until an explicit authorization step passes. This prevents rogue code execution and data exfiltration without requiring heavy VM spin-ups.

Beyond process isolation, the project focuses on execution transparency. Every state transition, context compaction phase, and model reasoning trace is recorded as an auditable paper trail. You get predictable, replayable sessions where the exact input window and tool invocations remain visible.

For engineers building internal CLI agents or code generation harnesses, enforcing boundaries at the kernel level is far more reliable than conversational guardrails. It turns an unpredictable generative model into a confined, auditable system process.
