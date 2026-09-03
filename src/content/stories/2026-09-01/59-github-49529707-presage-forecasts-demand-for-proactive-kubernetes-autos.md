---
title: Presage forecasts demand for proactive Kubernetes autoscaling
source: github
url: https://github.com/breezycourses/presage
date: '2026-09-01'
tags:
- catchup
- demand-prediction
- github
- in-cluster-forecasting
- kubernetes-autoscaling
- proactive-scaling
- time-series-forecasting
- timesfm
section: systems
interest_score: 8
depth_score: 8
utility_score: 9
novelty_score: 8
hn_id: '49529707'
comments: https://news.ycombinator.com/item?id=49529707
why_read: This text introduces Presage, an in-cluster forecasting autoscaler for Kubernetes.
  Readers will learn how it uses time-series models like TimesFM to proactively provision
  resources, eliminating the latency issues of conventional reactive autoscalers.
authors:
- subhamkts
---

Your Kubernetes autoscaler is always late, but it does not have to be.

Traditional autoscalers notice demand at 9:00 and only begin provisioning a pod that is ready at 9:02. For two crucial minutes, your service is short-staffed every single morning. Presage, an innovative in-cluster Kubernetes autoscaler, solves this by forecasting demand with Google's TimesFM model.

This system provisions resources *before* they are actually needed, sidestepping the inherent latency of reactive scaling. Crucially, it performs this forecasting without requiring any training or data to leave your cluster, maintaining privacy and security.

This shifts autoscaling from reactive to predictive, dramatically improving resource efficiency and service quality.
