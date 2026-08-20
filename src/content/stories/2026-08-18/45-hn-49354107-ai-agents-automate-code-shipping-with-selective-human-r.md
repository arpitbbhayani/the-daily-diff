---
title: AI agents automate code shipping with selective human review
source: hn
url: https://goatsquadstudios.com/blog/how-i-work-with-ai-agents-autonomously
date: '2026-08-18'
tags:
- ai-agents
- automated-deployment
- catchup
- code-autonomy
- developer-workflow
- hn
- human-in-the-loop
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49354107'
comments: https://news.ycombinator.com/item?id=49354107
why_read: This article describes a system where AI agents build and deploy code overnight,
  with human review occurring the next morning. Readers will learn about managing
  agent autonomy and a novel approach to developer workflow automation.
authors:
- csgod
---

My AI agents are shipping code while I sleep, and it is not a sci-fi fantasy, it is a production reality. This engineer details a workflow where AI agents autonomously pull tickets, write code and tests, run the full suite, and even deploy to dev. The human role shifts to planning during the day and performing a single, consolidated code review for the daily production deployment in the morning.

The core insight is the "autonomy" field on tickets. This simple mechanism allows the system to differentiate between tasks an agent can complete end-to-end without human intervention (like refactoring boilerplate) and those requiring a human decision (like integrating a paid API). It is context engineering in action, applied to an entire development workflow.

This approach offers a glimpse into a truly agentic future for software engineering, where humans focus on high-level strategic decisions and review, while agents handle the repetitive execution. The question becomes not whether agents can write code, but how we engineer the systems for them to do it reliably and safely.
