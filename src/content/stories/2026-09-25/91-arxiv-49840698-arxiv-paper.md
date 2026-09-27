---
title: ArXiv Paper
source: arxiv
url: https://arxiv.org/abs/49840698
date: '2026-09-25'
tags:
- arxiv
- catchup
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
arxiv_id: '49840698'
categories: ''
why_read: You will learn about a critical vulnerability in tool-using LLM agents,
  specifically how the interaction between the LLM and its "decoding harness" can
  be exploited to bypass safety mechanisms and force undesired actions. This is essential
  for building robust and secure AI agents.
---

The safety of your tool-using LLM agent is not solely a model property; it is a joint property of the model and its decoding harness. New research reveals a critical control-token injection attack that exploits this.

This attack bypasses chain-of-thought reasoning by manipulating how the LLM's chat template is rendered and tool calls are parsed. Attackers can append specific control tokens to user messages, causing the model to skip its reasoning steps and proceed directly to tool execution.

The paper shows this converts 39.6% of the model's refusals into completed exfiltrations. This highlights that robust LLM system design requires vigilance not just on model weights, but equally on the surrounding software that interprets and executes agent outputs.

It is a stark reminder that context engineering and parsing logic are as crucial for security as the model itself.
