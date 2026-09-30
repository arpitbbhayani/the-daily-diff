---
title: Auditing AI agent activity from the kernel with eBPF
source: github
url: https://github.com/yeet-src/agentcap
date: '2026-09-29'
tags:
- ai-agents
- catchup
- ebpf
- github
- observability
- process-monitoring
- prometheus
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49898915'
comments: https://news.ycombinator.com/item?id=49898915
why_read: Learn how to track and audit AI coding agent resource use, network calls,
  and file I/O non-intrusively using eBPF metrics. It offers a practical mental model
  for kernel-level agent observability without requiring application-level SDKs.
authors:
- r3tr0
---

AI coding agents execute shell commands, open arbitrary files, and make external network calls directly on developer machines. Most agent sandboxing tools require SDK hooks or invasive proxy configurations that break when child processes spawn under subshells.

Agentcap addresses this observability gap directly in the Linux kernel using eBPF. It monitors process executions, network socket activity, and file descriptors without requiring any SDK modifications inside the agent runtime. The tool tracks child processes spawned by commands like bash or curl, attributing every resource back to the parent agent execution context.

Captured metrics stream into Prometheus and Grafana dashboards, exposing per-agent CPU consumption, binary execution frequency, file read-write patterns, and outbound network domains. It natively fingerprints common tools such as Claude Code, OpenClaw, Codex, and Aider out of the box.

Observability for autonomous developer tooling must happen at the kernel boundary rather than relying on self-reported agent telemetry.
