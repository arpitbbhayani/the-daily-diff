---
title: Sandboxes Secure LLM Agents Better Than Permission Prompts
source: hn
url: https://philipmw.github.io/blog/2026/08/seahaven/
date: '2026-08-15'
tags:
- bubblewrap
- catchup
- hn
- llm-agents
- permission-prompts
- sandboxing
- security
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49312455'
comments: https://news.ycombinator.com/item?id=49312455
why_read: This explains why permission prompts fail to secure LLM agents and introduces
  sandboxing, exemplified by bubblewrap, as a more robust method to control an agent's
  access to the host system.
authors:
- pmw
---

Building AI agents requires more than just smart prompts; it demands secure execution. Traditional permission prompts are not just annoying, they are often ineffective, relying on human vigilance against an agent that might be too complex to fully monitor.

This article proposes a much more robust solution: sandboxing. By treating the agent harness as a "guest" in a controlled environment, leveraging tools like bubblewrap, engineers can precisely dictate what files and capabilities an agent can access. If the agent can see a file, it is because you explicitly allowed it.

This approach shifts the security paradigm from reactive prompting to proactive environmental control. It eliminates the cognitive load of constant permissions, drastically improving workflow while providing strong security guarantees. For anyone deploying coding agents or similar autonomous systems, understanding and implementing this level of environmental control is absolutely critical for safe operation.
