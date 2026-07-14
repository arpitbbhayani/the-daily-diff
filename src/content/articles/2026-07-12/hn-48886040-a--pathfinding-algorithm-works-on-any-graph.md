---
title: A* Pathfinding Algorithm Works on Any Graph
source: hn
url: https://redblobgames.github.io/circular-obstacle-pathfinding/
date: '2026-07-12'
tags:
- a-star-algorithm
- catchup
- circular-obstacles
- graph-theory
- heuristic
- hn
- pathfinding
- priority-queue
score: 16
hn_id: '48886040'
comments: https://news.ycombinator.com/item?id=48886040
why_read: This text demonstrates how the A* algorithm, often associated with grids,
  can be applied to any graph to solve pathfinding problems, such as navigating around
  circular obstacles. Readers will learn the core mechanics of A*, including its use
  of priority queues and heuristic underestimates for optimal path discovery.
authors:
- andsoitis
author: andsoitis
---

The A* pathfinding algorithm is a staple, but its application often seems limited to grids. This article showcases how A* can be effectively used to navigate complex environments with circular obstacles.The key insight is generalizing A* to work on any graph, not just grid-based maps. This involves carefully defining nodes and edges that represent tangent points and clear paths around obstructions, allowing for optimal path computation in non-grid worlds.Understanding this generalization is crucial for anyone working with applied AI, robotics, or game development where agents need to navigate realistic, dynamic environments. It highlights the algorithm's adaptability when designed thoughtfully.Revisit A* and unlock its potential in complex, non-grid environments.
