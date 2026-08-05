---
title: Argot identifies code that does not fit repository patterns
source: hn
url: https://argot.tmonier.com/
date: '2026-08-03'
tags:
- argot
- catchup
- code-consistency
- hn
- linting
- repository-history
- static-analysis
section: engineering
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49154714'
comments: https://news.ycombinator.com/item?id=49154714
why_read: This text introduces 'argot,' a tool that identifies code inconsistencies
  by analyzing a repository's historical patterns. Readers will learn how argot uses
  deterministic checks to flag foreign, superseded, or misplaced code, especially
  relevant for integrating AI-written contributions.
authors:
- damienmeur
---

Integrating AI-generated code into a mature codebase presents a unique challenge: how do you ensure it adheres to the implicit style and architectural patterns that linters miss? Argot, a new Rust-based tool, offers a compelling solution.

It acts as an AI guardrail, analyzing your codebase's Abstract Syntax Tree (AST) patterns and historical commits to "lint the rules you never wrote down." This means it can flag AI-written code that, while syntactically correct, feels "foreign" to your repository, all locally and deterministically.

This is a significant step beyond traditional linters or relying on another LLM for code review. It provides a practical, data-driven mechanism to maintain codebase consistency and quality as AI coding agents become more prevalent, directly addressing a key engineering practice problem.
