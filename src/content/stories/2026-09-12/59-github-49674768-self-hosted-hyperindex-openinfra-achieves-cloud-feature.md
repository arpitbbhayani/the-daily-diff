---
title: Self-hosted HyperIndex OpenInfra achieves cloud feature parity
source: github
url: https://github.com/TilakMaddy/hyperindex-openinfra
date: '2026-09-12'
tags:
- aws-ec2
- catchup
- flux
- github
- graphql
- hyperindex
- kubernetes
- open-source
- postgresql
- self-hosting
- terraform
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49674768'
comments: https://news.ycombinator.com/item?id=49674768
why_read: Readers interested in self-hosting data indexing infrastructure will learn
  how HyperIndex OpenInfra provides a feature-rich, cost-effective alternative to
  cloud services using Kubernetes, Terraform, and Flux.
authors:
- TilakMaddy
---

Paying $800/month for a cloud indexing service? One engineer reverse-engineered a commercial plan into a completely free, self-hosted solution using Terraform and Flux, deploying a Talos Linux Kubernetes cluster on EC2.

This project provides an entire infrastructure-as-code blueprint. It covers everything: Postgres with CNPG, Hasura, the indexer itself, TLS, DNS, dashboards, and even alerts. You get direct database access, all production-tier alerts, and full ownership of your backups. This means you only pay for EC2, not metered indexing hours.

This is a masterclass in system design and cost optimization for distributed systems. It showcases how to leverage open-source tools to achieve enterprise-grade features, giving you full control and eliminating vendor lock-in. A must-read if you are building scalable, data-intensive applications.
