---
title: Xaidr Delivers In-Process Runtime Security for AI Agents
source: github
url: https://github.com/delphisecurity/xaidr
date: '2026-08-16'
tags:
- ai-security
- catchup
- github
- in-process-security
- jailbreak-prevention
- prompt-injection
- runtime-security
- secret-leakage
- tool-call-security
- zero-dependencies
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49322372'
comments: https://news.ycombinator.com/item?id=49322372
why_read: Read this to understand a novel approach to securing AI agents at runtime.
  You will learn about xaidr, an in-process, zero-dependency solution that prevents
  prompt injection and destructive tool calls by inspecting agent actions directly.
authors:
- delphiaisec
---

Runtime security for AI agents is an emerging, critical challenge, and Xaidr offers a compelling, in-process solution. This tool inspects agent actions—from user input to tool calls and A2A messages—to proactively block prompt injection, jailbreaks, and destructive tool calls before they execute. 

What makes Xaidr stand out is its architecture: zero dependencies, local execution, and less than 1ms latency for scans. This means security is baked directly into your agent's operation without introducing external network calls or performance bottlenecks. 

For any senior engineer deploying AI agents, understanding and implementing such practical security measures is paramount. Xaidr provides a robust blueprint for building safer, more reliable agentic systems today.
