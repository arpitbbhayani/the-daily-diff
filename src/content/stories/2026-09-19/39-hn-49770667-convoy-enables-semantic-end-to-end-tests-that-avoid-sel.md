---
title: Convoy enables semantic end-to-end tests that avoid selector rot
source: hn
url: https://www.tryconvoy.xyz
date: '2026-09-19'
tags:
- catchup
- cross-platform-tests
- e2e-testing
- hn
- selector-rot
- semantic-testing
- test-automation
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49770667'
comments: https://news.ycombinator.com/item?id=49770667
why_read: Read this to learn about Convoy, a novel approach to end-to-end testing
  that uses natural language to describe interactions. It explains how this method
  makes tests more robust to UI changes and easier to maintain across multiple platforms.
authors:
- gokulnair2001
---

Traditional end-to-end tests are a nightmare to maintain, constantly breaking due to minor UI changes because they rely on brittle selectors. 'Convoy' introduces a semantic E2E testing framework that changes the game entirely.

It works by interpreting natural language commands like "Tap Continue" or "Type into Email" against the live accessibility tree of iOS, Android, or web applications. This means your tests are platform-agnostic and incredibly resilient to UI refactors, as they do not embed specific selectors or IDs.

The beauty of this approach is its alignment with AI agents: agents can describe what a human sees and intends, rather than needing to infer technical locators. This promises a future where coding agents can write robust E2E tests directly, significantly boosting developer productivity and test reliability across the board.
