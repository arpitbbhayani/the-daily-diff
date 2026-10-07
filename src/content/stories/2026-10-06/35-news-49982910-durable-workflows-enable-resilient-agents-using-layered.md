---
title: Durable workflows enable resilient agents using layered sandboxes and replay
source: news
url: https://obeli.sk/blog/announcing-obelisk-0-42/
date: '2026-10-06'
tags:
- agentic-workflows
- catchup
- deterministic-replay
- durable-execution
- news
- sandboxing
- v8-isolates
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49982910'
comments: https://news.ycombinator.com/item?id=49982910
why_read: Understand how Obelisk combines database-backed deterministic replay with
  fine-grained sandbox permissions to build resilient, stateful agent workflows.
authors:
- ibobev
---

An autonomous agent should not lose its execution state when its host process crashes or when an external API call hangs. Obelisk 0.42 approaches this challenge by running durable workflows directly against a database, recording every activity output so the engine can reconstruct execution history deterministically.

Instead of dedicating an entire virtual machine or container to an idle agent waiting on user input or model inferences, the runtime represents blocked sessions purely as database rows. Compute resources come and go on demand while state remains durable.

The runtime also isolates untrusted agent-generated code across multiple execution boundaries, spanning Wasmtime, native V8 isolates, and Firecracker microVMs. Security permissions are separated cleanly between server configuration, application grants, and individual agent deployments.

Decoupling execution runtimes from state storage is the most reliable way to make complex agentic systems production ready.
