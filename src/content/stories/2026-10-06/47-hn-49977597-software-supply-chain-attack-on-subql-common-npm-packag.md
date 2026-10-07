---
title: Software supply chain attack on subql common npm package
source: hn
url: https://flatt.tech/research/posts/subql-common-npm-supply-chain-attack/
date: '2026-10-06'
tags:
- catchup
- credential-theft
- github-actions
- hn
- npm
- postinstall-hooks
- supply-chain-attack
section: engineering
is_news: false
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 6
hn_id: '49977597'
comments: https://news.ycombinator.com/item?id=49977597
why_read: Understand how attackers compromised CI/CD workflows to publish a malicious
  npm package and learn defense strategies against multi-stage supply chain attacks.
authors:
- GMO Flatt Security Research
---

A recent software supply chain attack on the @subql/common package demonstrates how trusted publishing mechanisms can be turned against developers. The attacker did not steal an npm authentication token. Instead, they compromised the project GitHub Actions continuous integration workflow and published a malicious package using OpenID Connect trusted publishing.

The payload utilized an npm postinstall hook to execute an obfuscated loader, which deployed a multi-function credential harvester and reverse shell. It specifically targeted credentials for AWS, GitHub, Kubernetes, and HashiCorp Vault. Because the publication occurred through an authorized continuous integration pipeline with valid OpenID Connect provenance, the release looked legitimate to standard verification checks.

Defending against this pattern requires proactive pipeline boundaries. Teams must disable automated package lifecycle scripts during installation, enforce dependency cooldown periods, and restrict repository write permissions on build pipelines.

Securing source code means nothing if your automated build pipeline can be weaponized against you.
