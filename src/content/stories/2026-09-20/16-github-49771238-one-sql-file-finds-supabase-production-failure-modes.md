---
title: One SQL file finds Supabase production failure modes
source: github
url: https://github.com/Concepto505/supabase-audit
date: '2026-09-20'
tags:
- audit
- catchup
- github
- postgres
- production-failures
- row-level-security
- security
- sql-script
- supabase
section: databases
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49771238'
comments: https://news.ycombinator.com/item?id=49771238
why_read: This tool provides a single SQL script to quickly identify eleven critical
  production failure modes and security vulnerabilities in Supabase/Postgres environments,
  helping users prevent data leaks and misconfigurations.
authors:
- Concepto505
---

Do you worry about hidden RLS or permission misconfigurations in your Postgres or Supabase projects? A single SQL file exists that acts as a production-grade auditor, designed to uncover eleven common failure modes before they bite you. You simply paste it into the SQL Editor and run it. It performs crucial checks such as identifying tables exposed to the API with RLS disabled, or discovering SECURITY DEFINER functions executable by public roles, which could lead to severe data leaks. This tool only SELECTs from system catalogs, meaning it reads none of your table data, writes nothing, and shares no credentials. It is a highly practical and secure way to enhance your database's security posture and prevent unexpected data exposure. This offers immediate utility for any engineer managing a Postgres-backed application, helping you proactively secure your systems.
