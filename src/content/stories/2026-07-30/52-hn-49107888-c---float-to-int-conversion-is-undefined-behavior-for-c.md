---
authors:
- signa11
comments: https://news.ycombinator.com/item?id=49107888
date: '2026-07-30'
depth_score: 8
hn_id: '49107888'
image: /infographics/52-hn-49107888.jpg
interest_score: 8
novelty_score: 7
section: engineering
source: hn
tags:
- c++
- catchup
- float-to-int-conversion
- gsl
- hn
- narrowing-conversion
- undefined-behavior
title: C++ float-to-int conversion is undefined behavior for certain inputs
url: https://kttnr.net/blog/cpp-float-to-int-conversion-undefined-behavior/
utility_score: 8
why_read: This text explains a common, subtle undefined behavior in C++ related to
  float-to-int conversion. It highlights how widely this issue is misunderstood, even
  appearing in standard libraries like GSL, prompting careful review of casting practices.
---

Many C++ developers are unaware that converting a float to an integer can easily lead to undefined behavior, even with explicit casts or seemingly safe library functions. This happens when the truncated float value falls outside the representable range of the target integer type.

For example, `int i = static_cast<int>(some_float_value);` is UB if `some_float_value` is `FLT_MAX` or `FLT_MIN`. The compiler might optimize based on the assumption that UB will not occur, leading to unpredictable crashes or silent data corruption in production.

Even `gsl::narrow`, from the Guidelines Support Library, fails to protect against this specific UB case, which is a surprising finding. Relying on "benign" UB for certain platforms is a risky proposition for long-term code health.

To truly be safe, always check the bounds before casting or use a custom function that handles overflow explicitly, throwing an exception or returning an error. Understanding these deep language subtleties is crucial for writing robust C++ code.