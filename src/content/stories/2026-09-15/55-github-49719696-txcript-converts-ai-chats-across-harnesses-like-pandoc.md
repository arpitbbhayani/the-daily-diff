---
title: txcript converts AI chats across harnesses like Pandoc
source: github
url: https://github.com/skillsynchq/txcript
date: '2026-09-15'
tags:
- agent-sessions
- ai-chat-conversion
- catchup
- cli
- github
- pandoc
- rust-library
- wasm
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49719696'
comments: https://news.ycombinator.com/item?id=49719696
why_read: This tool enables seamless portability of AI chat conversations and tool
  history between various coding agents like Claude Code and Codex. Readers will learn
  how txcript standardizes agent-specific formats, providing a unified model for building
  session search, viewers, and editors.
authors:
- ibobev
---

Moving AI chats between different platforms like Claude Code, Codex, or Cursor usually involves a copy-paste mess, losing context and tool history. There is a new open-source Rust library, txcript, that acts as 'Pandoc for AI chats'.

It converts agent sessions, carrying over messages, reasoning, and tool history, letting you start a conversation in one agent and continue in another. This solves a significant interoperability pain point for engineers building with multiple AI coding assistants.

The library offers a unified transcript model, a Rust API, JavaScript package, and a CLI, allowing you to build session search, viewers, or editors against a consistent format. This is a game-changer for developer productivity in the fragmented AI agent landscape.
