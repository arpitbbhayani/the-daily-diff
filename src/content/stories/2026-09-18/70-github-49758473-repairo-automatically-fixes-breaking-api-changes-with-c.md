---
title: Repairo automatically fixes breaking API changes with compile-checked PRs
source: github
url: https://github.com/adityacs50-lab/Repairo
date: '2026-09-18'
tags:
- api-breaking-changes
- ast-transformation
- automated-code-repair
- catchup
- developer-tool
- github
- openapi
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49758473'
comments: https://news.ycombinator.com/item?id=49758473
why_read: Learn how Repairo automates the detection and remediation of breaking API
  changes. This tool provides a concrete example of leveraging OpenAPI and AST transformations
  to generate compile-checked code fixes, offering insights into practical automated
  refactoring.
authors:
- Adityasays
---

Ever dreaded updating dependencies or internal APIs because of the inevitable cascade of breaking changes? Repairo offers a compelling solution, automating the painful process of fixing call sites across your codebase.

This tool harnesses OpenAPI definitions to precisely detect API changes and then uses Abstract Syntax Tree (AST) transformations to automatically refactor your code. Crucially, it generates compile-checked pull requests, ensuring the proposed fixes are valid before you even review them.

This is a game-changer for developer productivity, especially in complex, evolving microservice architectures. It transforms a tedious, error-prone manual task into an automated, reliable pipeline, freeing engineers to focus on building new features rather than endless refactoring.
