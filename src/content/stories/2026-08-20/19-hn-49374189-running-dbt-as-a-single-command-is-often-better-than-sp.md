---
title: Running dbt as a single command is often better than splitting into tasks
source: hn
url: https://www.windmill.dev/blog/how-dbt-works-and-its-orchestrators
date: '2026-08-20'
tags:
- catchup
- data-pipelines
- dbt
- hn
- orchestration
- performance
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49374189'
comments: https://news.ycombinator.com/item?id=49374189
why_read: This article explains the architecture of dbt and why running it as a single
  command is more efficient and robust than splitting it into multiple orchestrator
  tasks. Readers will learn the common pitfalls of a segmented approach and a better
  alternative.
authors:
- rubenfiszel
---

If you are running dbt in production, you might be making a common mistake by splitting it into hundreds of individual tasks for your orchestrator. While seemingly logical for isolated retries and error visibility, this approach often leads to slower, more fragile, and significantly more expensive data pipelines.

The article explains that dbt is designed to run as a single command, handling dependency resolution and execution order internally. When you break it apart, you add unnecessary overhead for each model's setup and tear-down, context switching, and resource allocation. Astronomer Cosmos, for example, found its default of one Airflow task per dbt model was roughly six times more expensive than a single invocation.

The better strategy is to let dbt manage its own graph and then read its execution record for insights. This approach leverages dbt's strengths, leading to far more efficient execution and reducing the operational complexity of your data warehouse transformations. Avoid fighting the tool; embrace its design for better results.
