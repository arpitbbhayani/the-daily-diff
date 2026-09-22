---
title: Building production web applications using Lean 4 provides strong guarantees
source: github
url: https://github.com/paulbutcher/lean-todomvc-max
date: '2026-09-20'
tags:
- aws-lambda
- catchup
- github
- htmx
- lean-4
- production-webapp
- theorem-prover
- todomvc
- totality
section: systems
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 9
hn_id: '49780057'
comments: https://news.ycombinator.com/item?id=49780057
why_read: This resource demonstrates how Lean 4 enables building production-ready
  web applications with strong guarantees, including totality and verified security
  properties. Readers will learn about the practical application of Lean's theorem
  prover in a real-world web stack.
authors:
- Paul Butcher
---

This project demonstrates how a theorem-proving functional language like Lean 4 can build a complete production web application, offering guarantees rarely seen in mainstream development. It is not just a demo; it includes passwordless sign-in, SQL migrations, telemetry, and even an LLM assistant panel.

What truly stands out is the focus on formal verification. The application ensures totality, meaning no partial functions or runtime panics, with security properties proven as theorems. This showcases a paradigm where reliability and correctness are guaranteed by design, not just testing.

The inclusion of an "MCP endpoint your own agent can use" also ties into advanced AI agent interaction, showing how robust, formally verified systems can serve as reliable foundations for agentic workflows. This challenges conventional wisdom about what a "production-ready" stack can look like.

This is a deep dive into building systems with unparalleled correctness.
