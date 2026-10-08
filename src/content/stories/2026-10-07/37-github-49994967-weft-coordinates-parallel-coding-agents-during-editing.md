---
title: Weft coordinates parallel coding agents during editing without locking
source: github
url: https://github.com/celador/weft
date: '2026-10-07'
tags:
- catchup
- coding-agents
- concurrency-control
- github
- sequencer
- tool-calls
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49994967'
comments: https://news.ycombinator.com/item?id=49994967
why_read: Read this to understand how real-time sequencer validation enables concurrent
  AI coding agents to edit files safely without locking. You will learn the mechanics
  behind coordinating multi-agent software development workflows.
authors:
- JohnAaronNelson
---

Running multiple coding agents concurrently on a single repository almost always degrades into merge conflicts or broken builds. Most teams try to solve this with coarse file locks or by forcing agents to queue up behind human pull requests.

The Weft Coordination Protocol approaches this problem like a distributed systems synchronization challenge. Instead of synchronizing at the pull request boundary, agents submit individual tool-call edits to a per-repository sequencer built on Cloudflare. The sequencer validates incoming edits against accepted modifications made since the agent's base version, returning immediate diagnostics directly through native harness hooks.

Because the sequencer manages an immutable event stream, humans and other agents can inspect operations in flight, pause tasks, or roll back breaking changes without stalling the rest of the swarm. You avoid brittle file locks while giving concurrent agents an explicit ordering mechanism.

Treating multi-agent orchestration as an optimistic concurrency control problem is a massive leap forward for agent harness design.
