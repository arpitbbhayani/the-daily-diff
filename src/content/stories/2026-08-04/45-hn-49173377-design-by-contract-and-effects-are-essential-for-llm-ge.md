---
title: Design by Contract and effects are essential for LLM-generated code
source: hn
url: https://gavinray97.github.io/blog/design-by-contract-and-effects-for-llms
date: '2026-08-04'
tags:
- catchup
- code-verification
- design-by-contract
- effects-programming
- hn
- llm-generated-code
section: ai
interest_score: 8
depth_score: 7
utility_score: 8
novelty_score: 8
hn_id: '49173377'
comments: https://news.ycombinator.com/item?id=49173377
why_read: This post explains why Design by Contract and Effects are crucial language
  features in the era of LLM-authored code. Readers will learn how these concepts
  improve code verifiability and enable compiler-generated semantic change reports.
authors:
- Gavin Ray
---

Applying Design-by-Contract and effect systems to LLM-generated code is not just a theoretical exercise; it is becoming a practical necessity for reliable development. As more code shifts from human to AI authorship, the ability to verifiably ensure "code that does what it says on the tin" is paramount.

This approach allows for compiler-generated reports of semantic changes in a pull request, like "Effects added: PaymentProcessor.process + net.connect" or "Postcondition weakened: Ledger.append." This level of automated verification is crucial for trusting AI-authored components, especially in complex systems.

It is a fresh perspective on ensuring correctness and maintainability, moving beyond mere testing to formal specification. This is a powerful step towards integrating LLMs into robust software delivery pipelines, providing senior engineers with tools to manage the inherent uncertainties of AI output.
