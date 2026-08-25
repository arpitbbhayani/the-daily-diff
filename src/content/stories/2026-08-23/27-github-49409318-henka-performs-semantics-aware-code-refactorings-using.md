---
title: Henka performs semantics-aware code refactorings using language toolchains
source: github
url: https://github.com/martint/henka
date: '2026-08-23'
tags:
- catchup
- code-refactoring
- eclipse-jdt
- github
- language-server
- language-toolchain
- multi-tenancy
- rust-analyzer
- typescript-language-server
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49409318'
comments: https://news.ycombinator.com/item?id=49409318
why_read: This description introduces Henka, a multi-tenant server providing structured,
  semantics-aware code refactorings. Readers will learn how Henka leverages real language
  toolchains for precise, compiler-view-computed edits, avoiding mere text manipulation.
authors:
- martint
---

Stop letting AI agents perform mere text munging on your codebase. Henka introduces a multi-tenant server for structured, semantics-aware code refactorings, going beyond simple string edits.

This tool leverages real language toolchains like Eclipse JDT for Java and rust-analyzer for Rust to perform compiler-driven refactorings such as renames, extractions, and signature changes that hold across files and overloads. It provides a foundational layer for truly intelligent coding agents.

This is not about making code suggestions; it is about enabling AI to manipulate code with the same precision and safety a human engineer expects, offering unprecedented productivity gains.
