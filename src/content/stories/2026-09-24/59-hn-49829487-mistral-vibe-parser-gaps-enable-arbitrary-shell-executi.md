---
title: Mistral Vibe parser gaps enable arbitrary shell execution
source: hn
url: https://blog.secmate.dev/posts/mistral-vibe-cve-2026-87987-cve-2026-87984/
date: '2026-09-24'
tags:
- arbitrary-code-execution
- bash-tool
- catchup
- hn
- mistral-vibe
- permission-bypass
- tree-sitter
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49829487'
comments: https://news.ycombinator.com/item?id=49829487
why_read: Understand how discrepancies between command parsing and execution created
  permission bypass vulnerabilities in Mistral Vibe. You will learn how incomplete
  shell semantic validation in AI coding agents allows attackers to execute arbitrary
  code.
authors:
- Maxime Rossi Bellom
- Ramtine Tofighi Shirazi
---

When building permission boundaries for autonomous coding agents, inspecting command strings with an abstract syntax tree parser is not enough. A critical vulnerability in Mistral Vibe demonstrates what happens when the validation layer and the execution engine disagree on shell semantics.

The framework used Tree-sitter to parse shell tool invocations, extract command names, and match them against an allowlist of read-only operations. If the parsed components appeared benign, the harness passed the entire original unparsed string straight to Bash.

This architectural mismatch enabled complete privilege bypass. Attackers used shell features that the static grammar ignored, such as nested expansions and output redirections, to execute arbitrary code without user confirmation prompts.

Never inspect a reduced representation of a command while executing the raw string in an unrestricted shell environment.
