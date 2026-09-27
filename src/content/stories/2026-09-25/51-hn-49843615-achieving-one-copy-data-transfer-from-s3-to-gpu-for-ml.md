---
title: Achieving one-copy data transfer from S3 to GPU for ML
source: hn
url: https://spiraldb.com/blog/from-s3-to-gpu-in-one-copy
date: '2026-09-25'
tags:
- catchup
- column-pruning
- columnar-file-format
- data-loading
- gpu
- hn
- ml-training
- projection-pruning
- s3
- vortex
section: ai
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49843615'
comments: https://news.ycombinator.com/item?id=49843615
why_read: This explains how to achieve highly efficient data loading for machine learning
  training by moving data directly from S3 to GPU in one copy. Readers will learn
  about technologies like the Vortex columnar file format and techniques such as column
  pruning that enable this high-bandwidth data processing.
authors:
- Onur Satici
---

Loading data for large-scale machine learning training from cloud storage like S3 often becomes a performance bottleneck, but what if you could move it to the GPU in just one copy operation? This QCon talk transcript details exactly that, streaming 4K video at 13 gigabits per second.

The key lies in rethinking the entire data pipeline, from custom columnar file formats like Vortex to leveraging kernel bypass and GPU Direct Storage principles. This eliminates redundant CPU copies and dramatically reduces latency.

This is not merely an optimization; it is a paradigm shift for applied AI, unlocking new levels of efficiency for training massive models by treating data loading as a first-class system design problem.
