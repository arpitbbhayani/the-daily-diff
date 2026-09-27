---
title: Fakecloud emulates full aws services locally for integration testing
source: hn
url: https://fakecloud.dev/
date: '2026-09-26'
tags:
- aws-sdk
- catchup
- fakecloud
- hn
- integration-testing
- local-aws-emulator
- smithy-conformance
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49856885'
comments: https://news.ycombinator.com/item?id=49856885
why_read: Read this to learn how Fakecloud provides a fully local, 100% compliant
  AWS emulation environment for integration tests without mocks or paid plans.
authors:
- theanonymousone
---

Local integration testing for cloud infrastructure often degrades into brittle mocks or heavyweight cloud emulators that require paid plans and remote auth tokens. Fakecloud takes a different approach by implementing a 100 percent conformance test harness locally across 105 AWS services.

Your application code uses standard AWS SDKs, CLIs, and infrastructure-as-code tooling directly against localhost. Rather than polling or injecting mock fixtures, you use companion SDKs to inspect events, check dead letter queues, and trigger asynchronous operations deterministically inside your test runner.

Deterministic local infrastructure drastically shortens continuous integration feedback loops without sacrificing API parity.
