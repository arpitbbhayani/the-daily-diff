---
title: SOC 2 compliance is flexible and does not require pull requests
source: hn
url: https://ampcode.com/notes/thats-not-soc-2-compliant
date: '2026-08-13'
tags:
- audit-controls
- automated-ci
- catchup
- change-process
- ci/cd
- continuous-shipping
- hn
- pull-requests
- restricted-access
- risk-management
- signed-commits
- soc-2-compliance
section: engineering
interest_score: 8
depth_score: 7
utility_score: 9
novelty_score: 8
hn_id: '49288055'
comments: https://news.ycombinator.com/item?id=49288055
why_read: This article demonstrates that SOC 2 compliance is more flexible than commonly
  assumed, particularly regarding development practices like pull requests. Readers
  will learn how a company achieved compliance by focusing on risk management and
  alternative controls, enabling continuous shipping.
authors:
- tosh
---

The dogma of 'pull requests are mandatory for SOC 2 compliance' is often challenged, and this article provides a compelling case study of a company that achieved compliance without them. They focused on the underlying principles of risk and control, not specific tools.

Instead of PRs, their strategy involved restricted push access to main, enforced signed commits for verifiable authorship, and robust automated CI that blocks bad changes. A detailed audit trail, linking commits to internal discussion threads, replaced the PR review history.

This demonstrates that compliance is about proving that changes are authorized, tested, approved, and recorded – not about adhering to a specific development workflow. It offers a powerful lesson in adapting engineering practices to achieve both efficiency and regulatory requirements. You can achieve high velocity without compromising on security or auditability.
