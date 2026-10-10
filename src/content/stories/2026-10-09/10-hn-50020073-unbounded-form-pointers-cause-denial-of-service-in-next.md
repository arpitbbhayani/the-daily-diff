---
title: Unbounded form pointers cause denial of service in Next.js
source: hn
url: https://simonkoeck.com/writeups/react-rsc-formdata-event-loop-dos
date: '2026-10-09'
tags:
- algorithmic-complexity
- catchup
- denial-of-service
- event-loop
- formdata
- hn
- server-actions
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '50020073'
comments: https://news.ycombinator.com/item?id=50020073
why_read: Read this to understand how unbounded quadratic string checks during React
  server action deserialization can block the Node.js event loop and freeze a server
  with a single payload.
authors:
- Simon Koeck
---

A single malicious HTTP POST request can completely freeze a Next.js server due to quadratic parsing overhead in React Server Components.

When handling incoming form submissions for server actions, the runtime inspects serialized form fields to reconstruct nested parameters. If a field contains a pointer indicating a nested form, the parser iterates through every single field in the payload to find matching keys. Because the parser repeats this linear scan for every pointer present in the request without bounds, an attacker can craft a payload with ten thousand pointers and ten thousand fields.

This triggers one hundred million string checks back to back. Because Node.js processes incoming traffic on a single event loop thread, this synchronous CPU spike halts all concurrent I/O. Every other concurrent connection to that process simply times out while the thread remains locked.

Existing defensive caps in the framework bounded array recursion depth and argument counts, but missed key iteration multiplication entirely.

Unchecked parser complexity in single-threaded runtimes remains an existential availability risk.
