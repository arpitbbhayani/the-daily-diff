---
title: Rebuilding River's Ledger with Two Functions and Zero Downtime
source: hn
url: https://river.com/content/we-replaced-our-ledger-with-two-functions
date: '2026-08-20'
tags:
- api-design
- catchup
- data-migration
- double-entry-accounting
- event-sourcing
- hn
- ledger-rebuild
- zero-downtime-migration
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49373891'
comments: https://news.ycombinator.com/item?id=49373891
why_read: This post details how River rebuilt its financial ledger with only two functions,
  achieving a zero-downtime migration through advanced architectural patterns. Readers
  will learn about event-sourcing, narrow-waist API design, and strategies for migrating
  critical systems without interruption.
authors:
- Vivian Mathews
---

Replacing a core financial ledger with zero downtime sounds daunting, but River achieved it using a remarkably simple, two-function API. This design drastically reduces complexity and surface area for bugs in a system critical for tracking every dollar and bitcoin.

Their approach centered on double-entry event sourcing, recording all asset and liability changes as immutable events. Crucially, they enforced accounting invariants at the database schema level using a single Postgres CHECK constraint, ensuring structural correctness at the source.

The migration itself was a masterclass in risk management, utilizing a shadow mode with automated parity checks and even a reverse migration strategy. This allowed them to launch the new system live and backfill historical data afterward, decoupling failure modes. They even leveraged AI agents to build and improve their correctness tooling, shipping net fewer lines of code. This is an exceptional example of robust, simple system design and flawless execution.
