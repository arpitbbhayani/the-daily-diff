---
title: Generating least-privilege Kubernetes security policies with runtime eBPF monitoring
source: github
url: https://github.com/kguardian-dev/kguardian
date: '2026-09-30'
tags:
- catchup
- ebpf
- github
- kubernetes-security
- least-privilege
- network-policies
- seccomp-profiles
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49905667'
comments: https://news.ycombinator.com/item?id=49905667
why_read: Read this to understand how kguardian observes pod syscalls and network
  traffic using eBPF to automatically generate accurate least-privilege security policies.
  You will learn how to automate the creation of seccomp profiles and Cilium network
  policies directly from observed workload behavior.
authors:
- mrayas
---

Writing fine-grained seccomp profiles and Kubernetes NetworkPolicies manually is notoriously painful, leading many teams to ship overly permissive configurations to production by default.

Kguardian addresses this by utilizing eBPF to monitor runtime pod traffic and system calls in place. Rather than relying on static code analysis or educated guesses, it observes the exact syscalls and network connections your containers actually execute, then automatically synthesizes minimal Kubernetes NetworkPolicy, CiliumNetworkPolicy, and seccomp profiles.

This continuous trace-driven generation approach simplifies zero-trust container sandboxing, allowing teams to enforce strict least-privilege boundaries without breaking application runtime dependencies.

Deriving security guardrails directly from verified kernel telemetry is rapidly becoming the gold standard for reliable infrastructure hardening.
