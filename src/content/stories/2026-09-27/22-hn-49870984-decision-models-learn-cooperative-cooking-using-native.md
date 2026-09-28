---
title: Decision models learn cooperative cooking using native game controls
source: hn
url: https://rlafuente.com/posts/2026-9-26-training-a-small-decision-model-to-cook#
date: '2026-09-27'
tags:
- catchup
- cooperative-gameplay
- hn
- native-controls
- natural-language-inference
- openjev
- overcooked
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49870984'
comments: https://news.ycombinator.com/item?id=49870984
why_read: Read this to understand how a language-inference decision model learns cooperative
  multi-agent coordination directly through primitive game controls without external
  planners.
authors:
- Rodney L.
---

Most LLM game agents rely on hefty planning harnesses, pre-computed pathfinding, or structured macro actions to function. A new experiment flips this approach by training a small decision model on a single consumer GPU to play cooperative Overcooked using strictly native controls.

Instead of emitting complex plans, the architecture uses OpenJev to score candidate actions via natural language inference. At every discrete tick, the model chooses directly between six basic actions: stay, up, down, left, right, or interact. There are no navigational subroutines or role assignment layers helping it.

Two independent instances of this identical model learned to coordinate, cook, and serve six soups within 512 ticks. Framing raw action selection as text classification allows a single compact model to generalize across arbitrary control spaces without external scaffolding.

Treating basic interaction as direct language inference demonstrates that small, focused models can handle real-time cooperative tasks without heavy agent orchestration frameworks.
