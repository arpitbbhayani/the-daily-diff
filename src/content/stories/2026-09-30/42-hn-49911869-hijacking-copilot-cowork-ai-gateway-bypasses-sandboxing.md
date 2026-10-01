---
title: Hijacking Copilot Cowork AI gateway bypasses sandboxing to exfiltrate files
source: hn
url: https://www.promptarmor.com/resources/hijacking-copilot-coworks-ai-gateway-to-exfiltrate-files
date: '2026-09-30'
tags:
- ai-gateway
- catchup
- copilot-cowork
- data-exfiltration
- hn
- malicious-skills
- sandboxing
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '49911869'
comments: https://news.ycombinator.com/item?id=49911869
why_read: Learn how malicious skills manipulate model gateways to circumvent sandbox
  isolation and exfiltrate enterprise files without human approval.
authors:
- PromptArmor Threat Intel
---

Sandboxing an AI agent on the local execution side is entirely useless if the agent retains outbound access to model gateways with tool-calling capabilities.

A recent vulnerability in Microsoft Copilot Cowork demonstrated this exact attack vector. While local network access was blocked inside the agent execution sandbox to prevent direct data leaks, outbound prompts were forwarded upstream to Anthropic model APIs. Attackers exploited this by supplying a malicious Skill bundled with poisoned context, coercing the upstream model to invoke external network-capable tools and exfiltrate sensitive files straight to attacker-controlled endpoints without any local network traffic.

Traditional sandboxes assume the perimeter exists around the process environment. In agentic architectures, the model API itself acts as an execution plane. If your backend forwards untrusted context to an LLM that has tool execution capabilities, you have effectively punched a hole straight through your isolation boundary.

Securing agentic systems requires treating model prompts and tool orchestration as untrusted network boundaries rather than benign compute layers.
