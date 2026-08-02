---
authors:
- PROOFNEXA
comments: https://news.ycombinator.com/item?id=49110007
date: '2026-07-30'
depth_score: 8
hn_id: '49110007'
image: /infographics/103-hn-49110007-most-claude-code-tokens-are-consumed-by-conversation-hi.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- claude-code
- conversation-history
- cost-optimization
- file-reading
- hn
- screenshots
- token-usage
- tool-outputs
- web-page-scraping
title: Most Claude Code tokens are consumed by conversation history and tool outputs
url: https://note.com/roten/n/nac8aef48851f
utility_score: 9
why_read: Understand how Claude Code actually consumes tokens, revealing that most
  are spent on conversation history and large tool outputs, not user input. Learn
  actionable strategies to reduce token costs by optimizing tool usage.
---

If you are running LLM agents, you are likely wasting a staggering amount of tokens without realizing it. A detailed analysis of 32 Claude Code sessions revealed that a shocking 96.8 percent of all tokens were spent merely re-reading conversation history.

The primary culprits are not user inputs, which accounted for a mere 0.01 percent, nor even AI outputs. Instead, large tool results 

particularly full web page captures (33,645 characters per read) and screenshots (296,827 characters per image) 

are the biggest token hogs. A single screenshot was equivalent to 354 Bash commands.

This means you should stop feeding entire files or web pages to your agent by default. Instead, use grep to find relevant lines in files, extract only specific values from web pages, and reserve screenshots for truly visual tasks. Optimizing this context flow, rather than just shortening prompts, is where the real token savings are.