---
title: Why in-app AI chat failed and how a remote agent replaces it
source: hn
url: https://sensefold.app/blog/agent-as-first-class-user
date: '2026-09-16'
tags:
- ai-agent
- ai-chat
- ai-workflow
- api-integration
- catchup
- hn
- llm-integration
- user-experience
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49729808'
comments: https://news.ycombinator.com/item?id=49729808
why_read: This post explains why traditional in-app AI chat failed due to user experience
  issues and how Sensefold replaced it with a remote agent integrated directly into
  existing large language model clients.
authors:
- gomilesfd
---

Many early AI product integrations feature an in-app chatbox, but this article highlights a critical flaw: users prefer their existing LLM clients with accumulated memory and custom instructions. The lesson? Do not build another chat.

The team made a bold move by killing their in-app AI chat. Instead, they re-architected to make the agent a "first-class user" through a remote MCP server. This allows agents to seamlessly connect to a user's chosen client (e.g., Claude, ChatGPT) and access their library directly.

This is a powerful shift in thinking about agent integration: empower agents to operate within the user's established workflow and context, rather than forcing users into isolated product experiences. This approach significantly boosts utility and adoption for applied AI systems.
