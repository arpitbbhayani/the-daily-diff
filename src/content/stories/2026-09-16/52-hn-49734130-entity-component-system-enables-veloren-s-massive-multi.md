---
title: Entity Component System enables Veloren's massive multiplayer scalability
source: hn
url: https://blog.jsbarretto.com/post/veloren
date: '2026-09-16'
tags:
- catchup
- entity-component-system
- game-development
- game-engine-design
- hn
- multiplayer-games
- scalability
- veloren
section: systems
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49734130'
comments: https://news.ycombinator.com/item?id=49734130
why_read: Read this to learn how the Entity Component System (ECS) architecture enables
  massive scalability in the multiplayer game Veloren and understand some of its unique
  characteristics and development quirks. It offers insights into practical game engine
  design choices.
authors:
- agluszak
---

Building truly scalable multiplayer game servers is notoriously difficult, but the Veloren project offers concrete lessons. Their core developers made a deliberate choice to use an Entity Component System (ECS) over traditional object-oriented hierarchies, and it paid off.

This architectural decision allows Veloren to scale significantly, comfortably handling over 500 players and tens of thousands of entities on a single 48-thread server, achieving 50 percent core utilization. The ECS approach intrinsically promotes polymorphism, leading to flexible, yet sometimes surprising, behaviors.

One example highlights this: a botched transition once caused players to 'pick up' other players due to incorrect ItemDrop component assignment. This illustrates the unexpected quirks of ECS, proving that even powerful architectural choices come with their own unique challenges.

The blog post offers a rare, honest look at the practical trade-offs in building a complex, scalable system. It is a must-read for anyone designing high-performance, interactive architectures.
