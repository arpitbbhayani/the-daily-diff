---
title: Postgres random_page_cost default does not reflect hardware costs
source: hn
url: https://vondra.me/posts/some-more-thoughts-on-random-page-cost/
date: '2026-09-04'
tags:
- catchup
- cost-model
- hn
- postgres
- random-page-cost
- storage-i/o
section: databases
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49570189'
comments: https://news.ycombinator.com/item?id=49570189
why_read: This post updates the discussion on Postgres's random_page_cost, revealing
  that its default value doesn't reflect modern storage costs and might compensate
  for an incomplete cost model. Readers will learn why adjusting this setting can
  negatively impact performance.
authors:
- Tomas Vondra
---

Optimizing PostgreSQL often means diving deep into its query planner. The `random_page_cost` parameter, a crucial setting, has a history and behavior that is more complex than it appears, especially with modern SSD storage.

Historically, increasing `random_page_cost` has often led to worse performance. This surprising outcome is not always due to inaccurate costing, but rather because the parameter can inadvertently compensate for other limitations or incompleteness in the database's cost model.

Understanding these subtleties is vital for any engineer tuning PostgreSQL for peak performance. This insight helps you move beyond basic recommendations and truly grasp the planner's decisions, leading to more effective optimizations.
