---
title: Hill climbing with evals cuts AI feature error rates
source: hn
url: https://hex.tech/blog/we-used-evals-to-improve-ai-feature/
date: '2026-10-09'
tags:
- catchup
- coding-agents
- evals
- hill-climbing
- hn
- model-harness
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50014465'
comments: https://news.ycombinator.com/item?id=50014465
why_read: Read this to understand how systematic eval-driven hill climbing can reduce
  AI feature error rates more effectively than prompt engineering alone. It provides
  practical insights into architecting model harnesses and automated feedback loops
  for production AI.
authors:
- David Wilson
---

Prompt engineering hits a hard ceiling when deploying non-deterministic model features to production. When Hex developed Quick Edits to adjust charts using small models, they found that writing prompts yielded diminishing returns. Instead, they built an automated eval pipeline containing 1,800 test cases and used automated hill-climbing to test hundreds of code adjustments.

This systematic iteration dropped their wrong-edit error rate from 21 percent down to 3 percent. The most instructive takeaway was where those quality improvements originated: the vast majority came from tightening the orchestration harness around the model rather than rewriting prompts or selecting heavier weights.

Small models like Claude Haiku deliver twenty times faster responses at a fraction of the cost, provided the application boundary handles routing and context boundaries cleanly. If a user asks for complex application state modifications, the small model hands off the work to a full agent harness rather than struggling with unbounded state.

Reliable AI engineering is not about prompt magic; it is about rigorous harness design and continuous automated evaluation.
