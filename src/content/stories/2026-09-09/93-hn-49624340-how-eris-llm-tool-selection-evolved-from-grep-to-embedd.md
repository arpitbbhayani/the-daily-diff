---
authors:
- Jan Paul Dahlke
comments: https://news.ycombinator.com/item?id=49624340
date: '2026-09-09'
depth_score: 8
hn_id: '49624340'
image: /infographics/93-hn-49624340.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- catchup
- embeddings
- gbnf-grammar
- grep
- hn
- llm-tool-calling
- policy-layer
- tool-selection
title: How Eris LLM tool selection evolved from grep to embeddings
url: https://eris-system.dev/blog/tool-routing
utility_score: 9
why_read: This post offers an honest account of the iterative development of an LLM
  tool selection mechanism in the Eris project. Readers will gain insight into the
  practical challenges and evolving solutions for enabling a small language model
  to pick the correct tool from a diverse set.
---

Building reliable LLM agents, especially with smaller local models, often founders on effective tool routing. This post offers an honest, in-depth look at how one team iterated through solutions, starting from basic grep to advanced embeddings and GBNF grammars for tool selection.

The progression from simple keyword matching to a sophisticated policy layer combining embeddings and context-aware grammar is highly instructive. It demonstrates that more complex problems are not solved with larger models alone, but with smarter scaffolding and context engineering, significantly improving a 14B model's ability to call one of 50 tools correctly.

Engineers building agentic systems will find direct, actionable insights on creating robust, efficient tool invocation mechanisms, proving that thoughtful architectural evolution is key to practical agent performance.