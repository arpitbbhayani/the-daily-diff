---
title: Interlock, a runtime firewall for AI agents, assumes prompt injection already
  won
source: hn
url: https://yashwanthreddymali.com/blog/interlock-exfiltration-at-runtime/
date: '2026-09-03'
tags:
- ai-agents
- catchup
- ebpf-sensor
- exfiltration-detection
- false-positives
- hn
- interlock
- json-rpc-proxy
- prompt-injection
- runtime-firewall
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49552847'
comments: https://news.ycombinator.com/item?id=49552847
why_read: This post introduces Interlock, a runtime firewall for AI agents that operates
  on the premise that prompt injection will always succeed. Readers will gain insight
  into a different approach to securing AI agents by focusing on detecting data exfiltration
  rather than preventing injection, and the engineering challenges involved.
authors:
- Yashwanth Reddy Mali
---

Securing AI agents against data exfiltration is a critical challenge, and Interlock offers a refreshing, pragmatic approach: it assumes prompt injection already won. Instead of preventing injection, it focuses on detecting the payload leaving.

This runtime firewall monitors agent activities on two distinct planes: an MCP proxy inspects JSON-RPC wire traffic, and an eBPF sensor tracks syscalls. This dual-monitoring ensures comprehensive detection of byte overlap between sensitive data and outbound network traffic.

The system boasts impressive stats: zero exfiltration-tier false positives across 37 benign sessions, and 100 percent detection on 31 malicious cases. This focus on verifiable byte overlap, rather than session shape, significantly reduces engineer friction while providing strong guarantees.

This is a smart trade-off, prioritizing operational safety by catching the true objective of an attack, rather than getting caught in the endless cat-and-mouse game of prompt engineering.
