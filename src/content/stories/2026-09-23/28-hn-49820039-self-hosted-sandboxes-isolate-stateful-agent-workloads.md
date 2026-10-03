---
title: Self-hosted sandboxes isolate stateful agent workloads on Kubernetes
source: hn
url: https://edera.dev/stories/how-to-use-self-hosted-ai-agent-sandboxes-on-kubernetes-with-edera
date: '2026-09-23'
tags:
- agent-sandbox
- ai-agents
- catchup
- edera
- hardware-enforced-isolation
- hn
- kubernetes
- sandboxing
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49820039'
comments: https://news.ycombinator.com/item?id=49820039
why_read: Read this to understand why AI agents require hardware-enforced workload
  isolation and how to run disposable, stateful execution sandboxes on your own infrastructure.
authors:
- Nigel Douglas
---

Running untrusted code from autonomous agents requires much stronger isolation than standard container runtimes provide. Traditional container control planes built on runc share the host kernel, leaving infrastructure vulnerable when an agent executes arbitrary scripts, installs system packages, or launches local network services.

Modern agent platforms solve this by combining stateful execution with hardware-enforced isolation. Instead of running ephemeral serverless containers, infrastructure teams are adopting dedicated Kubernetes Sandbox Custom Resource Definitions that manage stateful, singleton pod environments.

Projects like Agent-Sandbox wrap this Kubernetes foundation in a clean REST API and Model Context Protocol server. Developers and agents can spawn, inspect, snapshot, and destroy isolated workspaces on demand without needing direct cluster permissions or Custom Resource Definition management.

Treating untrusted agent workloads as disposable, hardware-isolated virtual machines on top of Kubernetes is becoming the standard pattern for enterprise agent infrastructure.
