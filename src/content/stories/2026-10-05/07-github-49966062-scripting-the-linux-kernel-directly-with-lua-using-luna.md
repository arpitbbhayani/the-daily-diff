---
title: Scripting the Linux kernel directly with Lua using Lunatik
source: github
url: https://luainkernel.github.io/lunatik/
date: '2026-10-05'
tags:
- catchup
- ebpf
- github
- kprobes
- linux-kernel
- lua
- lunatik
- netfilter
section: systems
is_news: false
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49966062'
comments: https://news.ycombinator.com/item?id=49966062
why_read: Understand how Lunatik brings Lua scripting into the Linux kernel to interact
  directly with core subsystems like eBPF, netfilter, and scheduler extensions. It
  provides an efficient alternative to writing and compiling full C kernel modules
  for tracing and device management.
authors:
- lneto
image: /infographics/07-github-49966062.jpg
---

Running Lua directly inside the Linux kernel offers an intriguing middle ground between rigid C modules and constrained eBPF programs.

Lunatik 5.0 embeds a Lua runtime into kernel space, exposing interfaces to Netfilter, kprobes, sched_ext, and eBPF maps. Instead of compiling standalone kernel modules or dealing with verifier limitations in complex eBPF programs, engineers can script kernel-level telemetry, scheduling policies, and packet routing in high-level Lua code.

The project introduces structured channels between kernel threads, RCU table support, and user-space tooling to load and manage scripts dynamically. This setup makes rapid prototyping of kernel subsystems feasible without risking repeated compilation cycles or continuous kernel rebuilding.

Programmability in the kernel is moving well beyond static tracing and into dynamic, scriptable runtime control.
