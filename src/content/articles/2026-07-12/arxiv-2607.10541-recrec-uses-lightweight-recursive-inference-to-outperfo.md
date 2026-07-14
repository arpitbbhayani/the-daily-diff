---
title: RecRec uses lightweight recursive inference to outperform deep sequential recommenders
source: arxiv
url: http://arxiv.org/abs/2607.10541v1
date: '2026-07-12'
tags:
- arxiv
- catchup
- cs.IR
- cs.LG
- evidence-anchored-correction
- latent-state
- model-efficiency
- recursive-inference
- semantic-drift
- sequential-recommendation
arxiv_id: '2607.10541'
categories: cs.IR, cs.LG
why_read: This paper introduces RecRec, a novel lightweight model for sequential recommendation
  that employs recursive inference and an evidence-anchored correction mechanism.
  Readers will understand how a persistent latent state, iteratively refined, can
  outperform deeper architectures while preventing semantic drift and enhancing parameter
  efficiency.
authors:
- Pervez Shaik
- Prosenjit Biswas
- Abhinav Thorat
- Ravi Kolla
- Niranjan Pedanekar
---

Many sequential recommender systems rely on increasingly deep architectures for performance. This paper introduces RecRec, a lightweight model that rethinks this with a recursive inference approach for user preference modeling.

RecRec maintains a compact latent state, refined through a shared recursive module. Crucially, it uses an evidence-anchored correction mechanism to prevent semantic drift, grounding each update in the original interaction context.

The results are compelling: RecRec matches or outperforms state-of-the-art recommenders on three benchmark datasets, using only 3.9M to 14M parameters. This is a significant win for efficient applied AI and system design, offering a scalable alternative to larger, language-based models.
