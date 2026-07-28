---
authors:
- torakagemusha-sudo
comments: https://news.ycombinator.com/item?id=49058920
date: '2026-07-26'
depth_score: 8
hn_id: '49058920'
image: /infographics/22-github-49058920.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- agent-skills
- automatic-routing
- catchup
- github
- local-first
- model-context
- single-binary
- sqlite-indexing
title: Local-first skill router avoids large agent model context flooding
url: https://github.com/torakagemusha-sudo/torafirma-skill-router
utility_score: 9
why_read: This text introduces a local-first, single-binary router designed to efficiently
  manage large agent skill libraries. Readers will learn how it prevents model context
  flooding through automatic routing and metadata indexing.
---

Building AI agents with extensive tool use often hits a wall: the context window limit. How do you give your agent hundreds of skills without overwhelming the LLM and skyrocketing token costs?

The Skill Router offers an elegant, local-first solution. It indexes only metadata for a vast library of skills in SQLite, keeping just a tiny interface skill in the agent's active context. When a task requires a specific capability, the router performs a bounded search, selects the best match, and loads only that skill's full body on demand.

This means your agents gain access to an almost unlimited toolset without sacrificing performance or token efficiency. It is a crucial architectural pattern for scaling complex agentic systems.