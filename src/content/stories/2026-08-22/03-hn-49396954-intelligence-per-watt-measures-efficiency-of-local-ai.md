---
title: Intelligence per Watt Measures Efficiency of Local AI
source: hn
url: https://arxiv.org/abs/2511.07885
date: '2026-08-22'
tags:
- catchup
- hardware-accelerators
- hn
- intelligence-efficiency
- intelligence-per-watt
- large-language-models
- local-ai
- power-efficiency
section: ai
interest_score: 9
depth_score: 9
utility_score: 9
novelty_score: 8
hn_id: '49396954'
comments: https://news.ycombinator.com/item?id=49396954
why_read: This paper proposes "intelligence per watt" as a unified metric to measure
  the capability and power efficiency of local AI. It helps understand the viability
  of processing large language model queries on power-constrained local devices rather
  than centralized cloud infrastructure.
authors:
- Jon Saad-Falcon
- Avanika Narayan
- Hakki Orhun Akengin
- J. Wes Griffin
- Herumb Shandilya
- Adrian Gamarra Lafuente
- Medhya Goel
- Rebecca Joseph
- Shlok Natarajan
- Etash Kumar Guha
- Shang Zhu
- Ben Athiwaratkun
- John Hennessy
- Azalia Mirhoseini
- "Christopher R\xE9"
---

The paradigm of centralized, cloud-based LLM inference is straining under demand. This paper introduces "Intelligence per Watt (IPW)" 

a unified metric for measuring both accuracy and efficiency of local AI inference. It is a critical shift in how we think about scaling AI. The authors empirically evaluate over 20 state-of-the-art local LLMs and 8 hardware accelerators (both local and cloud), using a staggering one million real-world chat and reasoning queries. This is not just theoretical; they are providing concrete data on what truly performs efficiently.

For senior engineers tackling LLM infrastructure and system design, this research offers invaluable insights into decentralizing AI. It provides a robust framework to choose optimal model-accelerator configurations for power-constrained devices, directly impacting your architecture decisions for scalable, local AI deployments.
