---
title: Secure Read-Only SQL for Coding Agents with dbq
source: hn
url: https://gayanhewa.github.io/dbq/
date: '2026-09-10'
tags:
- catchup
- coding-agents
- database-security
- dbq
- hn
- python-drivers
- read-only-sql
- transaction-management
section: databases
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49643099'
comments: https://news.ycombinator.com/item?id=49643099
why_read: Learn how dbq provides a secure, read-only SQL interface for AI coding agents,
  enabling them to generate better code by querying production-shaped data without
  risk of unintended writes.
authors:
- filepod
---

Giving an AI agent direct database access sounds like a security nightmare. This `dbq` project offers a surprisingly elegant and robust solution for secure, read-only SQL access, engineered specifically for coding agents.

The key innovation is its reliance on server-side transaction guarantees: for Oracle, MySQL, and Postgres, it wraps every query in an explicit read-only transaction. This means even if an agent tried to issue a `DELETE` statement, the database itself would refuse it, irrespective of user permissions.

This ensures data integrity, minimizes token consumption by only returning relevant output, and crucially, keeps database credentials entirely separate from the agent. It is a highly practical blueprint for any senior engineer integrating LLM-powered agents with sensitive production data.
