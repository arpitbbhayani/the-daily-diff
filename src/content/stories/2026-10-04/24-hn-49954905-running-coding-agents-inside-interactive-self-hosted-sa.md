---
title: Running coding agents inside interactive self-hosted sandboxes
source: hn
url: https://pve-agents.sh
date: '2026-10-04'
tags:
- catchup
- coding-agents
- diff-review
- hn
- interactive-permissions
- sandboxes
- server-sent-events
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49954905'
comments: https://news.ycombinator.com/item?id=49954905
why_read: Understand how self-hosted sandboxes streamline coding agent workflows with
  real-time SSE streaming, browser-based permission handling, and granular diff review.
authors:
- ndom91
---

Running coding agents directly on developer workstations poses severe security and blast-radius risks. Moving them into dedicated, self-hosted virtualization sandboxes provides a much safer abstraction.

The pve-agents project introduces an architecture for running autonomous coding agents on existing Proxmox infrastructure. It isolates agent tool executions in ephemeral environments while streaming transcript events and tool calls over Server-Sent Events to a browser interface.

Human-in-the-loop permission prompts surface directly in the web UI rather than blocking an interactive terminal session. Developers can inspect per-file diffs in real time, apply changes to specific workspace branches, or discard the execution entirely.

Providing robust containment and clean review interfaces is essential as developer agents take on broader codebase refactoring tasks.
