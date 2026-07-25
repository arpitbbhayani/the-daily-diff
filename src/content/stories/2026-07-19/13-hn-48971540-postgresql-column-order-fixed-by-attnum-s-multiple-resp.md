---
authors:
- Tianzhou
comments: https://news.ycombinator.com/item?id=48971540
date: '2026-07-19'
hn_id: '48971540'
image: /infographics/13-hn-48971540.jpg
interest_score: 8
section: databases
source: hn
tags:
- attnum
- catchup
- column-order
- data-storage
- hn
- postgresql
title: PostgreSQL column order fixed by attnum's multiple responsibilities
url: https://www.bytebase.com/blog/why-its-hard-to-add-a-column-in-the-middle-of-postgres-table/
why_read: This article explains why PostgreSQL does not allow adding columns in the
  middle of a table. It delves into the internal mechanism of attnum and its multiple
  responsibilities in defining column identity, physical position, and logical order.
---

You have probably encountered PostgreSQL's inability to add a column in the middle of a table, unlike MySQL, and wondered why such a seemingly simple feature is missing. The answer lies deep within PostgreSQL's internal design, specifically with `attnum`.

The `attnum` field in PostgreSQL's `pg_attribute` catalog serves three critical roles simultaneously: it uniquely identifies a column, dictates its physical byte offset within an on-disk tuple, and defines its logical position. This triple responsibility means that simply inserting a column would necessitate re-writing `attnum` values for all subsequent columns and potentially rewriting the entire table to adjust physical offsets, making it a far more complex operation than it appears.

Understanding this constraint is crucial for anyone managing PostgreSQL schemas. It explains why new columns always append to the end and informs strategic planning for schema evolution, pushing you to consider alternatives like view layers or careful ordering during initial table design to achieve desired logical column placement without full table rewrites.

This insight into PostgreSQL's internal mechanics enhances your mental model of its architecture.