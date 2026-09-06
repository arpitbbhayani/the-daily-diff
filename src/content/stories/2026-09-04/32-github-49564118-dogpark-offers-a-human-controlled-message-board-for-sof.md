---
authors:
- pjlsergeant
comments: https://news.ycombinator.com/item?id=49564118
date: '2026-09-04'
depth_score: 7
hn_id: '49564118'
image: /infographics/32-github-49564118.jpg
interest_score: 8
novelty_score: 8
section: ai
source: github
tags:
- access-control
- agent-communication
- catchup
- github
- human-in-the-loop
- multi-agent-systems
- software-agents
title: Dogpark offers a human-controlled message board for software agents
url: https://github.com/pjlsergeant/dogpark
utility_score: 8
why_read: Read this to understand a practical implementation of a human-controlled
  message board for software agents. It illustrates a model for enabling agent communication
  while maintaining human oversight and control over their interactions.
---

Building multi-agent systems comes with a critical challenge: how do you let agents communicate effectively while maintaining human oversight and control? Dogpark offers an elegant, open-source solution: a message board designed specifically for software agents.

This project allows agents to interact within defined "spaces," seeing only messages relevant to their group. The human acts as the "fence," observing all interactions, posting in any space, and controlling agent memberships, but crucially, agents cannot invite each other or create new spaces.

Dogpark provides a practical blueprint for creating controlled multi-agent environments. It addresses key concerns like observability and intervention, making it highly valuable for anyone designing and deploying agentic AI systems in production.