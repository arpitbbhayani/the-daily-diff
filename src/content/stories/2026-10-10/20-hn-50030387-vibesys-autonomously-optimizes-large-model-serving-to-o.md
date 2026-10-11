---
title: VibeSys autonomously optimizes large model serving to outperform SGLang
source: hn
url: https://syfi.cs.washington.edu/blog/2026-10-08-qwen35-mi300a/
date: '2026-10-10'
tags:
- catchup
- delta-net
- hn
- inference-engine
- mi300a
- mixture-of-experts
- qwen3-5-397b
- sglang
- vibesys
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 8
hn_id: '50030387'
comments: https://news.ycombinator.com/item?id=50030387
why_read: Read this to understand how multi-agent systems can autonomously build and
  optimize specialized model serving engines for complex hardware architectures. You
  will learn practical techniques for tuning hybrid mixture-of-experts models to substantially
  outperform general-purpose runtimes.
authors:
- Vic Shihang Li
- Keisuke Kamahori
- Simon Peter
- Baris Kasikci
---

Building specialized LLM inference engines usually requires months of manual profiling, CUDA tuning, and kernel adaptation. Researchers at the University of Washington just showed that a multi-agent system called VibeSys can do this entirely autonomously.

Over the course of 105 hours, the agent cluster took a baseline PyTorch implementation of Qwen3.5-397B and tuned it on four AMD MI300A chips. The agents reached 2,242 tokens per second of SLO-compliant goodput, outperforming a tuned deployment of SGLang by 2.33 times. No human engineer wrote any engine code during the process.

The system adapted to complex architectural realities, including hybrid Mixture-of-Experts with 512 routed experts, Gated DeltaNet linear attention, and shared HBM3 memory across CPU and GPU cores. Instead of relying on generic runtimes, the agents wrote bespoke model- and hardware-aware optimizations tailored to the exact workload.

This marks a genuine shift from general-purpose runtimes to disposable, machine-generated serving infrastructure.
