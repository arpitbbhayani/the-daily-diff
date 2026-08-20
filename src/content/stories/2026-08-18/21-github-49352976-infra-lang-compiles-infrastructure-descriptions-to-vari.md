---
title: Infra Lang compiles infrastructure descriptions to various platforms
source: github
url: https://github.com/TuviDev/infra-lang
date: '2026-08-18'
tags:
- catchup
- declarative-configuration
- devops
- docker-compose
- dsl
- github
- github-actions
- infra-lang
- infrastructure-as-code
- kubernetes
- terraform
section: systems
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 7
hn_id: '49352976'
comments: https://news.ycombinator.com/item?id=49352976
why_read: This introduces Infra Lang, a DSL for defining infrastructure once and compiling
  it to multiple platforms like Kubernetes and Docker Compose, enabling a single source
  of truth and reducing maintenance overhead.
authors:
- TuviDev
---

The proliferation of infrastructure tools like Kubernetes, Terraform, and Docker Compose often leads to configuration fatigue and duplicated effort. Infra Lang offers a compelling solution: a single declarative DSL that compiles your infrastructure definition to all these platforms, plus CI workflows.

Imagine defining your services, databases, queues, and pipelines once in a `.infra` file. Infra Lang then generates the specific YAML, HCL, or workflow files needed for your chosen deployment targets. This eliminates the need to manually translate and maintain the same application configuration across heterogeneous environments.

This project directly tackles a major pain point for platform engineers and SREs, offering substantial improvements in developer productivity and consistency. It is a powerful example of how smart abstraction can simplify complex system design challenges.
