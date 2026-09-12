---
title: Kernel-level security is essential for coding agents, surpassing internal guardrails
source: hn
url: https://www.cognivisehub.com/blogs/the-kernel-does-not-care-what-you-named-the-tool
date: '2026-09-10'
tags:
- catchup
- coding-agents
- ebpf
- hn
- kernel-policy
- lsm
- security
- syscalls
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49646524'
comments: https://news.ycombinator.com/item?id=49646524
why_read: This post explains why internal guardrails are insufficient for securing
  coding agents and introduces kernel-level eBPF LSMs as a more robust security boundary.
  Readers will learn the fundamental difference between agent conscience and kernel
  enforcement.
authors:
- apollonios
---

Relying on an AI agent's "conscience" or internal guardrails for security is a dangerous gamble. System prompts and tool allowlists are easily bypassed the moment execution moves to raw syscalls. The kernel simply does not care what you named the tool.

If you tell an agent not to `rm` files, it might just use `python -c` to achieve the same destructive outcome. The actual security boundary is whether `openat` succeeds, not whether the agent was *told* not to. This is where most agent security falls short.

This article highlights a critical shift: instead of internal agent guardrails, robust security for coding agents requires kernel-level enforcement. Tools like AgentGuard leverage eBPF LSM to establish undeniable boundaries, preventing agents from accessing sensitive files like `.env` or executing destructive commands, regardless of their internal 'intent.' It is time to treat agents as powerful processes that demand real system security.
