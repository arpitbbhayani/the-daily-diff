---
title: pici transforms CI builds into attachable terminal sessions
source: hn
url: https://ci.pico.sh/
date: '2026-09-20'
tags:
- attachable-terminal
- bash-scripting
- build-pipelines
- catchup
- ci-debugging
- hn
- interactive-debugging
- pty
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49777744'
comments: https://news.ycombinator.com/item?id=49777744
why_read: This text identifies the inefficiencies of traditional CI log-based debugging
  and introduces 'pici', a novel CI system that enables interactive debugging by allowing
  users to attach to live build steps as terminal sessions. Readers will learn about
  a new approach to speed up CI problem resolution.
authors:
- Tomte
---

Debugging a failed CI build is often an exercise in frustration, sifting through thousands of log lines. Pici flips this paradigm, turning every build step into an attachable terminal session.

Imagine: your test fails, you attach to the live session, rerun the command, inspect the environment, and fix the issue in real-time. This is not just 're-run with SSH'; it is a fundamental shift from reactive log analysis to proactive, interactive problem-solving.

This novel approach to CI design leverages PTYs to deliver a vastly superior debugging experience, solving a persistent pain point for engineering teams and dramatically boosting developer productivity.
