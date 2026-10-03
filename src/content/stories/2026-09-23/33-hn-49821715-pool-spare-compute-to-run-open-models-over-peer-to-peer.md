---
title: Pool spare compute to run open models over peer-to-peer networks
source: hn
url: https://www.iroh.computer/blog/buzz-agent-workspaces
date: '2026-09-23'
tags:
- catchup
- distributed-inference
- hn
- iroh
- meshllm
- open-models
- peer-to-peer-networking
- spare-compute
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49821715'
comments: https://news.ycombinator.com/item?id=49821715
why_read: Learn how Buzz leverages peer-to-peer protocols to let teams pool idle hardware
  for decentralized model inference without central servers.
authors:
- karissa
---

Local AI models run into a familiar constraint when scaled across teams: dedicated hardware is expensive, while powerful developer laptops sit idle most of the day. Block's new project, Buzz, tackles this bottleneck by integrating P2P networking directly into the agent runtime.

Built on top of Iroh, Buzz introduces MeshLLM, a decentralized system that advertises available model capacity across a trusted workspace perimeter. Instead of routing requests through a central cluster or paying third-party API gateways, agents query local peer nodes over an OpenAI-compatible interface.

The relay coordinates node discovery and cryptographic access control, but the inference payloads travel entirely peer-to-peer. This design eliminates centralized inference choke points and converts distributed workstation compute into an elastic cluster for running autonomous coding agents.

Treating developer hardware as peer infrastructure is a practical paradigm shift for team-wide LLM deployments.
