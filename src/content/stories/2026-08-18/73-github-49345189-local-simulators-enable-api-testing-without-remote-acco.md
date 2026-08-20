---
title: Local simulators enable API testing without remote accounts or network dependency
source: github
url: https://github.com/stuntapi/stunt
date: '2026-08-18'
tags:
- api-simulation
- api-testing
- catchup
- github
- local-development
- mock-servers
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49345189'
comments: https://news.ycombinator.com/item?id=49345189
why_read: This describes a tool for local API simulation that enables deterministic,
  stateful testing without requiring remote accounts, network access, or incurring
  costs. Readers will learn how to overcome common API integration testing challenges.
authors:
- polymatto
---

Tired of juggling API keys, hitting rate limits, or paying for test transactions when integrating third-party services? Stunt offers a powerful solution: local, stateful simulators for 95 public APIs.

This tool spins up realistic stand-ins for services like Stripe, Drive, or Dropbox right on your machine. Developed in Go with sandboxed Starlark for dynamic behavior, it allows you to develop and test complex integrations without network dependencies, live credentials, or unexpected bills.

Its high utility means you can achieve deterministic, isolated tests for your distributed systems, drastically improving development velocity and ensuring robust integrations. This is not just another mock server; it is a comprehensive stunt double for your entire API ecosystem.
