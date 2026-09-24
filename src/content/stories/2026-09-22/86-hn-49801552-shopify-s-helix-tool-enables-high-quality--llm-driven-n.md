---
title: Shopify's Helix tool enables high-quality, LLM-driven native app migration
source: hn
url: https://shopify.engineering/helix
date: '2026-09-22'
tags:
- catchup
- hn
- incremental-development
- large-language-models
- native-app-migration
- quality-gates
- shopify
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49801552'
comments: https://news.ycombinator.com/item?id=49801552
why_read: Learn how Shopify built an internal tool, Helix, to successfully migrate
  a large app from React Native to native Swift and Kotlin using LLMs. Discover how
  their iterative approach with quality gates ensures high-quality code generation
  despite LLM limitations.
authors:
- mustafa01ali
---

Shopify is using an internal tool named Helix to migrate their massive React Native app, with over 300 screens, to native Swift and Kotlin. The key is not brute-force LLM code generation, but a highly iterative, human-guided process.

Helix breaks down migration into small, manageable checkpoints. Engineers review and approve these slices of work, providing a feedback loop that allows the LLM to learn and refine its output. This ensures high code quality and maintainability, preventing the typical pitfalls of large, unverified code dumps from generative AI.

This approach provides a powerful blueprint for leveraging LLMs in complex engineering tasks like refactoring or language migration. It teaches you how to maintain high standards and developer productivity while harnessing AI's capabilities.
