---
title: Mapping large language model intelligence against blended token pricing
source: hn
url: https://bestmodelforyourbudget.terrydjony.com/
date: '2026-09-24'
tags:
- benchmarking
- catchup
- cost-efficiency
- hn
- large-language-models
- token-pricing
- value-frontier
section: ai
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 6
hn_id: '49830866'
comments: https://news.ycombinator.com/item?id=49830866
why_read: Learn how to evaluate large language models along an intelligence-to-price
  frontier to choose the best model for any budget.
authors:
- terryds
image: /infographics/05-hn-49830866.jpg
---

Selecting an LLM for production often turns into a chaotic balance between raw benchmark numbers and inference billing rates. Instead of manually cross-referencing vendor pricing pages with evaluation leaderboards, tracking the Pareto frontier of performance versus price gives you an objective selection baseline.

By plotting the Intelligence Index against blended input and output token costs, you can instantly see which models dominate a specific price band. If a model costs two dollars per million tokens but delivers lower coding and reasoning scores than an alternative running at one dollar, it is strictly dominated and should not be in your routing pool.

For engineers designing multi-tier routing gateways or high-throughput batch pipelines, this kind of empirical cost curve makes model arbitrage much simpler. You can route low-complexity context preprocessing to the cheapest non-dominated tier and reserve high-cost frontier calls strictly for complex reasoning steps.

Tracking these price-to-performance frontiers daily ensures you never overpay for stale model endpoints when better alternatives drop.
