---
title: Rearchitecting cloudflare containers to scale dynamic agent sandboxes
source: hn
url: https://blog.cloudflare.com/faster-agent-sandboxes/
date: '2026-09-30'
tags:
- agent-sandboxes
- catchup
- cloudflare-containers
- durable-objects
- filesystem-snapshots
- hn
- runtime-scheduling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49909470'
comments: https://news.ycombinator.com/item?id=49909470
why_read: Learn how Cloudflare redesigned its container infrastructure and scheduling
  architecture to provide sub-second startup times and runtime configurability for
  autonomous AI agents.
authors:
- sidcool
---

AI agents require a fundamentally different execution model than traditional serverless functions or long-running applications. Instead of deploying containers ahead of time, agents demand disposable, stateful sandboxes created on the fly in hundreds of milliseconds.

Cloudflare rearchitected its Containers runtime to solve this specific bottleneck. By moving the scheduling policy directly into application code and coupling each sandbox to a persistent Durable Object controller, median container startup dropped from over four seconds down to 648 milliseconds.

This architecture removes intermediary management layers and allows the controller to adjust instance images, snapshot filesystems, and govern outbound network egress at runtime. Agents can now safely execute untrusted code without paying a massive latency tax on every interaction.

Fast startup times transform agent sandboxes from a heavyweight infrastructure burden into an ephemeral primitive.
