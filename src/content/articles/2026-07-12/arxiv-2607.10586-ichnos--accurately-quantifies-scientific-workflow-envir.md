---
title: Ichnos+ Accurately Quantifies Scientific Workflow Environmental Footprint
source: arxiv
url: http://arxiv.org/abs/2607.10586v1
date: '2026-07-12'
tags:
- apache-airflow
- arxiv
- carbon-emissions
- catchup
- cs.DC
- energy-consumption
- environmental-footprint
- ichnos-plus
- nextflow
- power-models
- scientific-workflows
arxiv_id: '2607.10586'
categories: cs.DC
why_read: This paper introduces Ichnos+, a novel system for accurately quantifying
  the environmental footprint of scientific workflows. Readers will learn how it estimates
  energy, carbon, water, and land use beyond operational carbon across various workflow
  systems.
authors:
- Kathleen West
- Youssef Moawad
- Philipp Thamm
- Vasilis Bountris
- Giulio Attenni
- Magnus Reid
- Yehia Elkhatib
- Lauritz Thamsen
---

Measuring the carbon footprint of large-scale scientific workflows has been difficult, especially in shared, virtualized environments. Existing tools often lack precision or rely on overly generic power models.

Ichnos+ addresses this with a novel system that estimates energy consumption with an impressive 10.8% error across three compute clusters, significantly outperforming other tools. It uses node-specific power models and real-time carbon intensity data.

This system allows for post-hoc footprint estimation from workflow traces, extending beyond operational carbon to include embodied emissions, water, and land use. It is a critical step towards more sustainable distributed computing and engineering practices.
