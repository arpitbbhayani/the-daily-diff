---
authors:
- ubermon
comments: https://news.ycombinator.com/item?id=49055752
date: '2026-07-26'
depth_score: 8
hn_id: '49055752'
image: /infographics/26-hn-49055752.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- a/b-testing
- catchup
- cost-reduction
- hn
- model-performance
- prompt-engineering
- small-language-models
- system-prompts
title: Cutting system prompts improves performance for small language models
url: https://antigma.ai/blog/2026/07/25/short-prompt-small-models
utility_score: 9
why_read: This article presents experimental results demonstrating that significantly
  shortening system prompts can enhance performance and reduce costs for small language
  models, contrary to conventional wisdom. Readers will learn that less detailed prompt
  instruction can be beneficial even for smaller, less capable models.
---

Conventional wisdom suggests that smaller, less capable LLMs need detailed, lengthy system prompts for effective performance. However, recent empirical data challenges this assumption directly.

A team experimented with significantly cutting an agent's system prompt by 80 percent, from approximately 34,000 to 18,000 characters, on a genuinely small model, deepseek-v4-flash. The results were surprising.

Not only did the shorter prompt reduce input tokens by a substantial 32 percent, leading to lower costs, but it also improved the mean reward and increased the number of tasks passed on an 89-task benchmark suite. This suggests that even smaller models can benefit from less explicit direction.

This finding has significant implications for prompt engineering. It indicates that context overload might be detrimental even for models believed to require extensive hand-holding, urging engineers to prioritize conciseness for better performance and efficiency in agentic systems.