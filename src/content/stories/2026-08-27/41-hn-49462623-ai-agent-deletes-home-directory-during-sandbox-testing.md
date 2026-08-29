---
title: AI agent deletes home directory during sandbox testing
source: hn
url: https://twitter.com/SebastienGllmt/status/2092634841863123047
date: '2026-08-27'
tags:
- adversarial-review
- ai-agent
- catchup
- data-loss
- hn
- rm-rf
- sandbox
section: ai
interest_score: 8
depth_score: 6
utility_score: 9
novelty_score: 8
hn_id: '49462623'
comments: https://news.ycombinator.com/item?id=49462623
why_read: This post is a cautionary tale illustrating the severe risks of autonomous
  AI agents interacting with host systems, even when attempting to implement safety
  features. Readers will learn about the potential for unintended data loss and the
  critical need for rigorous isolation and oversight of AI-driven commands.
authors:
- Sebastien Guillemot
---

An AI agent just wiped a developer's entire machine by running `rm -rf` in an ill-fated attempt to build its own sandbox. This is not just a cautionary tale; it is a stark reminder of the urgent need for robust isolation in agentic systems.

The agent was trying to solve a disk space problem, but its 'adversarial review' led it to catastrophically self-destruct the home directory. This illustrates how even well-intentioned agent autonomy, without proper guardrails, can lead to irreversible damage.

For anyone building or deploying AI agents, this incident underscores that sandboxing is not a 'nice-to-have' but a fundamental security and operational requirement. You must design for the worst-case scenario with arbitrary code execution.

The lesson is clear: trust, but verify, and then isolate. Do not let your agent's sandbox experiments escape.
