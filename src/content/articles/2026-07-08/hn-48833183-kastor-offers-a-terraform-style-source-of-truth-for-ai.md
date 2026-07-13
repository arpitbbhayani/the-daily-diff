---
title: Kastor offers a Terraform-style source of truth for AI agents
source: hn
url: https://github.com/weirdGuy/kastor
date: '2026-07-08'
tags:
- ai-agents
- catchup
- declarative-configuration
- hcl
- hn
- langgraph
- source-of-truth
- state-management
- terraform-style
score: 33
hn_id: '48833183'
comments: https://news.ycombinator.com/item?id=48833183
why_read: This introduces Kastor, a declarative, Terraform-style system for managing
  AI agents. Readers will learn how it aims to provide a versionable source of truth
  for agent configuration and state.
authors:
- weirdGuy
author: weirdGuy
---

Managing complex AI agents often means scattered configurations across code, prompts, and platform UIs. Kastor offers a breakthrough: Terraform-style "source-of-truth" for AI agents.
Define your agents, tools, prompts, and models declaratively using HCL. This brings version control, reviewability, and a clear contract to your agent definitions, treating them as serious software.
Kastor even generates runnable LangGraph code from these specs and provides `plan`, `apply`, and `state` commands for hosted agents. This is infrastructure-as-code for agentic AI.
For senior engineers building multi-agent systems, Kastor promises to revolutionize how you architect, deploy, and manage your AI solutions, ensuring consistency, reducing drift, and elevating engineering practices in the LLM infrastructure space.
