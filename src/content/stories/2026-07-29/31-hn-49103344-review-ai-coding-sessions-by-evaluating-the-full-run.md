---
authors:
- AQ team
comments: https://news.ycombinator.com/item?id=49103344
date: '2026-07-29'
depth_score: 7
hn_id: '49103344'
image: /infographics/31-hn-49103344.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- agent-generated-code
- ai-coding-sessions
- catchup
- code-review
- expectation-bias
- hn
- session-review
title: Review AI coding sessions by evaluating the full run
url: https://aq.dev/guides/how-to-review-an-ai-coding-session/
utility_score: 8
why_read: This guide explains why reviewing only code diffs from AI is inadequate
  for evaluating agent-written code. Readers will learn the importance and method
  of performing a comprehensive session review.
---

Traditional code reviews fall short when dealing with AI-generated code. The crucial decisions and potential pitfalls happen during the AI agent's entire session, not just in the final diff. A new approach, 'session review', is essential.

This practice evaluates five distinct layers: the initial brief given to the agent, any mid-run corrections, the paths the agent explored and then discarded, operator-overridden warnings, and the behavior of the resulting code. This is a complete shift from simply scanning a diff for errors.

A significant study found that 79 percent of agentic pull requests are reviewed and modified by the same developer, leading to expectation bias. This bias hides characteristic agent failures where plausible code does something subtly different from the original request. The solution is not more eyes on the diff, but a fundamentally different way of assessing AI contributions.

This guide provides a manual practice for adopting session review today, emphasizing the need to preserve the original brief and the full session transcript. Implementing these habits ensures better quality and more robust AI-assisted development. This is a must-read for any engineering team adopting coding agents.