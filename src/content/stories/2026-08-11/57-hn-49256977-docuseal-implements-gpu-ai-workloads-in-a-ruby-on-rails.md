---
authors:
- Pete Matsyburka
comments: https://news.ycombinator.com/item?id=49256977
date: '2026-08-11'
depth_score: 8
hn_id: '49256977'
image: /infographics/57-hn-49256977.jpg
interest_score: 8
novelty_score: 8
section: ai
source: hn
tags:
- ai-field-detection
- catchup
- gpu-ai
- hn
- monolith
- ruby-on-rails
- sidekiq
- tensorrt
title: DocuSeal Implements GPU AI Workloads in a Ruby on Rails Monolith
url: https://www.docuseal.com/blog/gpu-ai-workloads-with-a-ruby-on-rails-monolith
utility_score: 8
why_read: This article explains how to run GPU-accelerated AI workloads within a Ruby
  on Rails monolith. Readers will learn DocuSeal's approach to integrating computer
  vision models using custom TensorRT Ruby bindings and Sidekiq.
---

Integrating GPU AI into your existing Ruby on Rails monolith, without Python or microservices? DocuSeal did exactly that, and their approach offers a fascinating blueprint for applied AI within a conventional stack.

They tackled computer vision field detection by running NVIDIA TensorRT inference directly within their Ruby process on a GPU instance. The key was creating minimal, single-file C++ Ruby bindings for TensorRT, enabling high-performance GPU utilization.

This demonstrates a genuinely novel engineering practice and system design choice, challenging the automatic assumption of microservices or Python for AI workloads. It is a highly practical example of bridging languages for performance and consolidating infrastructure.