---
title: WaterLily Solver Achieves Near-Ideal Scalability With MPI And Multigrid
source: arxiv
url: http://arxiv.org/abs/2607.07687v2
date: '2026-07-08'
tags:
- arxiv
- catchup
- cs.DC
- gpu-computing
- incompressible-flow-solver
- mpi-parallelism
- multigrid-solver
- physics.comp-ph
- physics.flu-dyn
- scalability
- waterlily
arxiv_id: '2607.07687'
categories: physics.comp-ph, cs.DC, physics.flu-dyn
why_read: This article details the significant performance and scalability enhancements
  in the WaterLily incompressible flow solver. It provides insight into achieving
  near-ideal strong and weak scaling using MPI and improved geometric multigrid methods.
authors:
- Bernat Font
- Marin Lauber
- Tzu-Yao Huang
- Gabriel D. Weymouth
---

Achieving true scalability in scientific computing is always a challenge. This paper demonstrates impressive performance developments for WaterLily.jl, an incompressible flow solver written in Julia.

With newly added MPI-based parallelism, strong-scalability tests show a near-ideal linear trend. Weak-scaling efficiency remains above 85% even before memory-concurrency limits.

Crucially, inter-node weak scalability is sustained above 96% with grid sizes up to 1 billion cells. This showcases robust distributed system design.

Engineers building scalable distributed systems can learn valuable lessons from these optimizations, especially the improvements to the geometric multigrid Poisson solver, applicable far beyond fluid dynamics.
