---
authors:
- James O'Claire
comments: https://news.ycombinator.com/item?id=49102884
date: '2026-07-29'
depth_score: 7
hn_id: '49102884'
image: /infographics/62-hn-49102884.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- application-deployment
- catchup
- dependency-management
- hn
- pip
- pip-freeze
- pyproject-toml
- requirements-txt
title: Pip's new --only-deps flag simplifies application dependency management
url: https://jamesoclaire.com/2026/07/23/pip-26-2-only-deps-solves-16-years-of-app-deployment-hacks/
utility_score: 9
why_read: This article details how pip 26.2's --only-deps flag finally resolves a
  16-year-old pain point in Python application dependency management, offering a simpler
  deployment workflow. Readers will learn about this new feature and the historical
  workarounds it replaces.
---

For years, managing Python dependencies for applications that were not meant to be installed as full packages has been a headache. Developers have resorted to cumbersome pip freeze manipulation or manual install_requires hacks, especially for backend services or scripts.

Pip 26.2 finally solves this with the pip install --only-deps . flag. This new feature allows you to directly install only the dependencies listed in your pyproject.toml or setup.cfg without attempting to install the project itself. It is a game-changer for CI/CD and production deployments.

This small but mighty update eliminates 16 years of workaround hell, dramatically improving reproducibility and simplifying deployment workflows for Python projects.