---
authors:
- Robin Verlangen
comments: https://news.ycombinator.com/item?id=49359720
date: '2026-08-19'
depth_score: 7
hn_id: '49359720'
image: /infographics/57-hn-49359720.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- catchup
- constraints
- contextual-information
- hn
- llms
- question-framing
title: Asking Effective Questions, Not Answers, is Now the Work
url: https://blog.robinverlangen.nl/posts/answers-are-cheap-questions-are-the-work-26c807d8.html
utility_score: 9
why_read: This article explains how the availability of LLMs makes answers cheap,
  shifting the focus to framing effective questions. Readers will learn practical
  strategies for asking better technical questions by stating constraints and supplying
  relevant context.
---

In the age of large language models, the true bottleneck in problem-solving has shifted. It is no longer about finding answers, which are now cheap and instant, but about asking the right questions. This article makes a compelling case for shifting our focus from prompt engineering to rigorous question framing.

The key insight is that vague questions yield confidently vague answers, which is often worse than no answer at all. To get valuable output from an LLM, you must clearly state all constraints, such as team size, budget, latency requirements, existing stack, and operational realities. For example, instead of asking "should we use a vector database," a senior engineer should specify "we have 200,000 documents, one backend engineer, already use Postgres, need P95 latency under 300ms, and want to avoid operating a second datastore.

Furthermore, it is crucial to supply context that models cannot infer, like details about your specific codebase, past incidents, or political decisions. This approach moves beyond superficial interactions to leverage LLMs as truly powerful assistants for complex system design and engineering challenges. This is an essential skill for senior engineers navigating modern development.