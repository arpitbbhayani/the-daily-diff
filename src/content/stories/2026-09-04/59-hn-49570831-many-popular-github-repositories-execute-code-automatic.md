---
title: Many popular GitHub repositories execute code automatically upon opening
source: hn
url: https://veltron.cc/research/what-runs-when-you-open-a-repository
date: '2026-09-04'
tags:
- agent-configuration
- automatic-execution
- catchup
- empirical-study
- github
- hn
- repository-execution
- supply-chain-security
section: engineering
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49570831'
comments: https://news.ycombinator.com/item?id=49570831
why_read: This research quantifies the prevalence of automatic code execution in popular
  GitHub repositories. Readers will learn how often code runs when opening a repository
  and the implications for supply chain security.
authors:
- nulvec
---

You might be surprised to learn what actually happens when you open a Git repository. A recent scan of 10,000 top GitHub repositories found that 25 percent execute something on open, session start, or install.

This figure jumps to 62.3 percent for repositories that include configuration for a coding agent. This trend reveals a rapidly expanding attack surface and new security considerations for developers and CI/CD pipelines.

This is not a minor issue in neglected corners; it is a rising pattern directly correlated with repository popularity and the adoption of AI agents. Better context engineering, perhaps, is not just about model prompts but also about secure development environments.
