---
authors:
- nephrenka
comments: https://news.ycombinator.com/item?id=49641699
date: '2026-09-10'
depth_score: 8
hn_id: '49641699'
image: /infographics/62-hn-49641699.jpg
interest_score: 8
novelty_score: 8
section: engineering
source: hn
tags:
- agents
- catchup
- hn
- tdd
- test-driven-development
title: Practices abandoned with agents and an ode to test-driven development
url: https://adamtornhill.substack.com/p/practices-i-abandoned-with-agents
utility_score: 9
why_read: This piece reflects on practices abandoned due to the adoption of agents,
  offering insights into the evolving landscape of test-driven development. Readers
  will learn how using agents might alter traditional TDD workflows and perspectives.
---

Developing AI agents breaks many traditional software engineering paradigms, and one of the biggest casualties might be Test-Driven Development. If you are struggling to apply TDD to your agentic workflows, you are not alone.

Traditional TDD relies on deterministic outcomes and predictable state. AI agents, by their nature, are non-deterministic, exhibit emergent behaviors, and their "tests" often involve evaluating vague success criteria rather than strict assertions. The cost of thoroughly testing every permutation of an agent's interaction space becomes astronomical.

This piece dives into alternative approaches and the mental models needed to build robust agent systems. It is not about abandoning testing entirely, but rather shifting focus to different validation strategies, robust monitoring, and leveraging human-in-the-loop evaluations.

Rethinking core engineering practices for AI agents is paramount for productivity and reliability.