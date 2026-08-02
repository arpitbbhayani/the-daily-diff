---
authors:
- artagnon
comments: https://news.ycombinator.com/item?id=49107526
date: '2026-07-30'
depth_score: 8
hn_id: '49107526'
image: /infographics/110-hn-49107526-large-language-models-function-as-iterative-mutators-by.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- catchup
- correctness-oracle
- fuzzing
- hn
- iterative-convergence
- large-language-models
- mutation
- training-data
title: Large language models function as iterative mutators by design
url: https://artagnon.com/art/mutator
utility_score: 8
why_read: This text offers a mechanistic view of Large Language Models as iterative
  mutators that inherently produce "rubbish" and require an oracle for correctness.
  It helps understand their operational limits and optimal use cases for achieving
  reliable output.
---

Forget viewing LLMs as reasoning engines; this piece argues they are fundamentally "mutators" or "fuzzers." Their core function is to produce plausible variations of training data and prompts, not to compute mathematically correct answers inherently.

The critical insight? LLMs are only truly useful when paired with an "oracle program" that can mechanically check for correctness. Without this, you are effectively using a human as a slow, inefficient oracle, making the process painful and ineffective.

This reframing completely changes how you should approach building reliable AI agents. It underscores the necessity of robust external validation and offers a powerful new metric: tokens expended to converge to the mathematically correct output. It is a paradigm shift for applied AI.