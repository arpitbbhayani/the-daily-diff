---
title: Coding agent failures stem largely from harnesses not models
source: hn
url: https://blog.herlein.com/post/harness-not-model/
date: '2026-09-28'
tags:
- benchmarks
- catchup
- coding-agents
- context-management
- hn
- local-llm
- test-harness
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49881152'
comments: https://news.ycombinator.com/item?id=49881152
why_read: Read this to understand why coding agent failures are predominantly caused
  by tooling and harness design rather than underlying model limitations. You will
  learn why upgrading to larger models fails to resolve structural harness defects.
authors:
- Greg Herlein
---

Most agent failures in production are not caused by weak foundation models. In a controlled test benchmarking five different coding agent harnesses against the exact same local open-weights model, ninety percent of failures were caused by the harness itself.

Giving the agents identical frozen test suites and identical prompts revealed that switching model sizes or adjusting quantization levels solved almost none of the failure modes. The differences in performance came entirely down to how each harness managed tool execution, output trimming, and rolling context state.

When tool outputs flood the context window with hundreds of lines of compiler logs, the model loses the signal. Upgrading the underlying model yields diminishing returns compared to building strict context management and robust tool execution loops.

If you want to improve coding agent reliability, stop swapping models and start engineering a better harness.
