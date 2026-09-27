---
title: Adding None-aware attribute and indexing access operators to Python
source: hn
url: https://peps.python.org/pep-0823/
date: '2026-09-24'
tags:
- attribute-access
- catchup
- hn
- none-aware-operators
- python-syntax
- safe-navigation
- short-circuiting
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49826519'
comments: https://news.ycombinator.com/item?id=49826519
why_read: Read this proposal to understand how safe navigation operators for attribute
  access and indexing could work in Python to streamline traversing nullable data
  structures.
authors:
- Marc Mueller
---

Python Enhancement Proposal 823 proposes adding None-aware attribute access (?.) and indexing (?[]) operators to Python 3.16. For years, safely traversing nested structures like parsed JSON or optional configuration objects required verbose conditional checks or defensive dictionary access methods.

The proposal introduces short-circuiting semantics where evaluating None on the left side immediately short-circuits the entire access chain to None without evaluating subsequent expressions or raising AttributeErrors.

Designing these operators requires addressing subtle grammar constraints, including interaction with parenthesized groupings, await expressions, and AST representations. The specification explicitly defers coalesce assignment (??=) to keep the initial language grammar additions minimal and predictable.

Language-level safe navigation significantly cleans up defensive data pipeline and parsing code across large codebases.
