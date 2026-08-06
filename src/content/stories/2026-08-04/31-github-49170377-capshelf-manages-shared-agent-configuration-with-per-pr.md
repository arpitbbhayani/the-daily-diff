---
title: Capshelf manages shared agent configuration with per-project isolation
source: github
url: https://github.com/genged/capshelf
date: '2026-08-04'
tags:
- catchup
- cli-tool
- coding-agents
- configuration-management
- git-backed
- github
- lockfiles
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49170377'
comments: https://news.ycombinator.com/item?id=49170377
why_read: This describes Capshelf, a Git-backed CLI tool for sharing coding-agent
  configurations across multiple projects. Readers will learn how to efficiently manage
  and synchronize agent skills and settings while ensuring project stability through
  per-project lockfiles.
authors:
- mstr32
---

Managing AI agent configurations across multiple projects can quickly become a nightmare, leading to configuration drift and duplicated efforts. Capshelf introduces a Git-backed CLI that solves this by allowing you to share agent 'skills' and settings with per-project lockfiles. This is a game changer for agentic development. You can define a skill once and reuse it across numerous repositories, ensuring consistency and preventing a change in one project from inadvertently affecting another. This mirrors dependency management in traditional software. The tool manages everything from agent definitions to tool extensions and settings, making it practical for teams building complex multi-agent systems. This approach significantly streamlines development workflows and enhances the robustness of your AI applications. It is a critical piece of infrastructure for moving AI agents from experiments to production. If you are building with AI agents, you need this clarity and control.
