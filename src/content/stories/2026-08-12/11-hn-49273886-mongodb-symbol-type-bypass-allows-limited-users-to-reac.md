---
title: MongoDB symbol-type bypass allows limited users to reach system collections
source: hn
url: https://hellorecon.com/blog/cve-2026-18690-mongodb-symbol-type-authz-bypass
date: '2026-08-12'
tags:
- authorization-bypass
- bson-symbol
- catchup
- cve-2026-18690
- hn
- incorrect-authorization
- mongodb
- system-collections
section: databases
interest_score: 8
depth_score: 9
utility_score: 8
novelty_score: 8
hn_id: '49273886'
comments: https://news.ycombinator.com/item?id=49273886
why_read: This article explains the MongoDB symbol-type authorization bypass (CVE-2026-18690)
  in detail. Readers will understand how differing parse logic for collection names
  between authorization and execution can lead to a low-privileged user accessing
  protected system collections.
authors:
- slvnx
---

A recent MongoDB vulnerability (CVE-2026-18690) exposes a fascinating and critical flaw in database authorization. It is a classic "authorization check and command disagree" scenario, rooted deeply in how MongoDB parses collection names.

The bypass occurs when a collection name is supplied as a BSON symbol instead of a string. MongoDB parses this name twice: once for authorization and once for execution. The symbol type causes the authorization parse to silently default to a database-level namespace, while execution correctly resolves the target collection.

This means a low-privileged user can access protected system collections. This deep dive into a subtle BSON type confusion reveals fundamental lessons in secure database design, reminding engineers to consider every parsing layer when implementing access controls.
