---
authors:
- Napalys Klicius
comments: https://news.ycombinator.com/item?id=49135881
date: '2026-08-01'
depth_score: 8
hn_id: '49135881'
image: /infographics/31-hn-49135881.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- copilot-code-review
- hn
- prompt-engineering
- tool-use
- workflow-design
title: Improving instructions for code review agents fixed performance regression
url: https://github.blog/ai-and-ml/github-copilot/better-tools-made-copilot-code-review-worse-heres-how-we-actually-improved-it/
utility_score: 9
why_read: This post explains how integrating better tools into an AI code review agent
  initially degraded performance until its instructions were re-written. Readers will
  learn the critical importance of aligning agent instructions with the actual workflow
  and model behavior for effective tool utilization.
---

Sometimes, giving an AI agent "better" tools makes its performance worse. GitHub's Copilot code review experienced a significant regression when its custom tool layer was swapped for more robust, shared CLI tools like grep and glob.

The surprising root cause was not the tools themselves, but the agent's instructions. The original instructions, optimized for earlier, less capable models making fewer tool calls, failed to guide the agent in effectively utilizing the new, richer toolset.

By rewriting the instructions to reflect how a human actually reviews a pull request, focusing on context and workflow rather than raw tool power, GitHub achieved a 20 percent lower average review cost while maintaining quality. This is a profound lesson in context engineering: more powerful tools are only useful if the agent is correctly instructed on how to wield them.