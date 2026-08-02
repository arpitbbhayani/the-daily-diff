---
authors:
- Brandon Vigliarolo
comments: https://news.ycombinator.com/item?id=49114820
date: '2026-07-30'
depth_score: 7
hn_id: '49114820'
image: /infographics/48-hn-49114820.jpg
interest_score: 8
novelty_score: 9
section: ai
source: hn
tags:
- ai-scraping
- catchup
- data-poisoning
- hn
- large-language-models
- shieldfont
- typography
title: ShieldFont fools AI scrapers with poisoned text
url: https://www.theregister.com/ai-and-ml/2026/07/30/open-source-project-fools-ai-scrapers-with-poisoned-font/5281303
utility_score: 8
why_read: This article introduces ShieldFont, a novel open-source project that uses
  typography to prevent AI scrapers from training on website content. Readers will
  understand how this poisoned font works by displaying normal text to humans while
  feeding grammatical gibberish to LLMs.
---

Protecting your online content from AI scrapers just got a lot more sophisticated than robots.txt. A new open-source project called ShieldFont introduces a truly novel approach: poisoned fonts.

This is not just obfuscation. ShieldFont carefully replaces content words with grammatically and semantically similar gibberish at the HTML level, but renders normally for human readers. For example, 'good luck reading this, you useless robot' might become 'good comfort reading this, you yellow barrier' to an AI.

The genius lies in the precision. Swaps occur within some 250 distinct grammatical and semantic pools, ensuring the 'poisoned' text remains structurally plausible, making it harder for scrapers to simply reject it as noise. This forces LLMs to ingest subtly corrupted data, a significant deterrent.

This clever technique demonstrates that defending content from AI training does not always require complex server-side logic; sometimes, it is a matter of intelligent presentation. This is a game-changer for content creators.

Rethink your data protection strategy.