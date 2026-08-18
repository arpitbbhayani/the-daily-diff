---
title: Waku unifies coding agents with a fast native local application
source: hn
url: https://waku.sh
date: '2026-08-16'
tags:
- catchup
- coding-agents
- git-checkpointing
- gpui-framework
- hn
- keyboard-controls
- local-architecture
- native-app
- rust
- waku
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49315709'
comments: https://news.ycombinator.com/item?id=49315709
why_read: This text introduces Waku, a native desktop application designed to streamline
  the use of multiple coding agents. Readers will learn about its local-first architecture,
  robust feature set, and technical foundation.
authors:
- '0x142857'
---

Building with AI agents often means wrestling with disparate CLIs, lost context, and tricky debugging. Waku, a new native application built with Rust and GPUI, offers a compelling solution by providing a unified, local-first environment for all your coding agents.

This is not another Electron app. Leveraging the GPU-accelerated framework behind Zed, Waku delivers instant launch speeds and smooth scrolling, even through years of agent interaction transcripts. Crucially, it normalizes agent interactions from various CLIs into a single, provider-neutral model.

The "rewind" feature is a game-changer: every prompt checkpoints your working tree under a hidden git ref, allowing you to roll back both code and conversation. This is immensely valuable for debugging complex agent behaviors and exploring different prompts without losing your state.

Waku truly enhances developer productivity for the agentic workflow.
