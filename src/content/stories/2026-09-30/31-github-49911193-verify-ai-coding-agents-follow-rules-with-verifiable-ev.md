---
title: Verify AI coding agents follow rules with verifiable evidence
source: github
url: https://github.com/rulereceipt/rulereceipt
date: '2026-09-30'
tags:
- ai-coding-agents
- catchup
- claude-code
- cursor-rules
- developer-tooling
- github
- rule-verification
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49911193'
comments: https://news.ycombinator.com/item?id=49911193
why_read: Understand how to locally audit AI coding agent sessions against repository
  guidelines and rule files with concrete line-by-line evidence.
authors:
- RuleReceipt
---

Configuring rules in CLAUDE.md or Cursor rules files often feels like wishful thinking because frontier models still routinely drift from explicit instructions during long sessions. RuleReceipt takes a deterministic verification approach by parsing the raw session logs of coding agents and producing evidence-backed receipts for every rule.

Instead of relying on another fuzzy LLM judge in the loop, it evaluates agent tool calls and file diffs against specified constraints directly on your local machine with zero external network overhead. It maps agent actions directly to the rule lines that permitted or forbade the behavior.

Building dependable agent workflows requires moving from stochastic prompting to deterministic test suites. Auditing session traces locally makes it possible to enforce repository conventions and catch hallucinated tool invocations before bad code enters production.

Reliable agent orchestration starts with automated compliance verification rather than blind trust.
