---
title: Preview the effect of agent-generated Postgres writes
source: github
url: https://github.com/polycore/pg-dry-run
date: '2026-08-31'
tags:
- catchup
- data-safety
- dry-run
- github
- postgres-writes
- sql-agents
- sql-preview
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49510746'
comments: https://news.ycombinator.com/item?id=49510746
why_read: This tool allows developers to preview the effects of agent-generated Postgres
  INSERT, UPDATE, and DELETE statements before they run. It helps prevent unintended
  data changes by providing row-level proposals for inspection and approval, enhancing
  data safety with AI agents.
authors:
- anarkafkas
---

Integrating AI agents with production databases introduces significant safety concerns. How can you trust an agent-generated UPDATE statement without seeing its impact first?

pg-dry-run offers a brilliant solution for Postgres. It transforms agent-generated INSERT, UPDATE, and DELETE statements into row-level proposals. This allows you to inspect and approve changes before they are committed, preventing unintended data modifications.

Crucially, it uses xmin checks to ensure concurrency safety, making sure the dry-run reflects the state of data you expect. This is a game-changer for building reliable AI-powered applications that interact with critical data stores.

You cannot afford to skip this layer of transactional safety.
