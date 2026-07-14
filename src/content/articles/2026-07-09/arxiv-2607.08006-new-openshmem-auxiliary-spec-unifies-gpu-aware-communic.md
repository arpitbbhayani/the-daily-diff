---
title: New OpenSHMEM Auxiliary Spec Unifies GPU-Aware Communication
source: arxiv
url: http://arxiv.org/abs/2607.08006v1
date: '2026-07-09'
tags:
- accelerators
- arxiv
- catchup
- cs.DC
- gpu-aware-communication
- gpus
- hpc
- memory-model
- openshmem
- pgas
- portability
- vendor-neutral
arxiv_id: '2607.08006'
categories: cs.DC
why_read: This paper explains how a proposed OpenSHMEM auxiliary specification can
  provide portable, vendor-neutral GPU-aware communication, addressing current fragmentation
  across different GPU implementations. Readers will understand a practical approach
  to unifying programming models for accelerator-centric HPC systems.
authors:
- Naveen Ravi
- Nathan Wichmann
- Md. Wasi-ur- Rahman
- Aurelien Bouteiller
- "Y\u0131ltan Hassan Temu\xE7in"
- Avinash Kethineedi
- Johnathan Alsop
- Brandon Potter
- Shubhendra Pal Singhal
- Jun Shirako
- Akihiro Hayashi
- Vivek Sarkar
- Lawrence C. Stewart
- Michael Beebe
- Benjamin Michalowicz
- Jeongnim Kim
- Thiago Teixeria
- Mark F. Brown
- Aaron Welch
- Oscar Hernandez
- Wendy Poole
- Steve Poole
---

HPC systems are now accelerator-centric, but GPU-aware OpenSHMEM implementations are fragmented. This creates portability nightmares.

This paper proposes an OpenSHMEM Auxiliary Specification for GPU-Aware Communication. It is designed as a lightweight, backward-compatible extension to unify memory management and operation semantics across diverse GPU architectures.

The goal is to provide a vendor-neutral specification for fine-grained remote memory operations, atomics, and synchronization directly on GPU-attached buffers. This is a crucial step towards cohesive, portable distributed computing on next-gen hardware.

Unified GPU-aware communication is essential for scalable HPC and distributed systems.
