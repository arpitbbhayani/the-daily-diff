---
title: AI coding agent's capabilities in Oracle Forms to Java migration
source: hn
url: https://vaadin.com/blog/oracle-forms-to-java-a-two-week-ai-migration-experiment
date: '2026-09-10'
tags:
- ai-coding-agent
- catchup
- hn
- java-migration
- migration-workflow
- oracle-forms
- spring-boot
- vaadin
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49642379'
comments: https://news.ycombinator.com/item?id=49642379
why_read: This article details a two-week experiment on migrating an Oracle Forms
  application to Java using an AI coding agent. Readers will learn about the practical
  workflow and findings of AI-assisted legacy system migration.
authors:
- Jean-Christophe Gueriaud
---

Migrating legacy systems is a notorious engineering challenge, but an experiment demonstrated how AI coding agents can dramatically accelerate this process. A two-week project successfully migrated an Oracle Forms application to Vaadin and Spring Boot using Claude Code.

The key insight was not simply pointing the AI at the code. Before the migration began, critical architectural decisions (e.g., framework, persistence layer, layout strategy) were explicitly defined. These decisions formed a ruleset that effectively guided the AI agent.

The migration was broken into logical stages: first, extracting a technical inventory from the source, then merging this with the architectural ruleset into a concrete specification, and only then proceeding with the actual code transformation. This structured approach proved essential.

This experiment offers a valuable blueprint for leveraging AI agents in complex engineering tasks, highlighting the indispensable role of human architectural foresight and workflow design.
