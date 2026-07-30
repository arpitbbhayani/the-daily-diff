---
authors:
- meysamazad
comments: https://news.ycombinator.com/item?id=49083141
date: '2026-07-28'
depth_score: 8
hn_id: '49083141'
image: /infographics/56-hn-49083141.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- aws-secrets-manager
- catchup
- hn
- identity-based-policy
- least-privilege
- resource-based-policy
- terraform
title: Achieving least-privilege AWS Secrets Manager access using resource policies
url: https://blog.victorsilva.com.uy/aws-secrets-manager-terraform-least-privilege/
utility_score: 9
why_read: This post demonstrates how to implement least-privilege access for AWS Secrets
  Manager using resource-based policies, even when identity-based policies are broad
  and uneditable. Readers will learn a specific Terraform pattern to solve this common
  AWS access challenge.
---

Navigating AWS IAM for least-privilege access can be tricky, especially with pre-baked roles or cross-account setups. This article reveals a powerful Terraform pattern for AWS Secrets Manager.

Instead of fighting broad identity-based policies, you can attach a tightly scoped resource-based policy directly to the secret. This ensures only the intended application has access, even if the calling role has wide permissions.

It is an essential engineering practice for secure system design, demonstrating how to achieve granular access control in complex cloud environments by understanding the interplay between identity and resource policies.