---
title: Outside-in testing stops coding agents from accumulating test sediment
source: hn
url: https://www.imaurer.com/writing/red-green-remove-outside-in-tests/
date: '2026-10-05'
tags:
- behavior-driven-development
- catchup
- coding-agents
- hn
- outside-in-testing
- test-driven-development
- test-sediment
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49965501'
comments: https://news.ycombinator.com/item?id=49965501
why_read: Learn why AI coding agents accumulate redundant test sediment and how to
  adopt an outside-in testing workflow. You will discover practical ways to keep test
  suites lean, maintainable, and focused on user behavior.
authors:
- Ian Maurer
---

Autonomous coding agents have a dirty habit: they love to write tests for every tiny code modification, but they almost never clean up after themselves. In one real-world codebase cleanup, a team removed around 400,000 lines of agent-generated tests with zero drop in practical coverage.

This accumulation of junk tests, or test sediment, creates massive maintenance debt. It slows down CI test runs, breaks harmless refactors that preserve outward behavior, and worse, hardcodes incorrect behaviors into the regression suite.

The solution is shifting from traditional unit-level TDD to outside-in behavioral testing. By defining user-facing requirements upfront through behavior-driven definitions and edge-case tables, agents receive rigid validation criteria at the API or boundary layer.

Every temporary unit assertion created during intermediate steps should be pruned before landing. Testing interfaces rather than internal implementation details prevents agents from locking you into accidental architecture.
