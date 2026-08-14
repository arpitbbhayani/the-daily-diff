---
title: Greentree verifies working tree state and publishes only validated trees
source: github
url: https://github.com/Reachpad/greentree
date: '2026-08-12'
tags:
- catchup
- content-addressing
- continuous-verification
- developer-tools
- github
- greentree
- testing
- version-control
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49280079'
comments: https://news.ycombinator.com/item?id=49280079
why_read: This describes greentree, a tool for continuous verification of a dirty
  working tree before committing. Readers will learn how content-addressing and tree-based
  testing can ensure only verified code is published.
authors:
- officezage
---

Continuous integration often struggles with verifying dirty working trees or ensuring that AI agents commit only fully tested code. `greentree` offers a compelling solution by caching test results based on the Git tree hash, not just the commit SHA.

This means you can continuously test and verify a dirty working tree, and the tool will refuse to create a commit until that specific content-addressed tree passes all checks. It avoids redundant re-runs for identical content and provides robust pre-commit validation.

Designed with coding agents in mind, `greentree` ensures that every output from an agent is thoroughly verified before it can be integrated into the main codebase. This is a significant step forward for reliable AI-assisted development and maintaining high code quality in fast-moving projects.

Verify your trees, not just your commits.
