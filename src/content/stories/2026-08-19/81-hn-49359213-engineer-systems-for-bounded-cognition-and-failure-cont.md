---
title: Engineer systems for bounded cognition and failure containment
source: hn
url: https://shapeofthesystem.com/
date: '2026-08-19'
tags:
- blast-radius
- bounded-cognition
- catchup
- correctness
- failure-containment
- hn
- locality-of-reasoning
- system-design
section: engineering
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 7
hn_id: '49359213'
comments: https://news.ycombinator.com/item?id=49359213
why_read: This text challenges the traditional view of software reliability by advocating
  for system design that inherently prevents errors, rather than relying on human
  vigilance. It offers insights into building robust systems by minimizing cognitive
  load for engineers and containing the blast radius of failures.
authors:
- Bluestein
---

How do you build systems that do not break at 3 AM? It is not about perfect vigilance; it is about building structure that makes correctness the default, even for tired engineers. This article deeply explores "structure over vigilance."

The core idea is to minimize the cognitive burden on engineers. Any rule that requires remembering will eventually be forgotten. Instead, bake defenses and correctness into the system's shape. This means considering how changes are verified locally and how failure blast radii are contained.

You will learn tenets like "locality of reasoning," where a reader can verify code correctness by examining only that piece and its declared inputs. This approach radically improves maintainability, reduces errors, and ultimately leads to more scalable and resilient systems by design, not by heroics.
