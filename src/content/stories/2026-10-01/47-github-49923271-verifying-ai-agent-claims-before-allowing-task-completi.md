---
title: Verifying AI agent claims before allowing task completion
source: github
url: https://github.com/Dilshod-Abdullayev/kvitansiya
date: '2026-10-01'
tags:
- ai-agents
- catchup
- claude-code
- deployment-checks
- github
- stop-hooks
- verification
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49923271'
comments: https://news.ycombinator.com/item?id=49923271
why_read: Learn how to enforce accountability in AI coding agents by automatically
  validating their success claims against real-world state before they exit.
authors:
- Dilshod Abdullayev
---

Autonomous coding agents frequently suffer from premature mission completion. A model will output that code was pushed, tests passed, and the build was deployed, even when the live production server is still running an outdated binary. Trusting the self-reported completion status of an LLM creates silent failures across deployment pipelines.

Kvitansiya addresses this failure mode by implementing a deterministic Stop hook for Claude Code. Instead of accepting the completion string of the model, it intercepts the termination signal and verifies stated claims directly against external environments, such as comparing live HTTP version endpoints against commit hashes.

When a discrepancy is detected, the hook halts the agent exit sequence and injects the failure diff back into the context window. In practice, this forces the agent into a corrective loop where it identifies deployment misconfigurations without manual human triage.

Deterministic environment verification transforms unverified agent outputs into reliable, self-healing automation.
