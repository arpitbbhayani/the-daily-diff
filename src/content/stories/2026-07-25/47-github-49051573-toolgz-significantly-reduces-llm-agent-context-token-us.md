---
authors:
- dperussina
comments: https://news.ycombinator.com/item?id=49051573
date: '2026-07-25'
depth_score: 7
hn_id: '49051573'
image: /infographics/47-hn-49051573.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- catchup
- github
- json-schema
- llm-agents
- token-compression
- tool-definitions
- toolgz
title: Toolgz significantly reduces LLM agent context token usage for tool definitions
url: https://github.com/dperussina/toolgz
utility_score: 9
why_read: This tool helps reduce the large token consumption of LLM agents by compressing
  tool definitions. Readers will learn how to reclaim a significant percentage of
  context tokens, leading to cost savings and improved efficiency for agents using
  numerous tools.
---

LLM agents often consume 30-70k tokens just on tool definitions before they even start working. This is a massive hidden cost. A new tool, Toolgz, claims to reclaim up to 85% of these tokens.This is not a small, incremental gain. Cutting token usage by such a high margin has direct implications for reducing operational costs and enabling agents to handle more complex tasks within context windows. It is a zero-runtime-dependency solution, with cross-provider sweeps showing it does not hurt accuracy.Anyone building production-grade LLM agents should look at this for immediate, tangible efficiency improvements.