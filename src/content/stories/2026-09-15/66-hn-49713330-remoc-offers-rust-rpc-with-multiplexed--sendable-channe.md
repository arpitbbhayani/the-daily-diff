---
title: Remoc offers Rust RPC with multiplexed, sendable channels over one connection
source: hn
url: https://remoc.rs/
date: '2026-09-15'
tags:
- backpressure
- catchup
- channels
- dynamic-channels
- hn
- multiplexing
- rust-rpc
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49713330'
comments: https://news.ycombinator.com/item?id=49713330
why_read: This text explains how Remoc, a Rust RPC system, efficiently multiplexes
  multiple typed communication channels over a single network connection. Readers
  will learn how channels are created dynamically and manage backpressure independently.
authors:
- surban
---

Remoc, a new Rust RPC framework, redefines distributed communication by treating channels as first-class values. This means you can multiplex any number of independent, typed channels over a single transport connection, dramatically simplifying distributed system design.

Crucially, Remoc implements per-channel backpressure, preventing a slow consumer on one channel from blocking others on the same connection. Even more powerfully, channel endpoints can be sent within messages, allowing dynamic creation of new communication paths without establishing new transport connections.

This is a significant step for Rust developers building high-performance, resilient distributed systems. It offers an elegant solution to common RPC complexities, enhancing both flexibility and resource efficiency.
