---
title: unYOLO secures agent permissions with a credential broker
source: hn
url: https://unyolo.io/
date: '2026-08-09'
tags:
- access-control
- agent-security
- catchup
- credential-broker
- fine-grained-policy
- hn
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49232548'
comments: https://news.ycombinator.com/item?id=49232548
why_read: This describes unYOLO, a framework for secure agent credential management.
  Readers will learn how a credential broker can enforce fine-grained policies and
  prevent agents from directly accessing sensitive tokens, thereby improving security.
authors:
- hosolmaz
---

Deploying AI agents safely, especially when they need to interact with external services, is a major challenge. UnYOLO introduces a vital system design pattern: a credential broker and policy engine that prevents agents from ever holding full, wide-ranging access tokens.

Instead of handing your agent an account-wide GitHub token, UnYOLO's broker acts as an intermediary. The agent requests specific operations, and the broker, governed by a local, fine-grained policy, either approves or denies the action. This drastically limits an agent's blast radius in case of a mistake or compromise.

Imagine an agent needing to merge a pull request. UnYOLO can enforce a policy requiring operator approval, or grant temporary, single-use permissions that expire automatically. This is not just a security feature; it is an essential piece of infrastructure for building robust, auditable, and production-ready agentic AI systems.
