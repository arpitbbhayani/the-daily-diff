---
title: ADR secures enterprise AI agents with observability and threat detection
source: github
url: https://github.com/uber/ADR
date: '2026-08-06'
tags:
- ai-agents
- catchup
- enterprise-security
- github
- observability
- security-benchmarking
- threat-detection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49197869'
comments: https://news.ycombinator.com/item?id=49197869
why_read: This describes ADR, an enterprise security system for AI agents, detailing
  its capabilities in observing, benchmarking, detecting, and preventing unsafe actions.
  Readers will understand a practical approach to securing AI agents in production
  environments.
authors:
- Uber
---

Uber has open-sourced ADR (Agentic AI Detection and Response), a powerful enterprise security system designed to protect AI agents like coding assistants and customer support bots. This is a critical development for anyone deploying AI in production environments.

ADR offers four core capabilities: observing agent activity, evaluating defenses, detecting threats, and preventing unsafe actions. It captures agent intent, tool use, and execution traces across major AI coding tools on multiple operating systems, providing invaluable telemetry.

The system includes ADR-Bench, with over 300 tasks to test agent security under realistic enterprise conditions. This offers a blueprint for how large organizations can build secure, observable, and resilient AI agent infrastructure.
