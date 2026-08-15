---
authors:
- rcarmo
comments: https://news.ycombinator.com/item?id=49286431
date: '2026-08-13'
depth_score: 8
hn_id: '49286431'
image: /infographics/70-hn-49286431.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- authenticated-access
- catchup
- curated-writes
- data-indexing
- git-based-storage
- hn
- knowledge-management
- markdown-content
- multi-agent-systems
- natural-language-processing
title: Memento stores knowledge to outlive conversations and serve multiple agents
url: https://rcarmo.github.io/projects/memento/
utility_score: 8
why_read: This text introduces memento, a system designed for persistent knowledge
  storage across various agents. Readers will learn about its architectural components,
  including Git for history, Markdown for concept files, and a Needle model for natural
  language request classification, alongside its unique write review process.
---

Building truly capable multi-agent AI systems hinges on robust, shared memory that outlives individual conversations. Memento offers a compelling blueprint for such a system, integrating several mature technologies to create a durable knowledge store.

It leverages Git for version control of Markdown-based "concepts," providing history and auditability, while using FTS5, graph, and vector indices for efficient querying. A fine-tuned local LLM routes natural language requests, ensuring structured interaction.

Crucially, mutations follow a propose-review-apply workflow, giving human curators oversight before changes reach the shared repository. This blend of structured data, flexible indexing, LLM interaction, and human-in-the-loop control offers a practical and scalable approach to agent knowledge management.