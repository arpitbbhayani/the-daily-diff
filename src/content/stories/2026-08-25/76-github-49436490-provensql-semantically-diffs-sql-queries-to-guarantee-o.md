---
title: Provensql semantically diffs SQL queries to guarantee output equivalence
source: github
url: https://github.com/nac7/provensql
date: '2026-08-25'
tags:
- catchup
- database-testing
- formal-verification
- github
- query-equivalence
- sql-diffing
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49436490'
comments: https://news.ycombinator.com/item?id=49436490
why_read: Anyone working with SQL will learn how provensql can prevent unexpected
  query changes from breaking production. It demonstrates a robust approach to verifying
  SQL query equivalence beyond typical testing.
authors:
- nac7
---

How confident are you that your SQL refactor did not subtly change the query's output? SQL linters and even LLM judges often fail to catch semantic differences. Provensql addresses this by offering a sound-by-construction semantic diff for SQL, actively proving equivalence or providing a clear counterexample.

This tool is a game-changer for database engineers. Imagine modifying a complex query for performance or readability, and instead of relying on limited test cases or manual review, you get a formal guarantee that the output remains identical across all possible inputs (given schema constraints). If there is a difference, Provensql pinpoints it with a concrete instance.

This capability significantly reduces the risk of regressions, enhances developer productivity, and boosts confidence when working with critical database logic. It shifts from hoping your query changes are safe to knowing they are.
