---
title: Log-Insight automates SRE incident diagnosis using structured evidence for
  LLMs
source: arxiv
url: http://arxiv.org/abs/2607.08529v1
date: '2026-07-09'
tags:
- arxiv
- automated-triage
- catchup
- cs.IR
- data-reduction
- llm-application
- log-analysis
- production-incident-diagnosis
- site-reliability-engineering
arxiv_id: '2607.08529'
categories: cs.IR
why_read: This text details Log-Insight, a system for automating SRE triage workflows
  to diagnose large-scale production incidents. You will learn how structured log
  processing and evidence reduction enable LLMs to perform effective root cause analysis
  despite their context limitations.
authors:
- Carlos Garcia-Hernandez
- Aymane Abdali
- Guangyu Wu
- Mingxue Wang
- Fei Shen
- Zhaoyu Pang
- Yanbin Zhang
---

SREs diagnosing microservice incidents face a daunting task: millions of log lines generated in minutes, far exceeding any LLM context window. Direct LLM-based Root Cause Analysis (RCA) is infeasible.

Log-Insight, deployed in production at Huawei, automates this with a neuro-symbolic approach. It replicates a skilled SRE's workflow: structured symbolic stages reduce millions of events by 1,000-7,000x.

This compact, pre-ranked evidence dossier is then handed to an LLM for synthesis into a hypothesis report. On 11 historical production incidents, Log-Insight achieved MRR = 0.790, returning the correct root cause within the top-3 hypotheses in over 90% of runs, all under a minute.

Solve the massive log problem: augment LLMs with symbolic preprocessing for accurate, automated incident diagnosis.
