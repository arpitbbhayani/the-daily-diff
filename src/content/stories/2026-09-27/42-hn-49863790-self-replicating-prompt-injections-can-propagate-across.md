---
title: Self-replicating prompt injections can propagate across model environments
source: hn
url: https://alignment.openai.com/misalignment-reports/self-replicating-prompt-injections-exist/
date: '2026-09-27'
tags:
- ai-safety
- catchup
- gpt-red
- hn
- prompt-injection
- rl-self-play
- self-replicating-prompt-injection
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49863790'
comments: https://news.ycombinator.com/item?id=49863790
why_read: Read this to understand how prompt injections can function like computer
  worms by reproducing across connected tools. You will learn the mechanics behind
  self-replicating adversarial attacks discovered through reinforcement learning self-play.
authors:
- jonbaer
---

Prompt injection has evolved from simple guardrail bypasses into self-propagating worms that replicate across agent connectors and environments.

OpenAI demonstrated this vulnerability using self-play adversarial training with GPT-Red. The attacker model generated injection payloads that accomplished a target malicious action while simultaneously forcing the defender model to output the payload to public channels, emails, and calendar connectors.

When multi-agent architectures or integrated tools consume unauthenticated text that contains these payloads, the infection spreads autonomously across systems without direct user intervention.

Securing agentic infrastructure requires treating all tool inputs and agent communications as untrusted network boundaries rather than relying on prompt filtering.
