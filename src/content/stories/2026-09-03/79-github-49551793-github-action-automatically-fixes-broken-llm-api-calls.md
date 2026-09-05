---
title: GitHub Action automatically fixes broken LLM API calls
source: github
url: https://github.com/MarkMoneyMan/Claude-api-goat
date: '2026-09-03'
tags:
- api-changes
- autofixing
- catchup
- code-scanning
- continuous-integration
- github
- github-action
- llm-api
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49551793'
comments: https://news.ycombinator.com/item?id=49551793
why_read: This tool helps developers prevent production errors from rapidly changing
  LLM APIs by automatically scanning and fixing breaking changes in CI. It also highlights
  an innovative approach to keeping rule sets current using LLMs.
authors:
- MarkMoneyMan
---

Staying on top of breaking changes in fast-moving LLM APIs like Claude and OpenAI is a massive headache for engineering teams. One smart project, Claude-api-guard, tackles this by integrating into CI to catch these issues before they hit production.

What makes this particularly clever is its meta-approach: it does not rely on manual rule updates. Instead, it uses an LLM to parse official release notes directly, automatically extracting new breaking changes and updating its own rule set. This is applied AI in action, improving developer productivity and reducing maintenance overhead.

This technique is a blueprint for how engineering teams can automate keeping up with external dependencies that change quickly. It demonstrates a novel way to use AI to solve problems in maintaining complex software systems.
