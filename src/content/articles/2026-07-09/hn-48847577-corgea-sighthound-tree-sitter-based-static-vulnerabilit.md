---
title: Corgea Sighthound Tree-sitter Based Static Vulnerability Scanner
source: hn
url: https://github.com/Corgea/Sighthound
date: '2026-07-09'
tags:
- application-security
- catchup
- csharp
- go
- hn
- html
- java
- javascript
- pattern-matching
- php
- python
- ruby
- sast-scanner
- source-code-scanning
- static-analysis
- taint-analysis
- tree-sitter
- typescript
- vulnerability-detection
score: 19
hn_id: '48847577'
comments: https://news.ycombinator.com/item?id=48847577
why_read: This text introduces Corgea Sighthound, a rule-based SAST scanner that leverages
  Tree-sitter for AST-aware vulnerability detection using pattern matching and taint-flow
  analysis. It details the scanner's core functionality and supported programming
  languages.
authors:
- asadeddin
author: asadeddin
---

Integrating static analysis into your CI/CD pipeline is critical, and Sighthound offers a robust open-source solution. This Tree-sitter based SAST scanner goes beyond basic linting.

Sighthound performs both pattern matching and taint-flow analysis, tracking data from source to sink to identify real security vulnerabilities. It supports multiple languages including Python, JavaScript, Java, PHP, C#, Go, and Ruby.

The tool handles multi-file projects, executes in parallel, and outputs findings in various formats like JSON and SARIF. This empowers engineering teams to proactively detect and remediate security issues, improving overall code health and engineering practices.

Leverage Sighthound to elevate your team's code quality and strengthen your security posture effectively.
