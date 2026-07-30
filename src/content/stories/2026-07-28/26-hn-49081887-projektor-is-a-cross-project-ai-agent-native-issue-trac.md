---
authors:
- tajd
comments: https://news.ycombinator.com/item?id=49081887
date: '2026-07-28'
depth_score: 7
hn_id: '49081887'
image: /infographics/26-hn-49081887.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agent
- catchup
- cloudflare-worker
- edge-computing
- hn
- issue-tracker
- projektor
- self-hosting
- wiki
title: Projektor is a cross-project AI agent-native issue tracker on Cloudflare
url: https://tajd.github.io/projektor/
utility_score: 8
why_read: Readers will learn about Projektor, an innovative issue tracker and wiki
  designed for AI coding agents. It explains how Projektor combines the benefits of
  git trackers and Jira, running efficiently on Cloudflare's edge platform with easy
  self-hosting.
---

Imagine a task management system where your AI coding agent is a first-class client, not an afterthought. Projektor, an open-source "agent-native" wiki and issue tracker, does exactly this, allowing agents to file issues, plan sprints, and search the wiki directly.

This is a significant shift from traditional tools. By designing for agents from the ground up, it rethinks how AI can genuinely integrate into engineering workflows, making agents active participants rather than just command followers.

Architecturally, it runs entirely on Cloudflare Workers, leveraging D1 for data, KV for cache, and R2 for attachments. This demonstrates a highly scalable, serverless approach to building modern developer tools.

It is a blueprint for the future of agent-driven software development.