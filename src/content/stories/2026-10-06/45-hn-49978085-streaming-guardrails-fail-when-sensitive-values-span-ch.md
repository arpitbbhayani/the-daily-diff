---
title: Streaming guardrails fail when sensitive values span chunk boundaries
source: hn
url: https://llmshieldproxy.com/docs/split-boundary-leaks/
date: '2026-10-06'
tags:
- catchup
- hn
- llm-security
- split-boundary-leaks
- stream-filtering
- streaming-guardrails
section: ai
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49978085'
comments: https://news.ycombinator.com/item?id=49978085
why_read: Learn why chunk-by-chunk inspection leaks sensitive data across stream boundaries
  and discover the core invariant needed to build correct streaming guardrails.
authors:
- ninadphalak
---

Streaming LLM guardrails suffer from a subtle architectural flaw where sensitive tokens split across chunk boundaries leak before detection triggers. When a secret spans two consecutive chunks, an evaluation engine inspecting chunks individually flushes the initial fragment over the wire before the second chunk ever arrives.

Detection is not prevention. Once bytes reach the client socket, masking the remainder of the payload cannot undo the leaked prefix. Common workarounds like prepending fixed trailing windows fail because arbitrary chunking and variable pattern lengths break naive sliding windows.

Correct streaming filters must satisfy a strict invariant: output cannot depend on how input was chunked. Concatenating streamed filter chunks must yield output byte-identical to filtering the entire payload as a single batch string.

Preventing boundary leaks requires stateful holdback buffers that delay emission until potential prefix matches either fully resolve or clear the maximum length of protected entities. Robust streaming security demands treating token output as a continuous byte stream rather than independent text events.
