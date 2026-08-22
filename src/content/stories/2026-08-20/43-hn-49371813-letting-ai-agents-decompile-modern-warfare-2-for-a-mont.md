---
authors:
- Maurice
comments: https://news.ycombinator.com/item?id=49371813
date: '2026-08-20'
depth_score: 8
hn_id: '49371813'
image: /infographics/43-hn-49371813.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-agents
- catchup
- claude
- decompilation
- distributed-systems
- ghidra
- hn
- ida-pro
- modern-warfare-2
title: Letting AI Agents Decompile Modern Warfare 2 for a Month
url: https://momo5502.com/posts/2026-08-17-mw2-decompilation/
utility_score: 8
why_read: 'This post details an ambitious experiment using multiple AI agents to decompile
  Call of Duty: Modern Warfare 2. Readers will learn about the practical setup, workflow,
  and initial progress of distributed AI agents tackling a complex reverse engineering
  task.'
---

It is genuinely surprising how far multi-agent AI systems can push complex engineering tasks. One engineer leveraged a team of Claude agents to decompile Call of Duty: Modern Warfare 2 into C++, reporting 34 percent completion after just one month and 7,000 commits.

The setup involved three worker agents tackling different subsystems and an overseer agent reviewing every push. They communicated via Discord and managed tasks through GitHub issues, integrating with industry-standard tools like Ghidra and IDA Pro.

This is not just a theoretical exercise; it showcases a practical blueprint for deploying LLMs as a coordinated engineering workforce. It provides concrete insights into workflow, tooling, and the sheer scale of computation (200 billion tokens) needed for such ambitious code transformation projects. This approach could redefine how we tackle large-scale reverse engineering and code migration challenges.