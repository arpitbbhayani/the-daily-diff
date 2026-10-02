---
title: Engrams orchestrates AI coding agents using Firecracker microVM snapshots
source: github
url: https://github.com/cortexapps/engrams
date: '2026-10-01'
tags:
- ai-coding-agents
- catchup
- firecracker
- github
- microvm-snapshots
- oci-images
- sandboxing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49923064'
comments: https://news.ycombinator.com/item?id=49923064
why_read: Understand how Engrams provides a self-hosted execution environment for
  AI coding agents by leveraging Firecracker microVM snapshots for fast pause and
  resume.
authors:
- cortexapps
image: /infographics/09-github-49923064.jpg
---

Running autonomous AI coding agents in production presents a massive infrastructure headache around isolation and compute efficiency. Giving LLMs raw shell access on shared nodes is a security liability, while provisioning persistent full virtual machines for idle agent sessions burns through infrastructure budgets.

Engrams implements an open-source sandbox architecture using Firecracker microVMs to isolate each autonomous agent. Each session packages a container image alongside standard harnesses like Claude Code or Codex, booting inside a dedicated microVM within your private cloud.

The real leverage comes from lifecycle management. When an agent is awaiting human input or tool completions, the orchestrator snapshots the entire VM memory state to disk and halts CPU execution. When a new prompt arrives, the VM restores instantaneously from the snapshot with its full shell state and directory tree intact.

Pairing snapshot-capable microVMs with agent harnesses provides an isolated, cost-effective foundation for running coding agents at scale.
