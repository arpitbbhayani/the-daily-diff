---
title: Frontier vision-language models directly orchestrate composable humanoid robot
  skills
source: hn
url: https://tml.stanford.edu/homebody/
date: '2026-09-26'
tags:
- catchup
- composable-skills
- hn
- humanoid-robotics
- loco-manipulation
- spatial-memory
- vision-language-models
section: ai
interest_score: 8
depth_score: 8
utility_score: 7
novelty_score: 8
hn_id: '49859299'
comments: https://news.ycombinator.com/item?id=49859299
why_read: Learn how frontier vision-language models can bypass learned action policies
  to control humanoid robots directly using persistent spatial memory and reusable
  skill libraries.
authors:
- Gio Huh
- Cayden Gu
- Takara E. Truong
- C. Karen Liu
- Guy Tevet
image: /infographics/05-hn-49859299.jpg
---

Humanoid autonomy architectures typically rely on a rigid three-tier stack: a System 2 VLM for high-level reasoning, a learned System 1 VLA model for action translation, and a System 0 controller for low-level motor execution.

Stanford and Caltech researchers introduced HomeBody, an architecture that removes the middle VLA layer entirely. Instead, a frontier vision-language model interfaces directly with a library of reusable, composable motor skills paired with persistent spatial memory.

By leveraging execution feedback, the model can track spatial state across an unseen environment, recover from failed transitions, and execute long-horizon loco-manipulation without needing environment-specific policy training.

Treating robotic actions as a discrete tool-calling library orchestrated by a reasoning model points toward a cleaner, more modular design for embodied agents.
