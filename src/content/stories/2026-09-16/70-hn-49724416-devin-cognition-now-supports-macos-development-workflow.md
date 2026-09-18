---
title: Devin Cognition now supports macOS development workflows
source: hn
url: https://devin.ai/blog/devin-gets-a-mac
date: '2026-09-16'
tags:
- application-testing
- autonomous-development
- catchup
- devin
- hn
- ios-apps
- macos-support
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49724416'
comments: https://news.ycombinator.com/item?id=49724416
why_read: Read this to understand how Devin, an autonomous AI software engineer, now
  supports macOS development. It details how this enables Devin to verify the actual
  behavior of iOS and macOS applications, not just their compilation.
authors:
- marksully
---

Devin, the autonomous software engineer, can now tackle macOS projects, a significant leap for AI agents. This is not just about compiling code; it is about reproducing bugs, investigating root causes, modifying code, and then verifying the fix within a running application.

The engineering challenge here is substantial, involving deep system design for virtualization. The team had to build robust solutions for disk snapshots to preserve session work, ensure secure networking, and create a ready-to-use development environment within AWS EC2 Mac instances. This is far more complex than simply running a VM.

This work provides critical insights into the infrastructure needed to support truly autonomous AI agents working on complex, real-world software. It highlights how cutting-edge AI requires equally cutting-edge system design to be effective.
