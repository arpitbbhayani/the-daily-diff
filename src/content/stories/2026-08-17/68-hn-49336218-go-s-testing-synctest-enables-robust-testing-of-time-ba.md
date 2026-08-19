---
title: Go's testing/synctest Enables Robust Testing of Time-Based Code
source: hn
url: https://quii.gitbook.io/learn-go-with-tests/build-an-application/revisiting-time-with-synctest
date: '2026-08-17'
tags:
- catchup
- dependency-injection
- go-testing
- hn
- testing-synctest
- time-afterfunc
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49336218'
comments: https://news.ycombinator.com/item?id=49336218
why_read: This article explains the historical challenges of testing Go's time.AfterFunc
  with dependency injection. It introduces testing/synctest as a robust solution in
  Go 1.25 for exercising real time-based code in tests.
authors:
- quii
---

Testing time-dependent logic in Go has always been tricky. Traditional dependency injection works, but it often leaves the actual `time.AfterFunc` calls untested, or forces you into painfully slow tests. Go 1.25 changes this game entirely.

The new `testing/synctest` package allows you to run real, unmodified code that uses `time.Sleep`, `time.AfterFunc`, and similar functions within fast, controlled tests. This means you can finally achieve comprehensive test coverage for time-sensitive features without compromising on execution speed.

This is an extremely practical improvement for any Go developer. You will learn how to leverage this new feature to write more robust and reliable tests, directly boosting your developer productivity and the quality of your systems.
