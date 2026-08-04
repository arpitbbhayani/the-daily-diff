---
title: A security tool uncovers its own recording and orchestrator failures
source: hn
url: https://agentmetry.ai/blog/dogfooding-found-five-bugs
date: '2026-08-02'
tags:
- agent-security-tool
- bugs
- catchup
- event-recording
- flight-recorder
- hn
- orchestrator
- system-reliability
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49146859'
comments: https://news.ycombinator.com/item?id=49146859
why_read: This article provides a first-hand account of how a developer's own security
  tool uncovered critical recording and orchestrator failures. Readers will gain insight
  into the challenges of building reliable monitoring systems and the value of self-auditing.
authors:
- blitzcrieg1
---

Building AI agent tooling is incredibly complex, and finding bugs in your own agent security tool 

— especially when it is meant to record agent actions 

— provides invaluable lessons. This engineer chronicles their experience with Agentmetry, a local-first flight recorder designed for AI coding agents.

The core idea is fascinating: Agentmetry records tool calls and runs sequence detection to flag potential security risks, such as credential access followed by network egress. The real insight comes from the author's dogfooding process.

One significant bug found was that the recorder stopped recording events without any indication, leading to lost data that would have been purged after seven days. This highlights critical challenges in ensuring data integrity and observability in agent systems.

This read offers practical takeaways for anyone building or managing AI agent infrastructure, emphasizing robust design for event spooling, replay, and ensuring your monitoring tools actually monitor.
