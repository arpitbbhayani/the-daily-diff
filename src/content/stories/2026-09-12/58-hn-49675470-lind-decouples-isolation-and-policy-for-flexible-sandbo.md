---
title: Lind decouples isolation and policy for flexible sandboxing
source: hn
url: https://lind-project.github.io/
date: '2026-09-12'
tags:
- catchup
- hn
- intel-mpk
- isolation
- lind
- pluggable-isolation-backends
- policy
- posix-compatibility
- sandboxing
- system-call-mediation
- webassembly
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49675470'
comments: https://news.ycombinator.com/item?id=49675470
why_read: This text introduces Lind, a system designed to decouple isolation and policy
  in sandboxes. Readers will learn how this separation allows for flexible evolution
  of isolation technology and composable security policies.
authors:
- ryuuseijin
---

Safely running untrusted POSIX applications within a single process is a challenging systems problem. The Lind-project offers an elegant solution by decoupling isolation mechanisms from policy enforcement, a critical design choice for evolving security.

This architecture runs each application in an isolated compartment, leveraging pluggable backends like WebAssembly or Intel MPK. A uniform system-call mediation layer handles all interactions, allowing policies to be composed without altering the underlying isolation substrate.

This approach significantly simplifies how engineers can build secure execution environments, offering flexibility in choosing isolation technologies while maintaining consistent system-call mediation. It addresses a fundamental need in robust software architecture.

This project delivers genuine innovation in sandboxing.
