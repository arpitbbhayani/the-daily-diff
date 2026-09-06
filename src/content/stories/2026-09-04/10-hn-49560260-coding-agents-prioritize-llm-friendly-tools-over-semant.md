---
authors:
- PX Pengcheng Xu
comments: https://news.ycombinator.com/item?id=49560260
date: '2026-09-04'
depth_score: 7
hn_id: '49560260'
image: /infographics/10-hn-49560260.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- coding-agents
- grep
- hn
- llm-friendliness
- lsp
- tool-use
title: Coding agents prioritize LLM-friendly tools over semantic capabilities
url: https://www.agentconnect.md/blog/grep-beat-lsp-harness/
utility_score: 8
why_read: This article explains why coding agents may favor simpler tools like grep
  over more advanced semantic navigation. It highlights the importance of 'LLM-friendliness'
  and proper tool interfacing for effective agent performance.
---

Coding agents frequently ignore sophisticated tools like LSP in favor of simpler ones such as grep, leading to unexpected improvements in task success. This counter-intuitive finding highlights a critical lesson in designing effective agent systems: tool capability is not the sole determinant of success.

The core insight is about "LLM-friendliness," which encompasses how much context a tool returns and the output shape the model can directly use. More precise results from LSP often come with less direct context, requiring more reasoning from the LLM, which can lead to higher token usage and lower success rates.

This is a fundamental insight for anyone building AI agents. It teaches you that context engineering and understanding how your model consumes tool outputs are paramount, often more so than the raw power of the underlying tool. Less can truly be more when it comes to feeding context to an LLM.