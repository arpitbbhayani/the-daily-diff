---
title: Mocks require defining explicit interfaces between application components
source: hn
url: https://dashbit.co/blog/mocks-and-explicit-contracts
date: '2026-09-24'
tags:
- catchup
- elixir
- explicit-contracts
- hn
- mocks
- unit-testing
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49826788'
comments: https://news.ycombinator.com/item?id=49826788
why_read: Read this to understand why mocking dependencies without explicit interfaces
  creates brittle coupling in your codebase. You will learn practical guidelines for
  designing contracts that make tests more resilient and maintainable.
authors:
- "Jos\xE9 Valim"
---

Mocks should always be treated as nouns, not verbs. When engineers use mocking libraries to dynamically replace third-party HTTP clients or database drivers inside unit tests, they silently couple their test suite to arbitrary implementation details.

José Valim breaks down why this pattern creates brittle codebases. When you mock an internal function call deep inside a controller, you lose the safety of an explicit contract. The moment you refactor internal plumbing or swap a library, tests break even though application behavior remains unchanged.

Instead of mocking low-level client calls, define explicit interfaces and behaviours at your application boundaries. Write implementations for production, and swap them with mock modules that satisfy the exact same contract during testing. This forces you to think about domain boundaries rather than patching leaky abstractions.
