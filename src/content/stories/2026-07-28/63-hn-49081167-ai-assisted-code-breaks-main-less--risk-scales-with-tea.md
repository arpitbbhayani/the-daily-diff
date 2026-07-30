---
authors:
- Julien Danjou
comments: https://news.ycombinator.com/item?id=49081167
date: '2026-07-28'
depth_score: 6
hn_id: '49081167'
image: /infographics/63-hn-49081167.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- ai-assisted-code
- catchup
- code-quality
- hn
- main-branch-stability
- merge-queues
- pull-requests
- team-size
title: AI-assisted code breaks main less, risk scales with team size
url: https://mergify.com/reports/state-of-merge-queues-2026
utility_score: 9
why_read: This article reveals surprising data from 200,000 merges, showing AI-assisted
  code breaks main half as often and that the risk of breaking main escalates significantly
  with team size. Readers will gain data-backed insights into merge queue performance
  and factors impacting branch stability.
---

AI-generated code might actually make your main branch more stable. A study analyzed over 200,000 merges and found that AI-assisted pull requests broke main half as often as those written by humans alone (1.9% versus 4.4%).

This finding contradicts a common fear that AI would flood repositories with broken, subtly incorrect code. Instead, the data suggests AI tools, when used within a merge queue context, can act as a net positive for code quality and stability.

Moreover, the study highlights how the risk of a "green" PR breaking main escalates dramatically with team size, moving from 1 in 130 for small teams to 1 in 8 for teams over forty engineers. This underlines the growing importance of robust merge queue systems as organizations scale.