---
title: Securing computer-use agents against dynamic branch steering attacks
source: news
url: https://arxiv.org/abs/2610.03089
date: '2026-10-05'
tags:
- branch-steering
- catchup
- cobra
- computer-use-agents
- dual-llm
- news
- prompt-injection
section: ai
is_news: true
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49962382'
comments: https://news.ycombinator.com/item?id=49962382
why_read: Read this to understand how untrusted dynamic web content steers computer-use
  agents into hazardous execution paths, and how ahead-of-time capability constraints
  in COBRA prevent these attacks.
authors:
- Giulio Zingrillo
- Hanna Foerster
- Ilia Shumailov
- Yiren Zhao
- Robert Mullins
---

Dual-LLM sandboxing architectures fail to protect computer-use agents when untrusted web interfaces force the planner to branch dynamically.

In graphical environments, execution plans cannot remain static because agents must adapt to dynamic page layouts and responses. Attackers exploit this runtime flexibility through branch steering attacks, crafting malicious inputs that coerce the agent into dangerous pre-approved paths without injecting explicit textual instructions. Standard evaluation benchmarks reveal attack success rates as high as 94 percent against isolated planner architectures.

The COBRA architecture neutralizes this vector by pairing pre-planned execution branches with strict ahead-of-time capability constraints. By strictly bounding parameter spaces, destination domains, and allowable actions before untrusted data is parsed, the system reduces attack success to zero percent while maintaining 97 percent benign task completion.

Securing autonomous agents requires restricting execution capabilities long before untrusted inputs reach the planner.
