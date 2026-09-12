---
title: Demonstrating Four Agentic RAG Working Patterns with LangGraph
source: github
url: https://github.com/ChandulaSenevirathna/Agentic_RAG
date: '2026-09-10'
tags:
- agentic-rag
- catchup
- github
- langgraph
- llm-agents
- retrieval-augmented-generation
- tool-calling
section: ai
interest_score: 8
depth_score: 8
utility_score: 8
novelty_score: 7
hn_id: '49639637'
comments: https://news.ycombinator.com/item?id=49639637
why_read: This resource demonstrates four distinct ways to implement agentic Retrieval-Augmented
  Generation (RAG) pipelines using LangGraph. Readers will learn how to build RAG
  systems that can decide, self-correct, or involve a human in the loop, rather than
  just blindly retrieving information.
authors:
- ChandulaSenevirathna
---

Most RAG implementations hit a wall when retrieval goes wrong, simply failing or hallucinating. This open-source repository offers practical, LangGraph-powered solutions that move beyond static RAG. It demonstrates four distinct agentic patterns for building truly resilient LLM applications.

You will explore how to implement self-correction, adaptive routing, and even human-in-the-loop mechanisms. Imagine your RAG system deciding whether to retrieve, which knowledge base to use, or falling back to a live web search if local documents are insufficient. This is not just theoretical; these are working Jupyter notebooks showing how to build systems that grade their own retrieved content and generated answers.

This project is a blueprint for senior engineers looking to upgrade their applied AI systems from basic RAG to intelligent, self-aware agents that handle ambiguity and errors gracefully. Stop building blind retrieval systems and start building intelligent ones.
