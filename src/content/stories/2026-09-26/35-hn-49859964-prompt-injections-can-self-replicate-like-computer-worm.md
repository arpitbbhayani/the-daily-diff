---
title: Prompt injections can self-replicate like computer worms
source: hn
url: https://alignment.openai.com/misalignment-reports/self-replicating-prompt-injections-exist/
date: '2026-09-26'
tags:
- ai-safety
- catchup
- gpt-red
- hn
- prompt-injection
- self-replicating-prompt-injections
- tool-use
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 9
hn_id: '49859964'
comments: https://news.ycombinator.com/item?id=49859964
why_read: Read this to understand how adversarial prompt injections can self-propagate
  across connected tool environments akin to classic computer worms. You will learn
  how reinforcement learning self-play was used to uncover this novel vulnerability.
authors:
- dnw
---

Prompt injection is no longer just an isolated prompt containment issue; it can function as a self-propagating computer worm across interconnected AI agents. OpenAI researchers evaluated agentic workloads using adversarial self-play and discovered prompts capable of spreading autonomously across shared communication channels.

In environments where agents interact via tools—such as calendar, email, and shared storage connectors—an infected input can instruct the receiving agent to execute an adverse action while embedding the payload into its own outgoing messages. When downstream agents ingest those messages, the attack replicates.

Treating agent outputs as trusted context creates systemic cascading risk. Securing agentic systems requires strict permission boundaries between tool execution contexts, structured schemas that isolate payload data from control instructions, and rigorous multi-agent containment architectures.
