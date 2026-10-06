---
title: Rewind VM makes execution runs deterministic functions of inputs
source: hn
url: https://fzakaria.com/2026/10/03/rewind-vm-a-flaky-build-you-only-catch-once
date: '2026-10-05'
tags:
- catchup
- deterministic-execution
- flaky-tests
- hn
- nix
- record-and-replay
- thread-scheduling
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49960501'
comments: https://news.ycombinator.com/item?id=49960501
why_read: Learn why deterministic build systems like Nix still suffer from flaky tests
  due to hidden thread scheduling inputs, and discover how Rewind VM captures execution
  state to allow exact failure replay.
authors:
- Farid Zakaria
---

Most flaky test failures in continuous integration disappear the moment a developer attempts to reproduce them locally. Build systems like Nix ensure reproducible package inputs and binary outputs, but they cannot control the nondeterministic thread scheduling of the host operating system kernel.

Rewind VM solves this concurrency dilemma by executing builds and test suites inside a KVM virtual machine where the thread schedule is captured as an explicit input. Every single execution step becomes a deterministic function of its environment. When a race condition or a deadlock occurs in CI, the exact instruction sequence and memory state can be replayed repeatedly without guesswork.

Engineers can scrub backward and forward through the execution timeline, inspect arbitrary file system states at any given moment, and even fork execution paths to test alternate thread interleavings.

Eliminating nondeterminism at the hypervisor level transforms elusive concurrency bugs into predictable, reproducible artifacts.
